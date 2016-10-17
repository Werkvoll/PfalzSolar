
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
DROP TABLE IF EXISTS `ps_dev_AnythingPopup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ps_dev_AnythingPopup` (
  `pop_id` int(11) NOT NULL AUTO_INCREMENT,
  `pop_width` int(11) NOT NULL DEFAULT '380',
  `pop_height` int(11) NOT NULL DEFAULT '260',
  `pop_headercolor` varchar(10) NOT NULL DEFAULT '#4D4D4D',
  `pop_bordercolor` varchar(10) NOT NULL DEFAULT '#4D4D4D',
  `pop_header_fontcolor` varchar(10) NOT NULL DEFAULT '#FFFFFF',
  `pop_title` varchar(1024) NOT NULL DEFAULT 'Anything Popup',
  `pop_content` text NOT NULL,
  `pop_caption` varchar(2024) NOT NULL DEFAULT 'Click to open popup',
  PRIMARY KEY (`pop_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `ps_dev_AnythingPopup` WRITE;
/*!40000 ALTER TABLE `ps_dev_AnythingPopup` DISABLE KEYS */;
INSERT INTO `ps_dev_AnythingPopup` VALUES (1,380,260,'#4D4D4D','#4D4D4D','#FFFFFF','Bereich In guten Händen','Damit eine Photovoltaikanlage dauerhaft sicher läuft und optimale Erträge erzielt, ist eine regelmäßige Wartung notwendig. Die Experten von PFALZSOLAR bieten einen umfangreichen Service für Anlagenbetreiber – vom einmaligen Anlagencheck bis hin zu individuellen Inspektions- und Wartungsangeboten. Welche Leistungen für Ihren Anlagentyp geeignet sind und mit welchen Serviceangeboten Sie die Performance Ihres Solarkraftwerks dauerhaft steigern können, erklären Ihnen unsere Solarprofis gerne in einem persönlichen Gespräch (Link zur Kontaktseite). ','Mehr Erfahren');
/*!40000 ALTER TABLE `ps_dev_AnythingPopup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

