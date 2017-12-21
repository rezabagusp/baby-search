var sequelize = require('./../dbconnection');
var mataKuliah = sequelize.import(__dirname + '/../models/mataKuliah.model');
mataKuliah.sync().then(()=>{
	mataKuliah.bulkCreate([{ //1
        kode_mata_kuliah:'mat219',
        nama_mata_kuliah:'Aljabar Linear',
        semester:3,
        is_class:1
    },
    {//2
        kode_mata_kuliah:'mat232',
        nama_mata_kuliah:'Pemrograman Linear',
        semester:4,
        is_class:1
    },
    {//3
        kode_mata_kuliah:'mat234',
        nama_mata_kuliah:'Graf Algoritmik',
        semester:4,
        is_class:1
    },
    {//4
        kode_mata_kuliah:'mat100',
        nama_mata_kuliah:'Pengantar Matematika',
        semester:1,
        is_class:0
    },//5
    {
        kode_mata_kuliah:'mat103',
        nama_mata_kuliah:'Kalkulus',
        semester:2,
        is_class:0
    }, 
    {//6
        kode_mata_kuliah:'kom101',
        nama_mata_kuliah:'Algoritme',
        semester:2,
        is_class:0
    },        
    {//7
        kode_mata_kuliah:'stk201',
        nama_mata_kuliah:'Metode Statistika ',
        semester:3,
        is_class:0
    },  
    {//8
        kode_mata_kuliah:'kom209',
        nama_mata_kuliah:'Struktur Diskret',
        semester:3,
        is_class:0
    },            
    {//9
        kode_mata_kuliah:'kom220',
        nama_mata_kuliah:'TOK/Pengantar Matematika Komputasi',
        semester:4,
        is_class:0
    },            
    {//10
        kode_mata_kuliah:'kom325',
        nama_mata_kuliah:'Komputasi Numerik',
        semester:5,
        is_class:0
    },            
    {//11
        kode_mata_kuliah:'kom200',
        nama_mata_kuliah:'Dasar Pemrograman',
        semester:3,
        is_class:0
    },            
    {//12
        kode_mata_kuliah:'kom331',
        nama_mata_kuliah:'Pemrograman Tak Linear',
        semester:5,
        is_class:1
    },            
    {//13
        kode_mata_kuliah:'mat431',
        nama_mata_kuliah:'Pemodelan Riset Operasi',
        semester:7,
        is_class:1
    },
    {//14
        kode_mata_kuliah:'stk211',
        nama_mata_kuliah:'Metode Penarikan Contoh',
        semester:4,
        is_class:1
    },
    {//15
        kode_mata_kuliah:'stk222',
        nama_mata_kuliah:'Perancangan Percobaan',
        semester:4,
        is_class:1
    },
    {//16
        kode_mata_kuliah:'stk331',
        nama_mata_kuliah:'Analisis Regresi',
        semester:5,
        is_class:1
    },
    {//17
        kode_mata_kuliah:'stk351',
        nama_mata_kuliah:'Pengantar Analisis Kategorik',
        semester:6,
        is_class:1
    },
    {//18
        kode_mata_kuliah:'stk351',
        nama_mata_kuliah:'Metode Peramalan Deret Waktu',
        semester:6,
        is_class:1
    },
    {//19
        kode_mata_kuliah:'kpm130',
        nama_mata_kuliah:'Sosiologi Umum',
        semester:1,
        is_class:0
    },
    {//20
        kode_mata_kuliah:'agb100',
        nama_mata_kuliah:'Pengantar Kewirausahaan',
        semester:1,
        is_class:0
    },
    {//21
        kode_mata_kuliah:'stk202',
        nama_mata_kuliah:'Pengantar Hitung Peluang',
        semester:3,
        is_class:0
    },
    {//22
        kode_mata_kuliah:'eko100',
        nama_mata_kuliah:'Ekonomi Umum',
        semester:3,
        is_class:0
    },           
    {//23
        kode_mata_kuliah:'ipb100',
        nama_mata_kuliah:'Agama',
        semester:2,
        is_class:0
    },           
    {//24
        kode_mata_kuliah:'ipb111',
        nama_mata_kuliah:'Pancasila',
        semester:2,
        is_class:0
    },
    {//25
        kode_mata_kuliah:'kom205',
        nama_mata_kuliah:'Basis Data',
        semester:4,
        is_class:0
    },           
    {//26
        kode_mata_kuliah:'kom206',
        nama_mata_kuliah:'Organisasi dan Arsitektur Komputer',
        semester:6,
        is_class:0
    }, 
    {//27
        kode_mata_kuliah:'kom203',
        nama_mata_kuliah:'Rangkaian Digital',
        semester:3,
        is_class:0
    },   
    {//28
        kode_mata_kuliah:'kom207',
        nama_mata_kuliah:'Struktur Data',
        semester:4,
        is_class:0
    },                         

    // mata2 kuliah SC
    {//29
        kode_mata_kuliah:'ikk233',
        nama_mata_kuliah:'Perilaku Konsumen',
        semester:3,
        is_class:1
    },
    {//30
        kode_mata_kuliah:'man111',
        nama_mata_kuliah:'Pengantar Manajemen',
        semester:3,
        is_class:1
    },
    {//31
        kode_mata_kuliah:'kpm210',
        nama_mata_kuliah:'Dasar-Dasar Komunikasi',
        semester:3,
        is_class:1
    },    
    {//32
        kode_mata_kuliah:'ikk322',
        nama_mata_kuliah:'Pengembangan Karakter',
        semester:3,
        is_class:1
    },        
    
    // start id 29 mata kuiiah elektif
    {//33
        kode_mata_kuliah:'kom341',
        nama_mata_kuliah:'Pengantar Teknologi Spasial',
        semester:5,
        is_class:1
    },
    {//34
        kode_mata_kuliah:'kom415',
        nama_mata_kuliah:'Pengantar SIstem Tertanam dan Robotika',
        semester:5,
        is_class:1
    },
    {//35
        kode_mata_kuliah:'kom431',
        nama_mata_kuliah:'Temu Kembali Informasi',
        semester:5,
        is_class:1
    }
	]);

});