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

INSERT INTO `mahasiswas` (`id`,`nama_mahasiswa`,`nim_mahasiswa`,`nama_user`,`password_user`,`email_user`,`role`,`fk_departemen_id`,`createdAt`,`updatedAt`) VALUES (1,'Reza Bagus Permana','G64140023','reza_bagusp','264c8c381bf16c982a4e59b0dd4c6f7808c51a05f64c35db42cc78a2a72875bb','rezabaguspermana.rbp@gmail.com','mahasiswa',6,'2017-10-15 17:46:24.000','2017-10-15 20:51:38.000');

INSERT INTO `ekstrakurikulers` (`id`,`nama_ekstrakurikuler`,`tanggal_mulai`,`tanggal_selesai`,`kota`,`negara`,`bukti_ekstrakurikuler`,`keterangan`,`status_submit`,`status_verifikasi_ekstrakurikuler`,`fk_mahasiswa_id`,`fk_skor_id`,`createdAt`,`updatedAt`) VALUES (1,'Web Competition','2017-10-15 07:00:00.000','2017-10-15 07:00:00.000','Jakarta','Indonesia','G64140023-1508064752422.jpg','',1,1,1,7,'2017-10-15 17:52:34.000','2017-10-15 17:53:14.000');
INSERT INTO `ekstrakurikulers` (`id`,`nama_ekstrakurikuler`,`tanggal_mulai`,`tanggal_selesai`,`kota`,`negara`,`bukti_ekstrakurikuler`,`keterangan`,`status_submit`,`status_verifikasi_ekstrakurikuler`,`fk_mahasiswa_id`,`fk_skor_id`,`createdAt`,`updatedAt`) VALUES (3,'CP','2017-10-15 07:00:00.000','2017-10-15 07:00:00.000','Jakarta','Indonesia','G64140023-1508081335851.PNG','',1,1,1,1,'2017-10-15 22:28:58.000','2017-10-15 23:22:44.000');
INSERT INTO `ekstrakurikulers` (`id`,`nama_ekstrakurikuler`,`tanggal_mulai`,`tanggal_selesai`,`kota`,`negara`,`bukti_ekstrakurikuler`,`keterangan`,`status_submit`,`status_verifikasi_ekstrakurikuler`,`fk_mahasiswa_id`,`fk_skor_id`,`createdAt`,`updatedAt`) VALUES (4,'CTF','2017-10-15 07:00:00.000','2017-10-15 07:00:00.000','Jakarta','Indonesia','G64140023-1508084522826.jpg','',1,1,1,1,'2017-10-15 23:22:04.000','2017-10-15 23:22:37.000');