
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
DROP TABLE IF EXISTS `rinck_icl_flags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rinck_icl_flags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lang_code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flag` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_template` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `lang_code` (`lang_code`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rinck_icl_flags` WRITE;
/*!40000 ALTER TABLE `rinck_icl_flags` DISABLE KEYS */;
INSERT INTO `rinck_icl_flags` VALUES (1,'ar','ar.png',0),(2,'bg','bg.png',0),(3,'bs','bs.png',0),(4,'ca','ca.png',0),(5,'cs','cs.png',0),(6,'cy','cy.png',0),(7,'da','da.png',0),(8,'de','de.png',0),(9,'el','el.png',0),(10,'en','en.png',0),(11,'eo','eo.png',0),(12,'es','es.png',0),(13,'et','et.png',0),(14,'eu','eu.png',0),(15,'fa','fa.png',0),(16,'fi','fi.png',0),(17,'fr','fr.png',0),(18,'ga','ga.png',0),(19,'he','he.png',0),(20,'hi','hi.png',0),(21,'hr','hr.png',0),(22,'hu','hu.png',0),(23,'hy','hy.png',0),(24,'id','id.png',0),(25,'is','is.png',0),(26,'it','it.png',0),(27,'ja','ja.png',0),(28,'ko','ko.png',0),(29,'ku','ku.png',0),(30,'la','la.png',0),(31,'lt','lt.png',0),(32,'lv','lv.png',0),(33,'mk','mk.png',0),(34,'mn','mn.png',0),(35,'ms','ms.png',0),(36,'mt','mt.png',0),(37,'nb','nb.png',0),(38,'ne','ne.png',0),(39,'nl','nl.png',0),(40,'pa','pa.png',0),(41,'pl','pl.png',0),(42,'pt-br','pt-br.png',0),(43,'pt-pt','pt-pt.png',0),(44,'qu','qu.png',0),(45,'ro','ro.png',0),(46,'ru','ru.png',0),(47,'sk','sk.png',0),(48,'sl','sl.png',0),(49,'so','so.png',0),(50,'sq','sq.png',0),(51,'sr','sr.png',0),(52,'sv','sv.png',0),(53,'ta','ta.png',0),(54,'th','th.png',0),(55,'tr','tr.png',0),(56,'uk','uk.png',0),(57,'ur','ur.png',0),(58,'uz','uz.png',0),(59,'vi','vi.png',0),(60,'yi','yi.png',0),(61,'zh-hans','zh-hans.png',0),(62,'zh-hant','zh-hant.png',0),(63,'zu','zu.png',0);
/*!40000 ALTER TABLE `rinck_icl_flags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

