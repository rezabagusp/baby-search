var sequelize = require('./../dbconnection');
var departemen = sequelize.import('departemen.model');

module.exports = function(sequelize, DataType){
	return sequelize.define('mahasiswa',{
        nama_mahasiswa:DataType.STRING,
        nim_mahasiswa:DataType.STRING,
        nama_user:DataType.STRING,
        password_user:DataType.STRING,
        email_user:DataType.STRING,
        role:DataType.STRING,
        fk_departemen_id:{
          type: DataType.INTEGER,
          references: {
            model: departemen,
            key: 'id'
          }
		}
    });
}