var sequelize = require('./../dbconnection');
var mahasiswa = sequelize.import('mahasiswa.model');

module.exports = function(sequelize, DataType){
	return sequelize.define('mahasiswaModel',{
        file_model:DataType.STRING,
        file_model_scaler:DataType.STRING,
        fk_mahasiswa_id:{
          type: DataType.INTEGER,
          references: {
            model: mahasiswa,
            key: 'id'
          }
		}
    });
}