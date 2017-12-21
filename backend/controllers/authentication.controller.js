var express = require('express'),
	sequelize = require('../dbconnection'),
    jwt = require('jsonwebtoken'),
    fetch = require('node-fetch'),    
    crypto = require('crypto');

var mahasiswa = sequelize.import('./../models/mahasiswa.model');

// akases LDAP IPB
function ldap_auth(username, password){
    let url = "http://ng.rajamuda.web.id/ldap_auth.php?username="+username+"&password="+password;

    return fetch(url)
        .then(mhs => {
            return mhs.text();
        })
}

class Authentication{

    constructor(){}

    tokenCheck(token){
        try{
            var decoded = jwt.verify(token, '1n1k3y');
            return decoded;
        }catch(err){
            return null;
        }
    }

    getUserInfo(req, res){
        var jwt_decoded = this.tokenCheck(req.headers['authorization']);
        if(!jwt_decoded){
            res.status(401).json({status: false, message: "token error"});
        }else{
            var username = jwt_decoded.nama_user;
            mahasiswa.findOne({
                attributes: ['nama_mahasiswa','nim_mahasiswa','nama_user','email_user'],
                where: {
                    nama_user: username
                }
            }).then(function(mhs){
                let data = {};

                data['name'] = mhs.nama_mahasiswa;
                data['nim'] = mhs.nim_mahasiswa;
                data['email'] = mhs.email_user;
                data['tahun_masuk'] = "20"+mhs.nim_mahasiswa.substring(3,5);
                data['semester'] = jwt_decoded.smt;

                res.status(200).json({status: true, message: "token valid", mhs_info: data});
            }).catch(function(err){
                res.status(500).json({status: false, message: "query error", err: err});
            })
        }

    }

    login(data,username,password){
        return mahasiswa.findOne({
            where: {
                nama_user: username
            }
        }).then(function(mhs){
            var login_time = Math.floor(Date.now()/1000);
            var jwtData = {
                id_mahasiswa : mhs.id,
                nama_user:username,
                smt:data.semester,
                iat: login_time,
                exp: login_time + 3600 // expired in 1 hour
            };
            var token = jwt.sign(jwtData, '1n1k3y');
            if(!mhs){
                return mahasiswa.create({
                    nama_mahasiswa:data.name,
                    nim_mahasiswa:data.nim,
                    nama_user:username,
                    password_user:crypto.createHash('sha256').update(password).digest('hex'),
                    email_user:data.email,
                    role:'mahasiswa',
                    fk_departemen_id: 6
                }).then(function(){
                    return token;
                }).catch(function(err){
                    console.log(err);
                    return null;
                })
            }else{
                return token;
            }
        }).catch(function(err){
            console.log(err);
            return null
        })
        
    }

    login_ldap(data, res){
        var username = data.body.username;
        var password = data.body.password;
        ldap_auth(username, password)
            .then(data => {
                console.log('masuk then')
                if(data.indexOf('null') !== -1){
                    res.status(401).json({status: false, message: 'wrong username or password'});
                }else{
                    data = JSON.parse(data);
                    
                    let d = new Date();
                    let name = data.cn['0'];
                    let nim = data.nrp['0'];
                    let tahun_masuk = data.angkatan['0'];
                    let email = data.mail['0'];
                    let angkatan = parseInt(data.angkatan['0'])-1963;
                    let semester = null;
                    if(d.getMonth() >= 2 && d.getMonth() <= 8){
                        semester = (d.getFullYear()-parseInt(data.angkatan['0']))*2;
                    }else{
                        semester = (d.getFullYear()-parseInt(data.angkatan['0']))*2 + 1;                    
                    }

                    var mhs_info = {
                        name: name,
                        nim: nim,
                        email: email,
                        tahun_masuk: tahun_masuk,
                        angkatan: angkatan,
                        semester: semester
                    }
                    this.login(mhs_info,username,password)
                        .then(function(retval){
                            if(retval !== null){
                                console.log(retval);
                                res.status(200).json({status: true, message: 'login success yang baru', mhs_info: mhs_info, token: retval});
                            }else{
                                res.status(403).json({status: false, message: 'an error occured', err: retval});
                            }
                        })
                        .catch(function(err){
                            res.status(500).json({status: false, message: 'an error occured', err: err});
                        })
                    
                }
            });        

    }
}

module.exports = new Authentication;