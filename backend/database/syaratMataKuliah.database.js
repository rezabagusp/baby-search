var sequelize = require('./../dbconnection');
var syaratMataKuliah = sequelize.import(__dirname + '/../models/syaratMataKuliah.model');
syaratMataKuliah.sync().then(()=>{
	syaratMataKuliah.bulkCreate([{
        fk_mata_kuliah_id: 1, //aljabar linear
        syarat_mata_kuliah_id : 4
    },
    {
        fk_mata_kuliah_id: 1,
        syarat_mata_kuliah_id : 5
    },
    {
        fk_mata_kuliah_id: 2, //Pemrograman Linear
        syarat_mata_kuliah_id : 1 
    },    
    {
        fk_mata_kuliah_id: 2,
        syarat_mata_kuliah_id : 4
    },
    {
        fk_mata_kuliah_id: 2,
        syarat_mata_kuliah_id : 5
    },
    {
        fk_mata_kuliah_id: 2,
        syarat_mata_kuliah_id : 6
    },    
    {
        fk_mata_kuliah_id: 2,
        syarat_mata_kuliah_id : 7
    },    
    {
        fk_mata_kuliah_id: 3,
        syarat_mata_kuliah_id : 4
    },
    {
        fk_mata_kuliah_id: 3,
        syarat_mata_kuliah_id : 6
    },
    {
        fk_mata_kuliah_id: 3,
        syarat_mata_kuliah_id : 8
    },
    {
        fk_mata_kuliah_id: 12,
        syarat_mata_kuliah_id : 4
    },        
    {
        fk_mata_kuliah_id: 12,
        syarat_mata_kuliah_id : 5
    },        
    {
        fk_mata_kuliah_id: 12,
        syarat_mata_kuliah_id : 9
    },        
    {
        fk_mata_kuliah_id: 12,
        syarat_mata_kuliah_id : 10
    },        
    {
        fk_mata_kuliah_id: 13,
        syarat_mata_kuliah_id : 2
    },            
    {
        fk_mata_kuliah_id: 13,
        syarat_mata_kuliah_id : 3
    },
    {
        fk_mata_kuliah_id: 13,
        syarat_mata_kuliah_id : 4
    },
    {
        fk_mata_kuliah_id: 13,
        syarat_mata_kuliah_id : 5
    },
    {
        fk_mata_kuliah_id: 13,
        syarat_mata_kuliah_id : 6
    },
    {
        fk_mata_kuliah_id: 13,
        syarat_mata_kuliah_id : 11
    }, 
    {
        fk_mata_kuliah_id: 29,
        syarat_mata_kuliah_id : 19
    },                       
    {
        fk_mata_kuliah_id: 29,
        syarat_mata_kuliah_id : 20
    }, 
    {
        fk_mata_kuliah_id: 30,
        syarat_mata_kuliah_id : 19
    },         
    {
        fk_mata_kuliah_id: 30,
        syarat_mata_kuliah_id : 20
    },             
    {
        fk_mata_kuliah_id: 30,
        syarat_mata_kuliah_id : 22
    },                 
    {
        fk_mata_kuliah_id: 31,
        syarat_mata_kuliah_id : 19
    },                     
    {
        fk_mata_kuliah_id: 32,
        syarat_mata_kuliah_id : 23
    },                         
    {
        fk_mata_kuliah_id: 32,
        syarat_mata_kuliah_id : 24
    }, 
    {
        fk_mata_kuliah_id: 33,
        syarat_mata_kuliah_id : 7
    },                           
    {
        fk_mata_kuliah_id: 33,
        syarat_mata_kuliah_id : 25
    },
    {
        fk_mata_kuliah_id: 34,
        syarat_mata_kuliah_id : 26
    },    
    {
        fk_mata_kuliah_id: 34,
        syarat_mata_kuliah_id : 27
    },
    {
        fk_mata_kuliah_id: 35,
        syarat_mata_kuliah_id : 8
    },
    {
        fk_mata_kuliah_id: 35,
        syarat_mata_kuliah_id : 11
    }, 
    {
        fk_mata_kuliah_id: 35,
        syarat_mata_kuliah_id : 21
    },       
    {
        fk_mata_kuliah_id: 35,
        syarat_mata_kuliah_id : 28
    },    
    ]);
});