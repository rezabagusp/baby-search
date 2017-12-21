var sequelize = require('./../dbconnection');
var departemen = sequelize.import(__dirname + '/../models/departemen.model');
departemen.sync().then(()=>{
	departemen.bulkCreate([{
		nama_departemen:'Statistika'
	},{
		nama_departemen:'Geofisika dan Meteorologi'
	},{
		nama_departemen:'Biologi'
	},{
		nama_departemen:'Kimia'
	},{
		nama_departemen:'Matematika'
	},{
		nama_departemen:'Ilmu Komputer'
	},{
		nama_departemen:'Fisika'
	},{
		nama_departemen:'Biokimia'
	}
	]);

});