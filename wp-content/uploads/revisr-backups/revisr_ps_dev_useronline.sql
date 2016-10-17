
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
DROP TABLE IF EXISTS `ps_dev_useronline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_useronline` (
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_type` varchar(20) NOT NULL DEFAULT 'guest',
  `user_id` bigint(20) NOT NULL DEFAULT '0',
  `user_name` varchar(250) NOT NULL DEFAULT '',
  `user_ip` varchar(39) NOT NULL DEFAULT '',
  `user_agent` text NOT NULL,
  `page_title` text NOT NULL,
  `page_url` varchar(255) NOT NULL DEFAULT '',
  `referral` varchar(255) NOT NULL DEFAULT '',
  UNIQUE KEY `useronline_id` (`timestamp`,`user_type`,`user_ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_useronline` WRITE;
/*!40000 ALTER TABLE `ps_dev_useronline` DISABLE KEYS */;
INSERT INTO `ps_dev_useronline` VALUES ('2016-06-03 15:02:24','guest',0,'Gast','104.209.188.207','Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5','PFALZSOLAR &raquo; /de/','/de/',''),('2016-06-03 15:02:33','guest',0,'Gast','23.101.61.176','Mozilla/5.0 (Windows NT 6.1; WOW64) SkypeUriPreview Preview/0.5','PFALZSOLAR &raquo; /de/','/de/',''),('2016-06-03 15:03:18','member',1,'admin','93.192.207.28','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.63 Safari/537.36','PFALZSOLAR &raquo; Verwaltung &raquo; Typekit Fonts','/wp-admin/options-general.php?page=typekit-admin.php','http://pfalzsolar.werkvoll.design/wp-admin/admin.php?page=wpcf7-integration&service=recaptcha'),('2016-06-03 15:04:24','guest',0,'Gast','212.65.0.188','','PFALZSOLAR &raquo; /?randomHash=f1b20610583ed831beaf578b551ad890','/?randomHash=f1b20610583ed831beaf578b551ad890',''),('2016-06-03 15:04:58','guest',0,'Guest','178.2.199.202','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36','PFALZSOLAR &raquo; /en/','/en/','http://pfalzsolar.werkvoll.design/de/');
/*!40000 ALTER TABLE `ps_dev_useronline` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

