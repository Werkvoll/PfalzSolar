
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
DROP TABLE IF EXISTS `ps_dev_wap_nex_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_wap_nex_forms` (
  `Id` bigint(255) unsigned NOT NULL AUTO_INCREMENT,
  `plugin` varchar(255) DEFAULT NULL,
  `publish` int(1) unsigned DEFAULT '0',
  `added` varchar(18) DEFAULT '0000-00-00 00:00',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` text,
  `description` text,
  `mail_to` text,
  `confirmation_mail_body` longtext,
  `admin_email_body` longtext,
  `confirmation_mail_subject` text,
  `from_address` text,
  `from_name` text,
  `on_screen_confirmation_message` longtext,
  `confirmation_page` text,
  `form_fields` longtext,
  `clean_html` longtext,
  `visual_settings` text,
  `google_analytics_conversion_code` text,
  `colour_scheme` text,
  `send_user_mail` text,
  `user_email_field` text,
  `on_form_submission` text,
  `date_sent` datetime DEFAULT NULL,
  `is_form` text,
  `is_template` text,
  `hidden_fields` longtext,
  `custom_url` text,
  `post_type` text,
  `post_action` text,
  `bcc` text,
  `bcc_user_mail` text,
  `custom_css` longtext,
  `is_paypal` text,
  `total_views` text,
  `time_viewed` text,
  `email_on_payment_success` text,
  `conditional_logic` longtext,
  `server_side_logic` longtext,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_wap_nex_forms` WRITE;
/*!40000 ALTER TABLE `ps_dev_wap_nex_forms` DISABLE KEYS */;
INSERT INTO `ps_dev_wap_nex_forms` VALUES (2,'shared',0,'0000-00-00 00:00','2016-02-16 09:39:18',NULL,NULL,'info@dawolke.de','Thank you for connecting with us. We will respond to you shortly.','','PfalzSolar NEX-Forms submission','info@dawolke.de','PfalzSolar','Thank you for connecting with us.','',NULL,'<div class=\\\"form_field text form_fields  currently_editing\\\" style=\\\"\\\" data-wow-duration=\\\"0.8s\\\" id=\\\"_67861\\\"><div class=\\\"row\\\"><div class=\\\"col-sm-12\\\" id=\\\"field_container\\\"><div class=\\\"row\\\"><div class=\\\"col-sm-12 label_container align_left\\\"><label class=\\\"nf_title\\\"><span class=\\\"the_label style_bold\\\">Name</span></label></div><div class=\\\"col-sm-12 input_container\\\"><input type=\\\"text\\\" name=\\\"_name\\\" class=\\\"form-control error_message the_input_element\\\" data-maxlength-color=\\\"label label-success\\\" data-maxlength-position=\\\"bottom\\\" data-maxlength-show=\\\"false\\\" data-default-value=\\\"\\\" maxlength=\\\"200\\\" data-onfocus-color=\\\"#66AFE9\\\" data-drop-focus-swadow=\\\"1\\\" data-placement=\\\"bottom\\\" data-content=\\\"Please enter a value\\\" data-secondary-message=\\\"\\\" title=\\\"\\\"></div></div></div><div class=\\\"field_settings\\\" style=\\\"display: none;\\\"><div class=\\\"btn btn-default btn-xs edit\\\" title=\\\"Edit Field Attributes\\\"><i class=\\\"fa fa-edit\\\"></i></div><div class=\\\"btn btn-default btn-xs duplicate_field\\\" title=\\\"Duplicate Field\\\"><i class=\\\"fa fa-files-o\\\"></i></div><div class=\\\"btn btn-default btn-xs delete\\\" title=\\\"Delete field\\\"><i class=\\\"fa fa-close\\\"></i></div></div></div></div><div class=\\\"form_field email preset_fields required\\\" style=\\\"\\\" data-wow-duration=\\\"0.8s\\\" id=\\\"_49982\\\"><div class=\\\"row\\\"><div class=\\\"col-sm-12\\\" id=\\\"field_container\\\"><div class=\\\"row\\\"><div class=\\\"col-sm-12 label_container align_left\\\"><label class=\\\"nf_title\\\"><span class=\\\"is_required glyphicon glyphicon-star btn-xs \\\"></span><span class=\\\"the_label style_bold\\\">Email</span></label></div><div class=\\\"col-sm-12 input_container\\\"><div class=\\\"input-group\\\"><span class=\\\"input-group-addon prefix \\\"><span class=\\\"fa fa-envelope\\\"></span></span><input type=\\\"text\\\" name=\\\"email\\\" class=\\\"error_message required email form-control the_input_element \\\" data-onfocus-color=\\\"#66AFE9\\\" data-drop-focus-swadow=\\\"1\\\" data-placement=\\\"bottom\\\" data-content=\\\"Please enter a value\\\" title=\\\"\\\" data-secondary-message=\\\"Please use the correct format\\\"></div></div></div></div><div class=\\\"field_settings\\\" style=\\\"display: none;\\\"><div class=\\\"btn btn-default btn-xs edit\\\" title=\\\"Edit Field Attributes\\\"><i class=\\\"fa fa-edit\\\"></i></div><div class=\\\"btn btn-default btn-xs duplicate_field\\\" title=\\\"Duplicate Field\\\"><i class=\\\"fa fa-files-o\\\"></i></div><div class=\\\"btn btn-default btn-xs delete\\\" title=\\\"Delete field\\\"><i class=\\\"fa fa-close\\\"></i></div></div></div></div>',NULL,NULL,NULL,NULL,'',NULL,NULL,'preview','0','','',NULL,NULL,'','',NULL,'no',NULL,NULL,NULL,'',NULL);
/*!40000 ALTER TABLE `ps_dev_wap_nex_forms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

