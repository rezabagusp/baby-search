var sequelize = require('./../dbconnection');
var historyMataKuliah = sequelize.import(__dirname + '/../models/historyMataKuliah.model');
historyMataKuliah.sync().then(()=>{
	historyMataKuliah.bulkCreate([{
        fk_mahasiswa_id: 1, //reza
        fk_mata_kuliah_id : 4, //pengantar matematika
        fk_nilai_mutu_id: 4,
        status: null        
    },
    {//id 2
        fk_mahasiswa_id: 1, //reza
        fk_mata_kuliah_id : 5, //kalkulus
        fk_nilai_mutu_id: 4,
        status: null        
    },
    {// id 3
        fk_mahasiswa_id: 3, //fadhlal 
        fk_mata_kuliah_id : 4, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },
    {// id 4
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 5, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },
    {// id 5
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 1, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },
    {// id 6
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 2, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },
    {// id 7
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 3, //kalkulus
        fk_nilai_mutu_id: 2,
        status: null        
    },    
    {// id 8
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 6, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 9
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 7, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 10
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 8, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 11
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 9, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 12
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 10, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 13
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 11, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 14
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 12, //kalkulus
        fk_nilai_mutu_id: 2,
        status: null        
    },    
    {// id 15
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 19, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 16
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 20, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    

    {// id 17
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 21, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 18
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 22, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 19
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 25, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 20
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 26, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 21
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 27, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    {// id 22
        fk_mahasiswa_id: 3, 
        fk_mata_kuliah_id : 28, //kalkulus
        fk_nilai_mutu_id: 1,
        status: null        
    },    
    ]);
});