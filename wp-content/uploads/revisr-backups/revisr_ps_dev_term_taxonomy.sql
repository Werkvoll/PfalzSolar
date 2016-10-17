
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
DROP TABLE IF EXISTS `ps_dev_term_taxonomy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_term_taxonomy` (
  `term_taxonomy_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `term_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `taxonomy` varchar(32) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`term_taxonomy_id`),
  UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  KEY `taxonomy` (`taxonomy`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_term_taxonomy` WRITE;
/*!40000 ALTER TABLE `ps_dev_term_taxonomy` DISABLE KEYS */;
INSERT INTO `ps_dev_term_taxonomy` VALUES (1,1,'category','',0,0),(2,2,'scope','',0,33),(3,3,'layout_type','',0,11),(4,4,'module_width','',0,39),(5,5,'scope','',0,9),(9,9,'project_category','',0,0),(10,10,'nav_menu','',0,14),(11,11,'module_width','',0,3),(12,12,'layout_type','',0,1),(13,13,'group','',0,8),(14,14,'group','',0,4),(15,15,'group','',0,3),(16,16,'category','',0,3),(17,17,'category','',0,3),(18,18,'category','',0,2),(19,19,'category','',0,0),(20,20,'layout_type','',0,29),(21,21,'popup_category','',0,1),(25,25,'category','',28,14),(26,26,'category','',28,123),(27,27,'category','',28,4),(28,28,'category','',0,0),(29,29,'nav_menu','',0,3),(30,30,'category','',0,0),(35,35,'category','',0,3),(36,36,'category','',0,2),(37,37,'nav_menu','',0,8),(38,38,'category','',0,4),(39,39,'category','',0,14),(40,40,'nav_menu','',0,0),(41,41,'category','',0,1),(42,42,'category','',0,1),(43,43,'layout_type','',0,1);
/*!40000 ALTER TABLE `ps_dev_term_taxonomy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

