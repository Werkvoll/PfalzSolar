
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
DROP TABLE IF EXISTS `rinck_gallery_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rinck_gallery_settings` (
  `setting_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `setting_key` varchar(100) NOT NULL,
  `setting_value` text NOT NULL,
  PRIMARY KEY (`setting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rinck_gallery_settings` WRITE;
/*!40000 ALTER TABLE `rinck_gallery_settings` DISABLE KEYS */;
INSERT INTO `rinck_gallery_settings` VALUES (1,'thumbnails_custom_enable','1'),(2,'thumbnails_width','160'),(3,'thumbnails_height','120'),(4,'thumbnails_opacity','1'),(5,'thumbnails_border_size','2'),(6,'thumbnails_border_radius','2'),(7,'thumbnails_border_color','#000000'),(8,'margin_btw_thumbnails','5'),(9,'thumbnail_text_color','#ffffff'),(10,'thumbnail_text_align','center'),(11,'thumbnail_font_family','Verdana'),(12,'heading_font_size','16'),(13,'text_font_size','12'),(14,'thumbnail_desc_length','60'),(15,'cover_custom_enable','1'),(16,'cover_thumbnail_width','160'),(17,'cover_thumbnail_height','120'),(18,'cover_thumbnail_opacity','1'),(19,'cover_thumbnail_border_size','2'),(20,'cover_thumbnail_border_radius','2'),(21,'cover_thumbnail_border_color','#000000'),(22,'margin_btw_cover_thumbnails','5'),(23,'album_text_align','left'),(24,'album_font_family','Verdana'),(25,'album_heading_font_size','16'),(26,'album_text_font_size','12'),(27,'album_desc_length','400'),(28,'lightbox_type','pretty_photo'),(29,'lightbox_overlay_opacity','0.6'),(30,'lightbox_overlay_border_size','5'),(31,'lightbox_overlay_border_radius','5'),(32,'lightbox_text_color','#ffffff'),(33,'lightbox_overlay_border_color','#ffffff'),(34,'lightbox_inline_bg_color','#ffffff'),(35,'lightbox_overlay_bg_color','#000000'),(36,'lightbox_fade_in_time','500'),(37,'lightbox_fade_out_time','500'),(38,'lightbox_text_align','left'),(39,'lightbox_font_family','Verdana'),(40,'lightbox_heading_font_size','16'),(41,'lightbox_text_font_size','12'),(42,'facebook_comments','0'),(43,'social_sharing','0'),(44,'image_title_setting','1'),(45,'image_desc_setting','1'),(46,'autoplay_setting','0'),(47,'slide_interval','5'),(48,'pagination_setting','0'),(49,'images_per_page','10'),(50,'filters_setting','0'),(51,'filter_font_family','Verdana'),(52,'filter_font_size','12'),(53,'back_button_text','Back to Albums'),(54,'album_click_text','Click to View Album'),(55,'album_text_color','#C0C0C0'),(56,'button_color','#000000'),(57,'button_text_color','#CCCCCC'),(58,'filters_color','#2a83ed'),(59,'filters_text_color','#ffffff'),(60,'album_seperator','1'),(61,'back_button_font_family','Verdana'),(62,'back_button_font_size','12'),(63,'admin_full_control','1'),(64,'admin_read_control','1'),(65,'admin_write_control','1'),(66,'editor_full_control','0'),(67,'editor_read_control','1'),(68,'editor_write_control','0'),(69,'author_full_control','0'),(70,'author_read_control','1'),(71,'author_write_control','0'),(72,'contributor_full_control','0'),(73,'contributor_read_control','1'),(74,'contributor_write_control','0'),(75,'subscriber_full_control','0'),(76,'subscriber_read_control','1'),(77,'subscriber_write_control','0'),(78,'language_direction','inherit'),(79,'image_uploader','1'),(80,'change_image_name','1'),(81,'responsive_albums','1'),(82,'url_to_redirect','1');
/*!40000 ALTER TABLE `rinck_gallery_settings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

