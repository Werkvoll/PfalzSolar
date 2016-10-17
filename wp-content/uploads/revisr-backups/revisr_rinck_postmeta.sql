
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
DROP TABLE IF EXISTS `rinck_postmeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rinck_postmeta` (
  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`meta_id`),
  KEY `post_id` (`post_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rinck_postmeta` WRITE;
/*!40000 ALTER TABLE `rinck_postmeta` DISABLE KEYS */;
INSERT INTO `rinck_postmeta` VALUES (1,2,'_wp_page_template','default'),(2,4,'_form','<label> Ihr Name (Pflichtfeld)\n    [text* your-name] </label>\n\n<label> Ihre E-Mail-Adresse (Pflichtfeld)\n    [email* your-email] </label>\n\n<label> Betreff\n    [text your-subject] </label>\n\n<label> Ihre Nachricht\n    [textarea your-message] </label>\n\n[submit \"Senden\"]'),(3,4,'_mail','a:8:{s:7:\"subject\";s:23:\"Packet \"[your-subject]\"\";s:6:\"sender\";s:45:\"[your-name] <wordpress@paket.werkvoll.design>\";s:4:\"body\";s:187:\"Von: [your-name] <[your-email]>\nBetreff: [your-subject]\n\nNachrichtentext:\n[your-message]\n\n--\nDiese E-Mail wurde von einem Kontaktformular von Packet (http://rink.werkvoll.design) gesendet\";s:9:\"recipient\";s:15:\"axel@dawolke.de\";s:18:\"additional_headers\";s:22:\"Reply-To: [your-email]\";s:11:\"attachments\";s:0:\"\";s:8:\"use_html\";i:0;s:13:\"exclude_blank\";i:0;}'),(4,4,'_mail_2','a:9:{s:6:\"active\";b:0;s:7:\"subject\";s:23:\"Packet \"[your-subject]\"\";s:6:\"sender\";s:40:\"Packet <wordpress@paket.werkvoll.design>\";s:4:\"body\";s:130:\"Nachrichtentext:\n[your-message]\n\n--\nDiese E-Mail wurde von einem Kontaktformular von Packet (http://rink.werkvoll.design) gesendet\";s:9:\"recipient\";s:12:\"[your-email]\";s:18:\"additional_headers\";s:25:\"Reply-To: axel@dawolke.de\";s:11:\"attachments\";s:0:\"\";s:8:\"use_html\";i:0;s:13:\"exclude_blank\";i:0;}'),(5,4,'_messages','a:8:{s:12:\"mail_sent_ok\";s:54:\"Vielen Dank für deine Mitteilung. Sie wurde versandt.\";s:12:\"mail_sent_ng\";s:111:\"Beim Versuch, deine Mitteilung zu versenden, ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.\";s:16:\"validation_error\";s:91:\"Ein oder mehrere Felder sind fehlerhaft. Bitte überprüfe sie und versuche es noch einmal.\";s:4:\"spam\";s:111:\"Beim Versuch, deine Mitteilung zu versenden, ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.\";s:12:\"accept_terms\";s:73:\"Du musst die Bedingungen akzeptieren bevor du deine Mitteilung absendest.\";s:16:\"invalid_required\";s:26:\"Das Feld ist erforderlich.\";s:16:\"invalid_too_long\";s:21:\"Das Feld ist zu lang.\";s:17:\"invalid_too_short\";s:21:\"Das Feld ist zu kurz.\";}'),(6,4,'_additional_settings',NULL),(7,4,'_locale','de_DE'),(8,5,'_et_pb_predefined_layout','on'),(9,5,'_et_pb_built_for_post_type','page'),(10,6,'_et_pb_predefined_layout','on'),(11,6,'_et_pb_built_for_post_type','page'),(12,7,'_et_pb_predefined_layout','on'),(13,7,'_et_pb_built_for_post_type','page'),(14,8,'_et_pb_predefined_layout','on'),(15,8,'_et_pb_built_for_post_type','page'),(16,9,'_et_pb_predefined_layout','on'),(17,9,'_et_pb_built_for_post_type','page'),(18,10,'_et_pb_predefined_layout','on'),(19,10,'_et_pb_built_for_post_type','page'),(20,11,'_et_pb_predefined_layout','on'),(21,11,'_et_pb_built_for_post_type','page'),(22,12,'_et_pb_predefined_layout','on'),(23,12,'_et_pb_built_for_post_type','page'),(24,13,'_et_pb_predefined_layout','on'),(25,13,'_et_pb_built_for_post_type','page'),(26,14,'_et_pb_predefined_layout','on'),(27,14,'_et_pb_built_for_post_type','page'),(28,15,'_et_pb_predefined_layout','on'),(29,15,'_et_pb_built_for_post_type','page'),(30,16,'_et_pb_predefined_layout','on'),(31,16,'_et_pb_built_for_post_type','page'),(32,17,'_et_pb_predefined_layout','on'),(33,17,'_et_pb_built_for_post_type','page'),(34,18,'_et_pb_predefined_layout','on'),(35,18,'_et_pb_built_for_post_type','page'),(36,19,'_et_pb_predefined_layout','on'),(37,19,'_et_pb_built_for_post_type','page'),(38,20,'_et_pb_predefined_layout','on'),(39,20,'_et_pb_built_for_post_type','page'),(40,21,'_et_pb_predefined_layout','on'),(41,21,'_et_pb_built_for_post_type','page'),(42,22,'_et_pb_predefined_layout','on'),(43,22,'_et_pb_built_for_post_type','page'),(44,23,'_et_pb_predefined_layout','on'),(45,23,'_et_pb_built_for_post_type','page'),(46,24,'_et_pb_predefined_layout','on'),(47,24,'_et_pb_built_for_post_type','page'),(48,25,'_et_pb_predefined_layout','on'),(49,25,'_et_pb_built_for_post_type','page'),(50,26,'_et_pb_predefined_layout','on'),(51,26,'_et_pb_built_for_post_type','page'),(52,27,'_et_pb_predefined_layout','on'),(53,27,'_et_pb_built_for_post_type','page'),(54,28,'_et_pb_predefined_layout','on'),(55,28,'_et_pb_built_for_post_type','page'),(56,29,'_et_pb_predefined_layout','on'),(57,29,'_et_pb_built_for_post_type','page'),(58,30,'_et_pb_predefined_layout','on'),(59,30,'_et_pb_built_for_post_type','page'),(60,31,'_et_pb_predefined_layout','on'),(61,31,'_et_pb_built_for_post_type','page'),(62,32,'_et_pb_predefined_layout','on'),(63,32,'_et_pb_built_for_post_type','page'),(64,33,'_et_pb_predefined_layout','on'),(65,33,'_et_pb_built_for_post_type','page'),(66,34,'_et_pb_predefined_layout','on'),(67,34,'_et_pb_built_for_post_type','page'),(68,35,'_et_pb_predefined_layout','on'),(69,35,'_et_pb_built_for_post_type','page'),(70,36,'_et_pb_predefined_layout','on'),(71,36,'_et_pb_built_for_post_type','page');
/*!40000 ALTER TABLE `rinck_postmeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

