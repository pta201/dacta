CREATE DATABASE  IF NOT EXISTS `dacta` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dacta`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: dacta
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attribute`
--

DROP TABLE IF EXISTS `attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attribute` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attribute`
--

LOCK TABLES `attribute` WRITE;
/*!40000 ALTER TABLE `attribute` DISABLE KEYS */;
INSERT INTO `attribute` VALUES (1,'Bedroom'),(2,'Bathroom'),(3,'Garage'),(4,'Pool');
/*!40000 ALTER TABLE `attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `number` int DEFAULT NULL,
  `propertyId` int DEFAULT NULL,
  `path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e87199b269a72d071b3f4ff3b02` (`propertyId`),
  CONSTRAINT `FK_e87199b269a72d071b3f4ff3b02` FOREIGN KEY (`propertyId`) REFERENCES `property` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,'5.jpg',NULL,1,'public\\upload\\image\\5.jpg'),(2,'a2.jpg',NULL,1,'public\\upload\\image\\a2.jpg'),(3,'avatar.jpg',NULL,1,'public\\upload\\image\\avatar.jpg'),(4,'key-drop.jpg',NULL,1,'public\\upload\\image\\key-drop.jpg'),(5,'realtor_erd (1).jpg',NULL,1,'public\\upload\\image\\realtor_erd (1).jpg'),(6,'realtor_erd.jpg',NULL,1,'public\\upload\\image\\realtor_erd.jpg'),(7,'5.jpg',NULL,1,'public\\upload\\image\\5.jpg'),(8,'a2.jpg',NULL,1,'public\\upload\\image\\a2.jpg'),(9,'avatar.jpg',NULL,1,'public\\upload\\image\\avatar.jpg'),(10,'key-drop.jpg',NULL,1,'public\\upload\\image\\key-drop.jpg'),(11,'realtor_erd (1).jpg',NULL,1,'public\\upload\\image\\realtor_erd (1).jpg'),(12,'realtor_erd.jpg',NULL,1,'public\\upload\\image\\realtor_erd.jpg'),(13,'5.jpg',NULL,1,'public\\upload\\image\\5.jpg'),(14,'5.jpg',NULL,34,'public\\upload\\image\\5.jpg'),(15,'5.jpg',NULL,35,'public\\upload\\image\\5.jpg'),(16,'5.jpg',NULL,36,'public\\upload\\image\\5.jpg'),(17,'5.jpg',NULL,37,'public\\upload\\image\\5.jpg'),(18,'a2.jpg',NULL,38,'public\\upload\\image\\a2.jpg'),(19,'avatar.jpg',NULL,38,'public\\upload\\image\\avatar.jpg'),(20,'a2.jpg',NULL,39,'public\\upload\\image\\a2.jpg'),(21,'key-drop.jpg',NULL,39,'public\\upload\\image\\key-drop.jpg'),(22,'realtor_erd (1).jpg',NULL,39,'public\\upload\\image\\realtor_erd (1).jpg'),(23,'realtor_erd.jpg',NULL,39,'public\\upload\\image\\realtor_erd.jpg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `propertyTypeId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7821015a476c9bfa0653b043cec` (`propertyTypeId`),
  KEY `FK_d90007b39cfcf412e15823bebc1` (`userId`),
  CONSTRAINT `FK_7821015a476c9bfa0653b043cec` FOREIGN KEY (`propertyTypeId`) REFERENCES `property_type` (`id`),
  CONSTRAINT `FK_d90007b39cfcf412e15823bebc1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (1,'Tài sản 1','HCM',1,NULL),(2,'Tài sản 1','HCM',1,NULL),(3,'Tài sản 1','HCM',1,NULL),(4,'Tài sản 1','HCM',1,NULL),(5,'Tài sản 1','HCM',1,NULL),(6,'Tài sản 1','HCM',1,NULL),(7,'Tài sản 7','HCM',1,NULL),(8,'','',2,NULL),(9,'','',2,NULL),(10,'','',2,NULL),(11,'','',2,NULL),(12,'','',2,NULL),(13,'','',2,NULL),(14,'','',2,NULL),(15,'','',2,NULL),(16,'','',2,NULL),(17,'','',2,NULL),(18,'','',2,NULL),(19,'','',2,NULL),(20,'','',2,NULL),(21,'','',2,NULL),(22,'','',2,NULL),(23,'','',2,NULL),(24,'','',2,NULL),(25,'','',2,NULL),(26,'','',2,NULL),(27,'','',2,NULL),(28,'','',2,NULL),(29,'','',2,NULL),(30,'','',2,NULL),(31,'','',2,NULL),(32,'','',2,NULL),(33,'','',2,NULL),(34,'','',2,NULL),(35,'','',2,NULL),(36,'','',2,NULL),(37,'','',2,NULL),(38,'','',2,NULL),(39,'','',2,NULL);
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property_attribute`
--

DROP TABLE IF EXISTS `property_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property_attribute` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) NOT NULL,
  `propertyId` int DEFAULT NULL,
  `attributeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d87a7742d517f3b79ba36b268c4` (`propertyId`),
  KEY `FK_b20c9047a9d4d1955ac990294ed` (`attributeId`),
  CONSTRAINT `FK_b20c9047a9d4d1955ac990294ed` FOREIGN KEY (`attributeId`) REFERENCES `attribute` (`id`),
  CONSTRAINT `FK_d87a7742d517f3b79ba36b268c4` FOREIGN KEY (`propertyId`) REFERENCES `property` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property_attribute`
--

LOCK TABLES `property_attribute` WRITE;
/*!40000 ALTER TABLE `property_attribute` DISABLE KEYS */;
INSERT INTO `property_attribute` VALUES (1,'1',6,NULL),(2,'2',6,NULL),(3,'1',7,3),(4,'2',7,1);
/*!40000 ALTER TABLE `property_attribute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property_type`
--

DROP TABLE IF EXISTS `property_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_7eaccd6dd29d1f98656747edaa` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property_type`
--

LOCK TABLES `property_type` WRITE;
/*!40000 ALTER TABLE `property_type` DISABLE KEYS */;
INSERT INTO `property_type` VALUES (2,'Appartment'),(1,'Condo'),(3,'Family house');
/*!40000 ALTER TABLE `property_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  UNIQUE KEY `REL_c28e52f758e7bbc53828db9219` (`roleId`),
  CONSTRAINT `FK_c28e52f758e7bbc53828db92194` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 14:59:50
