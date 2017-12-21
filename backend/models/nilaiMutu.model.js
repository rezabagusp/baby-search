var sequelize = require('./../dbconnection');

module.exports = function(sequelize, DataType){
	return sequelize.define('nilaiMutu',{
        batas_bawah:DataType.INTEGER,
        batas_atas:DataType.INTEGER,
        huruf_mutu:DataType.STRING
    });
}