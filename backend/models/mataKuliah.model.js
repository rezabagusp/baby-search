var sequelize = require('./../dbconnection');

module.exports = function(sequelize, DataType){
	return sequelize.define('mataKuliah',{
        kode_mata_kuliah: DataType.STRING,
        nama_mata_kuliah:DataType.STRING,
        semester:DataType.INTEGER,
        is_class: DataType.BOOLEAN
    });
}