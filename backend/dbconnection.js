var Sequelize = require('sequelize');

module.exports = new Sequelize('predicx', 'root', '', {//database, username, passwotd
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 3600
	},
	timezone: '+07:00'
});

/*module.exports = new Sequelize('postgres://octqmbabhecvcx:dc804df450b037fe7a8132a7ec88e546c92881f0e9c806e86db0214b72748fd5@ec2-23-23-244-83.compute-1.amazonaws.com:5432/dl8q0i9mveql0');*/