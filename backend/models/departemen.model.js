var sequelize = require('./../dbconnection');

module.exports = function(sequelize, DataType){
	return sequelize.define('departemen',{
        nama_departemen:DataType.STRING
    });
}