var sequelize = require('./../dbconnection');
var mataKuliah = sequelize.import('mataKuliah.model');

module.exports = function(sequelize, DataType){
	return sequelize.define('syaratMataKuliah',{ //tipo, harusnya syarat matakuliah, kalo mau diganti, generate ulang
        fk_mata_kuliah_id:{
          type: DataType.INTEGER,
          references: {
            model: mataKuliah,
            key: 'id'
          }
        },
        syarat_mata_kuliah_id: DataType.INTEGER
          
    });
}