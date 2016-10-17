
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
DROP TABLE IF EXISTS `rinck_usermeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rinck_usermeta` (
  `umeta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`umeta_id`),
  KEY `user_id` (`user_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `rinck_usermeta` WRITE;
/*!40000 ALTER TABLE `rinck_usermeta` DISABLE KEYS */;
INSERT INTO `rinck_usermeta` VALUES (1,1,'nickname','admin'),(2,1,'first_name','Axel'),(3,1,'last_name','Lodyga'),(4,1,'description',''),(5,1,'rich_editing','true'),(6,1,'comment_shortcuts','false'),(7,1,'admin_color','fresh'),(8,1,'use_ssl','0'),(9,1,'show_admin_bar_front','true'),(10,1,'rinck_capabilities','a:28:{s:13:\"administrator\";b:1;s:26:\"wpcf_custom_post_type_view\";b:1;s:26:\"wpcf_custom_post_type_edit\";b:1;s:33:\"wpcf_custom_post_type_edit_others\";b:1;s:25:\"wpcf_custom_taxonomy_view\";b:1;s:25:\"wpcf_custom_taxonomy_edit\";b:1;s:32:\"wpcf_custom_taxonomy_edit_others\";b:1;s:22:\"wpcf_custom_field_view\";b:1;s:22:\"wpcf_custom_field_edit\";b:1;s:29:\"wpcf_custom_field_edit_others\";b:1;s:25:\"wpcf_user_meta_field_view\";b:1;s:25:\"wpcf_user_meta_field_edit\";b:1;s:32:\"wpcf_user_meta_field_edit_others\";b:1;s:34:\"wpml_manage_translation_management\";b:1;s:21:\"wpml_manage_languages\";b:1;s:41:\"wpml_manage_theme_and_plugin_localization\";b:1;s:19:\"wpml_manage_support\";b:1;s:36:\"wpml_manage_woocommerce_multilingual\";b:1;s:37:\"wpml_operate_woocommerce_multilingual\";b:1;s:29:\"wpml_manage_media_translation\";b:1;s:22:\"wpml_manage_navigation\";b:1;s:24:\"wpml_manage_sticky_links\";b:1;s:30:\"wpml_manage_string_translation\";b:1;s:33:\"wpml_manage_translation_analytics\";b:1;s:25:\"wpml_manage_wp_menus_sync\";b:1;s:32:\"wpml_manage_taxonomy_translation\";b:1;s:27:\"wpml_manage_troubleshooting\";b:1;s:31:\"wpml_manage_translation_options\";b:1;}'),(11,1,'rinck_user_level','10'),(12,1,'dismissed_wp_pointers','gallery_bank_pointer'),(13,1,'show_welcome_panel','0'),(14,1,'session_tokens','a:1:{s:64:\"d22c2c26714b19520d6bdc7f1720323bfd99ede0999d453f52bb9e9897818fd3\";a:4:{s:10:\"expiration\";i:1476485176;s:2:\"ip\";s:13:\"79.208.46.209\";s:2:\"ua\";s:115:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36\";s:5:\"login\";i:1476312376;}}'),(15,1,'rinck_dashboard_quick_press_last_post_id','3'),(16,2,'nickname','werkvoll'),(17,2,'first_name','Philip'),(18,2,'last_name','Klich'),(19,2,'description',''),(20,2,'rich_editing','true'),(21,2,'comment_shortcuts','false'),(22,2,'admin_color','fresh'),(23,2,'use_ssl','0'),(24,2,'show_admin_bar_front','true'),(25,2,'rinck_capabilities','a:1:{s:13:\"administrator\";b:1;}'),(26,2,'rinck_user_level','10'),(27,2,'dismissed_wp_pointers',''),(28,1,'closedpostboxes_dashboard','a:4:{i:0;s:18:\"dashboard_activity\";i:1;s:21:\"dashboard_quick_press\";i:2;s:17:\"dashboard_primary\";i:3;s:19:\"dashboard_right_now\";}'),(29,1,'metaboxhidden_dashboard','a:0:{}'),(30,1,'meta-box-order_dashboard','a:4:{s:6:\"normal\";s:20:\"pb_backupbuddy_stats\";s:4:\"side\";s:0:\"\";s:7:\"column3\";s:0:\"\";s:7:\"column4\";s:78:\"dashboard_quick_press,dashboard_primary,dashboard_activity,dashboard_right_now\";}'),(31,1,'itsec_user_activity_last_seen','1476088688'),(32,1,'rocket_boxes','a:0:{}'),(33,1,'itsec-two-factor-hide-recommended-notice','1');
/*!40000 ALTER TABLE `rinck_usermeta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

