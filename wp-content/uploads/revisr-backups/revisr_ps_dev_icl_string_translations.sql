
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
DROP TABLE IF EXISTS `ps_dev_icl_string_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_icl_string_translations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `string_id` bigint(20) unsigned NOT NULL,
  `language` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL,
  `value` text COLLATE utf8mb4_unicode_ci,
  `translator_id` bigint(20) unsigned DEFAULT NULL,
  `translation_service` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `batch_id` int(11) NOT NULL DEFAULT '0',
  `translation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `string_language` (`string_id`,`language`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_icl_string_translations` WRITE;
/*!40000 ALTER TABLE `ps_dev_icl_string_translations` DISABLE KEYS */;
INSERT INTO `ps_dev_icl_string_translations` VALUES (1,253,'en',10,'PFALZSOLAR NEWSCENTER',NULL,'',0,'2016-06-03 07:55:37'),(2,244,'en',10,'LATEST PROJECT AND COMPANY NEWS',NULL,'',0,'2016-06-03 07:57:39'),(3,243,'en',10,'learn more',NULL,'',0,'2016-06-03 08:00:28'),(4,232,'en',10,'Commissioning',NULL,'',0,'2016-06-03 08:04:24'),(5,233,'en',10,'Power',NULL,'',0,'2016-06-03 08:05:16'),(6,254,'en',10,'Type of module',NULL,'',0,'2016-06-03 08:06:42'),(7,255,'en',10,'Number of modules',NULL,'',0,'2016-06-03 08:08:07'),(8,77,'en',10,'Annual output in MWh',NULL,'',0,'2016-06-03 08:09:46'),(9,76,'en',10,'Annual output',NULL,'',0,'2016-06-03 08:10:01'),(10,256,'en',10,'Annual Output',NULL,'',0,'2016-06-03 08:11:14'),(11,257,'en',10,'Total surface of the facility',NULL,'',0,'2016-06-03 08:13:18'),(12,72,'en',10,'Polycrystalline',NULL,'',0,'2016-06-03 08:16:04'),(13,73,'en',10,'Monocrystalline',NULL,'',0,'2016-06-03 08:16:52'),(14,74,'en',10,'Thin film',NULL,'',0,'2016-06-03 08:17:31'),(15,258,'en',10,'Inverter',NULL,'',0,'2016-06-03 09:18:28'),(16,250,'en',10,'References',NULL,'',0,'2016-06-03 09:36:25'),(17,239,'en',10,'Your contact partner',NULL,'',0,'2016-06-03 10:31:48'),(18,251,'en',10,'... there for you',NULL,'',0,'2016-06-03 10:35:20'),(19,225,'en',10,'Mit gutem Gefühl in die Zukunft',NULL,'',0,'2016-06-04 16:03:37'),(20,57,'en',10,'Commissioning',NULL,'',0,'2016-06-13 12:18:36'),(21,279,'de',10,'Unsere Kunden und Geschäftspartner',NULL,'',0,'2016-07-11 07:20:27'),(22,279,'en',10,'Our customers & partners ',NULL,'',0,'2016-07-11 07:22:45');
/*!40000 ALTER TABLE `ps_dev_icl_string_translations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

