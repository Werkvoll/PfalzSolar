
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
DROP TABLE IF EXISTS `ps_dev_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `slug` varchar(200) NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_id`),
  KEY `slug` (`slug`(191)),
  KEY `name` (`name`(191))
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_terms` WRITE;
/*!40000 ALTER TABLE `ps_dev_terms` DISABLE KEYS */;
INSERT INTO `ps_dev_terms` VALUES (1,'Allgemein','allgemein',0),(2,'not_global','not_global',0),(3,'module','module',0),(4,'regular','regular',0),(5,'global','global',0),(10,'Main Menü','main-menue',0),(11,'fullwidth','fullwidth',0),(12,'row','row',0),(13,'1# VOR DEM BAU IHRER PHOTOVOLTAIKANLAGE','vor-dem-bau-ihrer-photovoltaikanlage',0),(14,'2# BAU &amp; BETRIEB IHRER PHOTOVOLTAIKANLAGE','bau-betrieb-ihrer-photovoltaikanlage',0),(15,'3# EIGENVERBRAUCH: SOLARSTROM SPEICHERN','eigenverbrauch-solarstrom-speichern',0),(16,'startseite','startseite',0),(17,'Investoren','investoren',0),(18,'Job','job',0),(19,'News','news',0),(20,'section','section',0),(21,'Privat','privat',0),(25,'Solarparks','parks',0),(26,'Private Dachanlagen','small',0),(27,'Große Dachanlagen','big',0),(28,'Projekte','references',0),(29,'Referenzen','referenzen',0),(30,'Uncategorized','uncategorized',0),(35,'investors','investors-en',0),(36,'startpage','startpage-en',0),(37,'Menu_ENG','menu_eng',0),(38,'industrial rooftop','industrial-rooftop',0),(39,'solar parks','solar-parks',0),(40,'Footer','footer',0),(41,'versicherungen','versicherungen',0),(42,'Versicherungen_02','versicherungen_02',0),(43,'layout','layout',0);
/*!40000 ALTER TABLE `ps_dev_terms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

