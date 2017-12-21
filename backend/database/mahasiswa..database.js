var sequelize = require('./../dbconnection');
var mahasiswa = sequelize.import(__dirname + '/../models/mahasiswa.model');
mahasiswa.sync().then(()=>{
	mahasiswa.bulkCreate([{
        nama_mahasiswa:'Reza Bagus Permana',
        nim_mahasiswa:'G64140023',
        nama_user:'reza_bagusp',
        password_user:'264c8c381bf16c982a4e59b0dd4c6f7808c51a05f64c35db42cc78a2a72875bb',
        email_user:'rezabaguspermana.rbp@gmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },
    {
        nama_mahasiswa:'Selfi Qisthina',
        nim_mahasiswa:'G64140059',
        nama_user:'selfi_qisthina',
        password_user:'b47641d221b67a5ab7309211ed96c33a93501b467ec6abc4f6bcc788ba751c8b',
        email_user:'selfiqisthina@yahoo.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },
    {
        nama_mahasiswa:'Fadhlal Khaliq Surado',
        nim_mahasiswa:'G64140015',
        nama_user:'surado_rajomudo',
        password_user:'f9b75e3010b17e6ad52645da0bbe8d60e61db9926c622fdd7cb2a6f0c559d3e5',
        email_user:'fksutan.rajomudo@gmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },
    {
        nama_mahasiswa:'Muhammad Rofiq Gempur Tirani',
        nim_mahasiswa:'G64140062',
        nama_user:'muhammad_rofiq',
        password_user:'f3834f5a37011ac1619847c339a2ff3d616524ceccbe8ee82d6a6ae4e9f8e673',
        email_user:'Muhamad.rofiq@gmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },    
    {
        nama_mahasiswa:'ISFAN ADILA FAJRIAN',
        nim_mahasiswa:'G64140083',
        nama_user:'isfan_adila',
        password_user:'c82fd42e9161a075bf8b9d9380f7771419df487c1f0eac92325525b04df8bba1',
        email_user:'isfun_2_be_me@hotmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },        
    {
        nama_mahasiswa:'Parhan Zikkry Padly',
        nim_mahasiswa:'G64140011',
        nama_user:'parhan_lenovoz',
        password_user:'c7e0c7fee3f1c309d0729da34544f476f2d98b1c8998cc06b148be30da53e32a',
        email_user:'parhanzikkry@yahoo.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },        
    {
        nama_mahasiswa:'Ilman Na\'Afian Wirawan',
        nim_mahasiswa:'G64140024',
        nama_user:'ilman_nw',
        password_user:'9eb756f81c53c334a1e0d22ee97aff818a2aebfa9ba21a45e855f76a63073cdb',
        email_user:'ilcong_13@hotmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },            
    {
        nama_mahasiswa:'AKHIYAR WALADI',
        nim_mahasiswa:'G64130012',
        nama_user:'akiyar',
        password_user:'2e7216bfce734bc033e2cdecdd440acdbfc7fb03a1a6a2ee2974d77136c90930',
        email_user:'akiyar@student.ipb.ac.id',
        role:'mahasiswa',
        fk_departemen_id: 6
    },                
    {
        nama_mahasiswa:'ARIEF MAULIDY N',
        nim_mahasiswa:'G64140075',
        nama_user:'arief_maulidy',
        password_user:'1f13df4c397d8766846c853eef8c51c14de8b5cebd985c9609741479bd5f5fe3',
        email_user:'arief.maulidy14@gmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },                    
    {
        nama_mahasiswa:'M RAIHAN FAJRI',
        nim_mahasiswa:'G64140074',
        nama_user:'raihan_fajri',
        password_user:'594d7741d32fbca8e664c209532947adb770d7ef602939d6bc6d0420f5df7a50',
        email_user:'raihanfajri1206@gmail.com',
        role:'mahasiswa',
        fk_departemen_id: 6
    },                        
    ]);
});