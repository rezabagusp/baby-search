var sequelize = require('./../dbconnection');
var mataKuliah = sequelize.import('mataKuliah.model');
var nilaiMutu = sequelize.import('nilaiMutu.model');

module.exports = function(sequelize, DataType){
	return sequelize.define('nilaiMataKuliah',{
        fk_mata_kuliah_id:{
          type: DataType.INTEGER,
          references: {
            model: mataKuliah,
            key: 'id'
          }
        },
        fk_nilai_mutu_id:{
          type: DataType.INTEGER,
          references: {
            model: nilaiMutu,
            key: 'id'
          }
		}        
    });
}