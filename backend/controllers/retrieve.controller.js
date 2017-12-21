var express = require('express'),
	sequelize = require('../dbconnection'),
    pyshell = require('python-shell');    
var Auth = require('./authentication.controller');
var Matkul = require('./matakuliah.controller');

var mahasiswa = sequelize.import('./../models/mahasiswa.model');
var historyMataKuliah = sequelize.import('./../models/historyMataKuliah.model');
var matakuliah = sequelize.import('./../models/mataKuliah.model');
var nilaiMutu = sequelize.import('./../models/nilaiMutu.model');

mahasiswa.hasMany(historyMataKuliah, {foreignKey: 'fk_mahasiswa_id'});
historyMataKuliah.belongsTo(mahasiswa, {foreignKey: 'fk_mahasiswa_id', targetKey: 'id'});
matakuliah.hasMany(historyMataKuliah, {foreignKey: 'fk_mata_kuliah_id'});
historyMataKuliah.belongsTo(matakuliah, {foreignKey: 'fk_mata_kuliah_id', targetKey: 'id'});
nilaiMutu.hasMany(historyMataKuliah, {foreignKey: 'fk_nilai_mutu_id'});
historyMataKuliah.belongsTo(nilaiMutu, {foreignKey: 'fk_nilai_mutu_id', targetKey: 'id'});

class Predictor{

    constructor(){}

    retrieving(req, res){
        console.log(req.body.query)
        var query = req.body.query;
        if(!query){
            res.status(200).json({status: false, message:'Uncomplete Request'})
        }
        else {
            let py_options = {
                scriptPath: __dirname+"/../../IRmodel/cadangan",
                mode: 'json',
                args: [query]
            };

            //running python as child proses
            pyshell.run('kueri.py', py_options, function(err, result){
                if(err){
                    res.status(200).json({status: false, message: err});
                }else{
                    res.status(200).json({status: true, message: "balikan python", result: result})
                }
            });   
        }     
    }


}

module.exports = new Predictor;