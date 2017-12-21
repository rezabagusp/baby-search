var express = require('express'),
    sequelize = require('../dbconnection');
var Auth = require('./authentication.controller');

var matakuliah = sequelize.import('./../models/mataKuliah.model');
var syaratmatakuliah = sequelize.import('./../models/syaratMataKuliah.model');
var historyMataKuliah = sequelize.import('./../models/historyMataKuliah.model');
var nilaiMutu = sequelize.import('./../models/nilaiMutu.model');
var mahasiswa = sequelize.import('./../models/mahasiswa.model');

matakuliah.hasMany(syaratmatakuliah, {foreign_key: 'fk_mata_kuliah_id'});
syaratmatakuliah.belongsTo(matakuliah, {as: 'mk', foreignKey: 'fk_mata_kuliah_id', targetKey: 'id'});
matakuliah.hasMany(syaratmatakuliah, {foreign_key: 'syarat_mata_kuliah_id'});
syaratmatakuliah.belongsTo(matakuliah, {as: 'smk', foreignKey: 'syarat_mata_kuliah_id', targetKey: 'id'});


class MataKuliah{
    constructor(){}

    getPrasyarat(matkulId){
        return syaratmatakuliah.findAll({
            attributes: ['id'],
            include: [{model: matakuliah, as: 'mk', attributes: ['nama_mata_kuliah','kode_mata_kuliah', 'semester'], where: {id:matkulId}},{model: matakuliah, as: 'smk', attributes: ['nama_mata_kuliah','kode_mata_kuliah']}],
        }).then(function(data){
            return data;
        }).catch(function(err){
            return null;
        })
    }

    getMatkul(req,res){ //ambil matkul yang mau diprediksi
        var mhsInfo = Auth.tokenCheck(req.headers['authorization']);

        if(mhsInfo != null){
            matakuliah.findAll({
                where: {is_class: true, semester: {$lte: mhsInfo.smt}}
            }).then(function(data){
                res.status(200).json({status: true, message: "success", data: data});
            }).catch(function(err){
                res.status(500).json({status: false, message: "an error occured", err: err})
            })
        }else{
            res.status(401).json({status:false, message:"Authentication failed"});
        }
        
    }

    getHistoryMatkuls(req, res){
        var mhsInfo = Auth.tokenCheck(req.headers['authorization']);

        // menerima id mahasiswa
        var id_mahasiswa = req.query.id_mahasiswa;
        console.log('id mahasiswa ', id_mahasiswa)
        if(mhsInfo != null){
            historyMataKuliah.findAll({
                include:[{ 
                    model: mahasiswa
                },{
                    model: nilaiMutu
                },{
                    model: matakuliah
                }],
                where:{
                    fk_mahasiswa_id: id_mahasiswa
                }
            }).then((hasil)=>{
                res.status(200).json({status: true, message:"success get history mata kuliah", result: hasil})
            }).catch((err)=>{
                res.status(500).json({status: false, message:"Internal Server Error"});
            })
        }
        else{
            res.status(401).json({status: false, message:"Authentication Failed"})
        }
    }
}

module.exports = new MataKuliah;