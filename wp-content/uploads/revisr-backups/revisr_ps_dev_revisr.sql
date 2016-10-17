
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
DROP TABLE IF EXISTS `ps_dev_revisr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_revisr` (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `message` text,
  `event` varchar(42) NOT NULL,
  `user` varchar(60) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_revisr` WRITE;
/*!40000 ALTER TABLE `ps_dev_revisr` DISABLE KEYS */;
INSERT INTO `ps_dev_revisr` VALUES (1,'2016-10-12 20:18:24','Error pushing changes to the remote repository.','error','admin'),(2,'2016-10-12 20:18:33','Successfully backed up the database.','backup','admin'),(3,'2016-10-12 20:19:21','Committed <a href=\"http://pfalzsolar.werkvoll.design/wp-admin/admin.php?page=revisr_view_commit&commit=6f0c1bd&success=true\">#6f0c1bd</a> to the local repository.','commit','admin'),(4,'2016-10-12 20:19:35','Error pushing changes to the remote repository.','error','admin'),(5,'2016-10-12 20:21:29','Error pushing changes to the remote repository.','error','admin'),(6,'2016-10-12 20:24:32','Error pushing changes to the remote repository.','error','admin'),(7,'2016-10-12 20:25:48','Error pushing changes to the remote repository.','error','admin'),(8,'2016-10-12 20:27:24','Error pushing changes to the remote repository.','error','admin'),(9,'2016-10-12 20:46:36','Error pushing changes to the remote repository.','error','admin'),(10,'2016-10-12 20:47:33','Error pushing changes to the remote repository.','error','admin'),(11,'2016-10-12 20:48:34','Error pushing changes to the remote repository.','error','admin'),(12,'2016-10-12 20:49:23','Error pushing changes to the remote repository.','error','admin'),(13,'2016-10-12 20:50:32','Successfully created a new repository.','init','admin'),(14,'2016-10-12 20:51:56','Error pushing changes to the remote repository.','error','admin'),(15,'2016-10-12 20:58:13','Successfully created a new repository.','init','admin'),(16,'2016-10-12 21:07:16','Error pushing changes to the remote repository.','error','admin'),(17,'2016-10-12 21:09:13','Successfully pushed 18 commits to master/master.','push','admin'),(18,'2016-10-12 21:10:13','Error backing up the database.','error','Revisr Bot'),(19,'2016-10-12 21:10:13','The daily backup was successful.','backup','Revisr Bot'),(20,'2016-10-13 11:56:04','Successfully backed up the database.','backup','admin'),(21,'2016-10-13 11:57:28','Committed <a href=\"http://pfalzsolar.werkvoll.design/wp-admin/admin.php?page=revisr_view_commit&commit=f45faa0&success=true\">#f45faa0</a> to the local repository.','commit','admin'),(22,'2016-10-13 13:46:24','Error pushing changes to the remote repository.','error','admin'),(23,'2016-10-13 13:53:28','Error pushing changes to the remote repository.','error','admin'),(24,'2016-10-13 14:00:14','Error pushing changes to the remote repository.','error','admin'),(25,'2016-10-13 14:05:54','Successfully backed up the database.','backup','admin'),(26,'2016-10-13 21:20:03','Successfully backed up the database.','backup','Revisr Bot'),(27,'2016-10-13 21:20:03','The daily backup was successful.','backup','Revisr Bot'),(28,'2016-10-14 23:45:26','Successfully backed up the database.','backup','Revisr Bot'),(29,'2016-10-14 23:45:27','The daily backup was successful.','backup','Revisr Bot'),(30,'2016-10-15 23:47:07','Successfully backed up the database.','backup','Revisr Bot'),(31,'2016-10-15 23:47:07','The daily backup was successful.','backup','Revisr Bot'),(32,'2016-10-16 21:18:50','Successfully backed up the database.','backup','Revisr Bot'),(33,'2016-10-16 21:18:50','The daily backup was successful.','backup','Revisr Bot'),(34,'2016-10-17 18:01:37','Committed <a href=\"http://pfalzsolar.werkvoll.design/wp-admin/admin.php?page=revisr_view_commit&commit=d0ede4a&success=true\">#d0ede4a</a> to the local repository.','commit','admin'),(35,'2016-10-17 18:02:03','Successfully backed up the database.','backup','admin'),(36,'2016-10-17 18:04:34','Error pushing changes to the remote repository.','error','admin'),(37,'2016-10-17 18:21:23','Error pushing changes to the remote repository.','error','admin'),(38,'2016-10-17 18:41:07','Successfully created a new repository.','init','admin');
/*!40000 ALTER TABLE `ps_dev_revisr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

