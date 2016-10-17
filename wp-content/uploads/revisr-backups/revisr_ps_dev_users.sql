
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `ps_dev_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_users` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(255) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`),
  KEY `user_email` (`user_email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_users` WRITE;
/*!40000 ALTER TABLE `ps_dev_users` DISABLE KEYS */;
INSERT INTO `ps_dev_users` VALUES (1,'admin','$P$B4KYUb2mUng9v3WIVcQ4SFJrLk9ZBa1','admin','info@dawolke.de','','2015-10-28 13:00:31','1458569001:$P$BK78RXmf6PtkL8r1r2w7qxUJXyBg9k/',0,'admin'),(2,'werkvoll','$P$BJiKIAjOCw7MQwJkwuMsRypHvDc2sg0','werkvoll','werkvoll@gmail.com','http://werkvoll.de','2016-02-09 18:10:14','1455041414:$P$BUrR1bURWJUbOq9FntIMlFvKT182By0',0,'Philip Klich'),(3,'Kim Steinbach','$P$BXJF32tATAVih0E55HpoUuG4/i3XCk1','kim-steinbach','kim.steinbach@pfalzsolar.de','','2016-04-20 11:50:25','1461153153:$P$Bh2qeigIiDdiwU9cdIz66tRnTUmYXe/',0,'Kim Steinbach'),(4,'Markus BIllharz','$P$B1l0sZZpNnFnYS2/58Tt6ZOxC9dfIH0','markus-billharz','Markus.Billharz@gmail.com','','2016-09-27 09:07:41','1475588949:$P$BApIp2.BXCkSz9zqaCe/O.3Etz0jPG/',0,'Markus BIllharz'),(5,'Christin','$P$Bv8J80ENOq5Xai8KcEnyjNzxOSJvjg0','christin','christin.klag@pfalzsolar.de','','2016-10-04 13:21:06','',0,'Christin klag');
/*!40000 ALTER TABLE `ps_dev_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

