
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
DROP TABLE IF EXISTS `paket_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paket_posts` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) unsigned NOT NULL DEFAULT '0',
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `post_password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `post_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `to_ping` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pinged` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_parent` bigint(20) unsigned NOT NULL DEFAULT '0',
  `guid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `post_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `post_name` (`post_name`(191)),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `paket_posts` WRITE;
/*!40000 ALTER TABLE `paket_posts` DISABLE KEYS */;
INSERT INTO `paket_posts` VALUES (1,1,'2016-10-10 10:23:38','2016-10-10 08:23:38','Willkommen zur deutschen Version von WordPress. Dies ist der erste Beitrag. Du kannst ihn bearbeiten oder löschen. Und dann starte mit dem Schreiben!','Hallo Welt!','','publish','open','open','','hallo-welt','','','2016-10-10 10:23:38','2016-10-10 08:23:38','',0,'http://paket.werkvoll.design/?p=1',0,'post','',1),(2,1,'2016-10-10 10:23:38','2016-10-10 08:23:38','Dies ist eine Beispiel-Seite. Sie unterscheidet sich von Beiträgen, da sie stets an der selben Stelle bleibt und (bei den meisten Themes) in der Navigation angezeigt wird. Die meisten Leute starten mit einem Impressum oder einer &#8222;Über uns&#8220;-Seite mit einer Vorstellung für mögliche Besucher der Website.  Dort könnte zum Beispiel stehen:\n\n<blockquote>Hallo! Tagsüber arbeite ich als Fahrradkurier, nachts bin ich ein aufstrebender Schauspieler und dies hier ist meine Website. Ich lebe in Berlin, habe einen großen Hund namens Jack, mag die Fantastischen Vier und ein kühles Bier.</blockquote>\n\n...oder sowas wie:\n\n<blockquote>Unsere Firma XYZ wurde 1971 gegründet und hat seither eine Menge hochqualitativen ABC für die Öffentlichkeit produziert. Ansässig in Gotham City, hat XYZ mittlerweile über 2,000 Mitarbeiter und entwickelt immer wieder großartige Dinge für die ganze Gotham Gemeinschaft.</blockquote>\n\nAls neuer WordPress-Nutzer solltest du das <a href=\"http://paket.werkvoll.design/wp-admin/\">Dashboard</a> aufrufen, um diese Seite zu löschen und statt dessen eine neue Seite mit deinen eigenen Inhalten erstellen. Viel Spaß!','Beispiel-Seite','','publish','closed','open','','beispiel-seite','','','2016-10-10 10:23:38','2016-10-10 08:23:38','',0,'http://paket.werkvoll.design/?page_id=2',0,'page','',0),(3,1,'2016-10-10 10:23:51','0000-00-00 00:00:00','','Automatisch gespeicherter Entwurf','','auto-draft','open','open','','','','','2016-10-10 10:23:51','0000-00-00 00:00:00','',0,'http://paket.werkvoll.design/?p=3',0,'post','',0),(4,1,'2016-10-10 10:46:09','2016-10-10 08:46:09','<label> Ihr Name (Pflichtfeld)\n    [text* your-name] </label>\n\n<label> Ihre E-Mail-Adresse (Pflichtfeld)\n    [email* your-email] </label>\n\n<label> Betreff\n    [text your-subject] </label>\n\n<label> Ihre Nachricht\n    [textarea your-message] </label>\n\n[submit \"Senden\"]\nPacket \"[your-subject]\"\n[your-name] <wordpress@paket.werkvoll.design>\nVon: [your-name] <[your-email]>\nBetreff: [your-subject]\n\nNachrichtentext:\n[your-message]\n\n--\nDiese E-Mail wurde von einem Kontaktformular von Packet (http://paket.werkvoll.design) gesendet\naxel@dawolke.de\nReply-To: [your-email]\n\n0\n0\n\nPacket \"[your-subject]\"\nPacket <wordpress@paket.werkvoll.design>\nNachrichtentext:\n[your-message]\n\n--\nDiese E-Mail wurde von einem Kontaktformular von Packet (http://paket.werkvoll.design) gesendet\n[your-email]\nReply-To: axel@dawolke.de\n\n0\n0\nVielen Dank für deine Mitteilung. Sie wurde versandt.\nBeim Versuch, deine Mitteilung zu versenden, ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.\nEin oder mehrere Felder sind fehlerhaft. Bitte überprüfe sie und versuche es noch einmal.\nBeim Versuch, deine Mitteilung zu versenden, ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.\nDu musst die Bedingungen akzeptieren bevor du deine Mitteilung absendest.\nDas Feld ist erforderlich.\nDas Feld ist zu lang.\nDas Feld ist zu kurz.','Kontaktformular 1','','publish','closed','closed','','kontaktformular-1','','','2016-10-10 10:46:09','2016-10-10 08:46:09','',0,'http://paket.werkvoll.design/?post_type=wpcf7_contact_form&p=4',0,'wpcf7_contact_form','',0);
/*!40000 ALTER TABLE `paket_posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

