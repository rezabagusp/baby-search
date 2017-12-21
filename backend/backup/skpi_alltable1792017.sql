CREATE TABLE IF NOT EXISTS `departemens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_departemen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `ekstrakurikulers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_ekstrakurikuler` varchar(255) DEFAULT NULL,
  `tanggal_mulai` datetime DEFAULT NULL,
  `tanggal_selesai` datetime DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `negara` varchar(255) DEFAULT NULL,
  `bukti_ekstrakurikuler` varchar(255) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `status_submit` tinyint(1) DEFAULT '0',
  `status_verifikasi_ekstrakurikuler` int(11) DEFAULT '0',
  `fk_mahasiswa_id` int(11) DEFAULT NULL,
  `fk_skor_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mahasiswa_id` (`fk_mahasiswa_id`),
  KEY `fk_skor_id` (`fk_skor_id`),
  CONSTRAINT `ekstrakurikulers_ibfk_1` FOREIGN KEY (`fk_mahasiswa_id`) REFERENCES `mahasiswas` (`id`),
  CONSTRAINT `ekstrakurikulers_ibfk_2` FOREIGN KEY (`fk_skor_id`) REFERENCES `skors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `kategoris` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `mahasiswas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_mahasiswa` varchar(255) DEFAULT NULL,
  `nim_mahasiswa` varchar(255) DEFAULT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `password_user` varchar(255) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `fk_departemen_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_departemen_id` (`fk_departemen_id`),
  CONSTRAINT `mahasiswas_ibfk_1` FOREIGN KEY (`fk_departemen_id`) REFERENCES `departemens` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `mutus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_mutu` varchar(255) DEFAULT NULL,
  `batas_bawah` int(11) DEFAULT NULL,
  `batas_atas` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `skors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skor` int(11) DEFAULT NULL,
  `fk_sub_kategori_id` int(11) DEFAULT NULL,
  `fk_tingkat_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sub_kategori_id` (`fk_sub_kategori_id`),
  KEY `fk_tingkat_id` (`fk_tingkat_id`),
  CONSTRAINT `skors_ibfk_1` FOREIGN KEY (`fk_sub_kategori_id`) REFERENCES `sub_kategoris` (`id`),
  CONSTRAINT `skors_ibfk_2` FOREIGN KEY (`fk_tingkat_id`) REFERENCES `tingkats` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `sub_kategoris` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_sub_kategori` varchar(255) DEFAULT NULL,
  `fk_kategori_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_kategori_id` (`fk_kategori_id`),
  CONSTRAINT `sub_kategoris_ibfk_1` FOREIGN KEY (`fk_kategori_id`) REFERENCES `kategoris` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `tingkats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_tingkat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_user` varchar(255) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `password_user` varchar(255) DEFAULT NULL,
  `role` enum('admin','departemen','fakultas') DEFAULT NULL,
  `fk_departemen_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_departemen_id` (`fk_departemen_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`fk_departemen_id`) REFERENCES `departemens` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (1,'Statistika','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (2,'Geofisika dan Meteorologi','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (3,'Biologi','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (4,'Kimia','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (5,'Matematika','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (6,'Ilmu Komputer','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (7,'Fisika','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (8,'Biokimia','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');
INSERT INTO `departemens` (`id`,`nama_departemen`,`createdAt`,`updatedAt`) VALUES (9,'fmipa','2017-10-15 17:46:08.000','2017-10-15 17:46:08.000');

INSERT INTO `ekstrakurikulers` (`id`,`nama_ekstrakurikuler`,`tanggal_mulai`,`tanggal_selesai`,`kota`,`negara`,`bukti_ekstrakurikuler`,`keterangan`,`status_submit`,`status_verifikasi_ekstrakurikuler`,`fk_mahasiswa_id`,`fk_skor_id`,`createdAt`,`updatedAt`) VALUES (1,'Web Competition','2017-10-15 07:00:00.000','2017-10-15 07:00:00.000','Jakarta','Indonesia','G64140023-1508064752422.jpg','',1,1,1,7,'2017-10-15 17:52:34.000','2017-10-15 17:53:14.000');
INSERT INTO `ekstrakurikulers` (`id`,`nama_ekstrakurikuler`,`tanggal_mulai`,`tanggal_selesai`,`kota`,`negara`,`bukti_ekstrakurikuler`,`keterangan`,`status_submit`,`status_verifikasi_ekstrakurikuler`,`fk_mahasiswa_id`,`fk_skor_id`,`createdAt`,`updatedAt`) VALUES (3,'CP','2017-10-15 07:00:00.000','2017-10-15 07:00:00.000','Jakarta','Indonesia','G64140023-1508081335851.PNG','',1,1,1,1,'2017-10-15 22:28:58.000','2017-10-15 23:22:44.000');
INSERT INTO `ekstrakurikulers` (`id`,`nama_ekstrakurikuler`,`tanggal_mulai`,`tanggal_selesai`,`kota`,`negara`,`bukti_ekstrakurikuler`,`keterangan`,`status_submit`,`status_verifikasi_ekstrakurikuler`,`fk_mahasiswa_id`,`fk_skor_id`,`createdAt`,`updatedAt`) VALUES (4,'CTF','2017-10-15 07:00:00.000','2017-10-15 07:00:00.000','Jakarta','Indonesia','G64140023-1508084522826.jpg','',1,1,1,1,'2017-10-15 23:22:04.000','2017-10-15 23:22:37.000');

INSERT INTO `kategoris` (`id`,`nama_kategori`,`createdAt`,`updatedAt`) VALUES (1,'Kegiatan kemahasiswaan','2017-10-15 17:45:38.000','2017-10-15 17:45:38.000');
INSERT INTO `kategoris` (`id`,`nama_kategori`,`createdAt`,`updatedAt`) VALUES (2,'Himpunan/Organisasi Profesi Kemahasiswaan','2017-10-15 17:45:38.000','2017-10-15 17:45:38.000');

INSERT INTO `mahasiswas` (`id`,`nama_mahasiswa`,`nim_mahasiswa`,`nama_user`,`password_user`,`email_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (1,'Reza Bagus Permana','G64140023','reza_bagusp','264c8c381bf16c982a4e59b0dd4c6f7808c51a05f64c35db42cc78a2a72875bb','rezabaguspermana.rbp@gmail.com','mahasiswa',6,'2017-10-15 17:46:24.000','2017-10-15 20:51:38.000');

INSERT INTO `mutus` (`id`,`nama_mutu`,`batas_bawah`,`batas_atas`,`createdAt`,`updatedAt`) VALUES (1,'Sangat Baik',40,200,'2017-10-15 17:46:54.000','2017-10-15 17:46:54.000');
INSERT INTO `mutus` (`id`,`nama_mutu`,`batas_bawah`,`batas_atas`,`createdAt`,`updatedAt`) VALUES (2,'Baik',20,39,'2017-10-15 17:46:54.000','2017-10-15 17:46:54.000');
INSERT INTO `mutus` (`id`,`nama_mutu`,`batas_bawah`,`batas_atas`,`createdAt`,`updatedAt`) VALUES (3,'Cukup',10,19,'2017-10-15 17:46:54.000','2017-10-15 17:46:54.000');
INSERT INTO `mutus` (`id`,`nama_mutu`,`batas_bawah`,`batas_atas`,`createdAt`,`updatedAt`) VALUES (4,'Kurang',5,9,'2017-10-15 17:46:54.000','2017-10-15 17:46:54.000');

INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (1,5,1,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (2,4,2,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (3,4,3,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (4,3,4,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (5,3,5,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (6,2,6,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (7,4,1,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (8,3,2,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (9,3,3,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (10,2,4,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (11,2,5,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (12,2,6,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (13,2,1,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (14,2,2,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (15,1,3,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (16,1,4,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (17,1,5,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (18,1,6,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (19,6,7,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (20,5,8,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (21,4,9,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (22,3,10,1,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (23,5,7,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (24,4,8,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (25,3,9,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (26,2,10,2,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (27,4,7,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (28,3,8,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (29,2,9,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');
INSERT INTO `skors` (`id`,`skor`,`fk_sub_kategori_id`,`fk_tingkat_id`,`createdAt`,`updatedAt`) VALUES (30,1,10,3,'2017-10-15 17:46:01.000','2017-10-15 17:46:01.000');

INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (1,'Kompetisi ilmiah/kewirausahaan/kebudayaan/seni/olah raga',1,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (2,'Magang/kerja praktek/mengajar/asistensi di luar kegiatan kurikuler',1,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (3,'Presentasi dalam seminar/lokakarya/konferensi ',1,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (4,'Tampil dalam kebudayaan/seni/olah raga',1,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (5,'Ketua panitia dalam kegiatan kemahasiswaan',1,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (6,'Anggota panitia/peserta seminar/lokakarya/konferensi',1,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (7,'Sebagai ketua',2,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (8,'Sebagai wakil ketua',2,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (9,'Sebagai ketua seksi',2,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');
INSERT INTO `sub_kategoris` (`id`,`nama_sub_kategori`,`fk_kategori_id`,`createdAt`,`updatedAt`) VALUES (10,'Sebagai anggota',2,'2017-10-15 17:45:46.000','2017-10-15 17:45:46.000');

INSERT INTO `tingkats` (`id`,`nama_tingkat`,`createdAt`,`updatedAt`) VALUES (1,'Internasional','2017-10-15 17:45:53.000','2017-10-15 17:45:53.000');
INSERT INTO `tingkats` (`id`,`nama_tingkat`,`createdAt`,`updatedAt`) VALUES (2,'Nasional','2017-10-15 17:45:53.000','2017-10-15 17:45:53.000');
INSERT INTO `tingkats` (`id`,`nama_tingkat`,`createdAt`,`updatedAt`) VALUES (3,'Lokal','2017-10-15 17:45:53.000','2017-10-15 17:45:53.000');

INSERT INTO `users` (`id`,`nama_user`,`email_user`,`password_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (1,'dept1','dept1@gmail.com','6aa5febaa3a4a3f4a57955998ecb2c930be8092a82cf4ac33a20a9c2bf1a343d','departemen',1,'2017-10-15 17:46:31.000','2017-10-15 18:00:40.000');
INSERT INTO `users` (`id`,`nama_user`,`email_user`,`password_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (2,'admin','admin@gmail.com','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918','admin',NULL,'2017-10-15 17:46:31.000','2017-10-15 17:46:31.000');
INSERT INTO `users` (`id`,`nama_user`,`email_user`,`password_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (3,'dept3','dept3@gmail.com','dept3','departemen',3,'2017-10-15 17:46:31.000','2017-10-15 17:46:31.000');
INSERT INTO `users` (`id`,`nama_user`,`email_user`,`password_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (4,'fakultas','fakultas@gmail.com','432829e5d286441084f58417153302429f8431191bd685709866cc442dd93de8','departemen',9,'2017-10-15 17:51:47.000','2017-10-15 17:51:47.000');
INSERT INTO `users` (`id`,`nama_user`,`email_user`,`password_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (5,'dept6','dept6@gmail.com','cfb07c80e83f95d006cedac7a9cb4c105e4b69d8e18df6597549040504a60bcd','departemen',6,'2017-10-15 18:01:07.000','2017-10-15 18:01:07.000');