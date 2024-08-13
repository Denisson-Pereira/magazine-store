CREATE DATABASE  IF NOT EXISTS `magazine_store` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `magazine_store`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: magazine_store
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `avaliacao` varchar(20) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `quantidade` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Apple','4,8','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/marcas_celulares%2Fapple.png?alt=media&token=f80627d9-3bf0-4604-8bff-ca23e0afd349','1'),(2,'Sansung','4,5','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/marcas_celulares%2Fsansung.png?alt=media&token=0eb15a93-21b8-4762-a8ef-d42f881f59c7','1'),(3,'Motorola','4,0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/marcas_celulares%2Fmotorola.png?alt=media&token=478e3e18-b6c5-4d40-880f-c1a76060e937','1'),(4,'Asus','5,0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/marcas_celulares%2Fasus.webp?alt=media&token=dc6cc7e3-110d-4b80-b7fb-3484cee700a1','1'),(5,'Positivo','3,0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/marcas_celulares%2Fpositivo.png?alt=media&token=78cbf224-3d71-4494-8011-884eb59f0797','1'),(6,'Xiaomi','4,9','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/marcas_celulares%2Fxiaomi.png?alt=media&token=f6e5aaea-dc3e-4cce-abf0-cc3aac32fc03','1');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `valor` varchar(100) DEFAULT NULL,
  `quantidade` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `sistema` varchar(100) DEFAULT NULL,
  `armazenamento` varchar(100) DEFAULT NULL,
  `tela` varchar(100) DEFAULT NULL,
  `modelo` varchar(100) DEFAULT NULL,
  `sobre` varchar(255) DEFAULT NULL,
  `avaliacao` varchar(10) DEFAULT NULL,
  `imagem1` varchar(255) DEFAULT NULL,
  `imagem2` varchar(255) DEFAULT NULL,
  `imagem3` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `loja1` varchar(255) DEFAULT NULL,
  `loja2` varchar(255) DEFAULT NULL,
  `loja3` varchar(255) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Apple iPhone 15 (256 GB) — Preto','8.099','100','Apple','IOS 16','256 GB','6,1 Polegadas','Iphone 15','Super Retina XDR display, 6.1‑inch (diagonal) all‑screen OLED display, 2556x1179-pixel resolution at 460 ppi.','4,8','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FApple%20iPhone%2015%20(256%20GB)%20%E2%80%94%20Preto%2Fiphone1.jpg?alt=media&token=a1c9b9f8-4946-4966-ad44-742bd683c0ab','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FApple%20iPhone%2015%20(256%20GB)%20%E2%80%94%20Preto%2Fiphone2.jpg?alt=media&token=d84ca01c-e4c8-4971-b2c2-341779934332','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FApple%20iPhone%2015%20(256%20GB)%20%E2%80%94%20Preto%2Fiphone3.jpg?alt=media&token=8acdf302-aece-457a-b5c7-dfb8a55e6846','12 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FApple%20iPhone%2015%20(256%20GB)%20%E2%80%94%20Preto%2Floja1.png?alt=media&token=9040a1f5-111e-4370-b30d-351446eae989','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FApple%20iPhone%2015%20(256%20GB)%20%E2%80%94%20Preto%2Floja2.jpg?alt=media&token=d3f88c81-5258-400d-b52e-7c41dfaa8aad','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FApple%20iPhone%2015%20(256%20GB)%20%E2%80%94%20Preto%2Floja3.jpg?alt=media&token=0a89d508-473a-4d2c-86bd-0b81859b0c25','celular'),(2,'Samsung Galaxy S23 FE 5G 128 GB','2.799','50','Samsung','Android 13.0','128 GB','6,4 Polegadas','Galaxy S23 FE 5G','5G 128 GB Câmera Tripla Traseira de 50MP +12MP + 10MP, Selfie de 10MP, Tela infinita 6.4\" 60-120Hz, 128GB, 8GB, Processador Exynos 2200, Dual Chip, e-SIM - Grafite','4,5','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FSamsung%20Galaxy%20S23%2Fimg1.jpg?alt=media&token=d1374c7b-d5ac-4217-a5b4-9dedf94fff7d','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FSamsung%20Galaxy%20S23%2Fimg2.jpg?alt=media&token=a6969424-2396-4c00-8597-1ad4f6dc4eca','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FSamsung%20Galaxy%20S23%2Fimg3.jpg?alt=media&token=5c3603cb-ba22-40d8-a56b-434463b70062','8 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FSamsung%20Galaxy%20S23%2Floja.jpeg?alt=media&token=618b62d1-c402-4943-b1c6-2df7ffcbed3e','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FSamsung%20Galaxy%20S23%2Floja2.jpg?alt=media&token=b9315b73-dd72-44ae-bdfb-67ae172c538e','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FSamsung%20Galaxy%20S23%2Floja3.jpg?alt=media&token=454afef8-8871-454f-b5d4-b56198fa6001','celular'),(3,'Xiaomi POCO X6 Pro 5G','2.250','29','Xiaomi','Android 13.0','512 GB','‎6,67 Polegadas','POCO X6','Smartphone Xiaomi POCO X6 Pro 5G 12GB+512GB NFC Dimensity 8300-Ultra 64MP câmera tripla 67W 120Hz AMOLED (Preto)','4,0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FXiaomi%20POCO%20X6%2Fimg1.jpg?alt=media&token=1addba33-a2e6-4272-9785-2f5a957618d3','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FXiaomi%20POCO%20X6%2Fimg2.jpg?alt=media&token=5ae0bc81-e255-4365-9681-8e94a4fda838','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FXiaomi%20POCO%20X6%2Fimg3.jpg?alt=media&token=a3863452-e804-48d5-b62b-f8ff64ef549d','12 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FXiaomi%20POCO%20X6%2Floja1.jpg?alt=media&token=5ce825fa-11fe-4e1c-ab9d-fd589d3dc36d','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FXiaomi%20POCO%20X6%2Floja2.jpg?alt=media&token=a00ccb27-136b-4eab-bbc3-4cc23d8b0f66','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FXiaomi%20POCO%20X6%2Floja3.jpg?alt=media&token=4d571dfc-c81f-491b-b596-1de147c68858','celular'),(4,'Motorola Moto G34','1.079','200','Motorola','Android 14','256 GB','6,5 Polegadas','Moto G34 5G ','Smartphone Motorola Moto G34 5G 16GB RAM Boost* 256GB Verde - Vegan Leather','4,7','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FMotorola%20Moto%2Fimg1.jpg?alt=media&token=3d5e7057-a23c-408e-be62-b04857134837','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FMotorola%20Moto%2Fimg2.jpg?alt=media&token=5a80fce9-5bf4-4a1e-ad8b-adea73329b8c','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FMotorola%20Moto%2Fimg3.jpg?alt=media&token=5c287062-b609-4a80-98d9-92fc6a2273ed','16 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FMotorola%20Moto%2Floja1.jpeg?alt=media&token=92692a2a-c781-4803-ba46-43ab92f6d0b2','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FMotorola%20Moto%2Floja2.jpeg?alt=media&token=a8d8dd0b-d73f-4f0e-8c82-1f571973c98d','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FMotorola%20Moto%2Floja3.jpeg?alt=media&token=2ecbfa87-a568-4acf-be39-390221b1c775','celular'),(5,'Positivo P51','219','50','Positivo','proprietario','128 GB','2,4 Polegadas','Positivo P51','Celular Positivo P51 Função Modem 4G Câmera Traseira Rádio FM Botão SOS Dual SIM - Preto','4,4','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FPositivo%20P51%2Fimg1.jpg?alt=media&token=3f2a8d6a-4eed-47cb-b1a1-2bcb40dd665f','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FPositivo%20P51%2Fimg2.jpg?alt=media&token=76827d13-6e7d-4c0d-85f5-7eba68cacb0a','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FPositivo%20P51%2Fimg3.jpg?alt=media&token=93e6b371-ea13-4d41-a391-894c147692b6','48 MB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FPositivo%20P51%2Floja1.jpeg?alt=media&token=8d0bffd7-96bf-4d22-b4d2-9660486e4584','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FPositivo%20P51%2Floja2.jpeg?alt=media&token=9bfd8a49-debf-4e25-9c06-57d5110311d7','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FPositivo%20P51%2Floja3.jpeg?alt=media&token=61cbecb6-bd43-4897-8fa6-7071991bf4d7','celular'),(6,'ROG Phone 6','3.806','42','ASUS','Android 12','256 GB','6,78 Polegadas','Gamer ROG Phone 6','Smartphone Gamer ROG Phone 6, Snapdragon 8+ Gen 1, 12 GB, 256 GB, Android 12, Dual SIM - AI2201-1A049BR','5,0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FROG%20Phone%206%2Fimg1.jpg?alt=media&token=eedf8281-4603-4a31-a52f-d5ace409c00b','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FROG%20Phone%206%2Fimg2.jpg?alt=media&token=72efd592-913e-4e59-9f96-30d9c4d54c93','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FROG%20Phone%206%2Fimg3.jpg?alt=media&token=f396b2e5-74e7-4af4-8413-8834b47e0dc5','12 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FROG%20Phone%206%2Floja1.jpg?alt=media&token=4b3ae50e-6e7a-44c8-b31b-2a7940cc5dc5','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FROG%20Phone%206%2Floja2.jpg?alt=media&token=391209ce-db6d-4633-b624-483d17fdad98','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/celulares%2FROG%20Phone%206%2Floja3.jpg?alt=media&token=af43028b-6631-4063-86b5-d226b353130d','celular'),(7,'Notebook Gamer Dell','8.939','70','Dell','Windows 11','1TB','15.6 Polegadas','Notebook Gamer Dell','Notebook Gamer Dell G15-i1300-M75P 15.6\" FHD 13ª Geração Intel Core i7 16GB 1TB SSD NVIDIA RTX 4050 Windows 11','4.6','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FDell%2Fimg1.jpg?alt=media&token=a3e50975-d4dc-4340-ae98-5bb3f7cc03d4','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FDell%2Fimg2.jpg?alt=media&token=d586d2ab-7cfd-48d2-838d-d22988eb1647','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FDell%2Fimg3.jpg?alt=media&token=64aead82-c0de-45b0-83e1-4d13ce1008e0','16 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FDell%2Floja1.jpeg?alt=media&token=41d27369-e403-405e-ae8c-720b32cde0c4','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FDell%2Floja2.jpg?alt=media&token=35c14946-da52-4fb5-96d8-8f4ca4a4ce4f','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FDell%2Floja3.jpg?alt=media&token=2ed71e98-7185-49b7-ada8-a186078f1821','notebook'),(8,'Notebook Gamer Lenovo','3.779','25','Lenovo','Windows 11','512 GB','15.6 Polegadas','Notebook Gamer Lenovo LOQ','Notebook Gamer Lenovo LOQ Intel Core i5-12450H 8GB 512GB SSD RTX 2050 15.6\" FHD W11 83EU0000BR','2.7','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FLenovo%20LOQ%2Fimg1.jpg?alt=media&token=09807e88-5da0-4b16-9552-c360d0ec0599','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FLenovo%20LOQ%2Fimg2.jpg?alt=media&token=2630d4fd-1abc-49a1-90d2-c4b26aadcb5f','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FLenovo%20LOQ%2Fimg3.jpg?alt=media&token=46e8ddcc-6a91-47ec-bd09-561856d157a0','8 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FLenovo%20LOQ%2Floja1.jpg?alt=media&token=8d90f1d8-23a9-41d5-b589-9c1ce1764a9a','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FLenovo%20LOQ%2Floja2.jpg?alt=media&token=4f9030be-a2bc-49db-a4bb-b07b336d1c18','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FLenovo%20LOQ%2Floja3.jpg?alt=media&token=7dae813f-48b7-456f-ba0a-c3c189ba0b51','notebook'),(9,'Notebook Gamer Acer NItro V15','4.349','5','Acer','Windows 11','512 GB','15.6 Polegadas','Acer Nitro V15','Notebook Gamer Acer Nitro V15 15.6 FHD 144Hz I5-13420H SSD 512GB 8GB DDR5 RTX 2050 4GB ANV15-51-50KD','5.0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2Facer%2Fimg1.jpg?alt=media&token=553b76d6-02d3-4979-b33e-7edf3d3f2c1e','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2Facer%2Fimg2.jpg?alt=media&token=11551ed7-fe60-4642-a996-049ec02b9282','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2Facer%2Fimg3.jpg?alt=media&token=77f08ffe-b507-47e5-ac59-7d97ab329827','8 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2Facer%2Floja1.jpg?alt=media&token=b5944913-011c-4df5-81b6-40e7baeb5697','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2Facer%2Floja2.jpg?alt=media&token=2705a5e2-76fe-4733-b8c2-ddd92aed154e','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2Facer%2Floja3.jpg?alt=media&token=de2825a4-514b-4e52-89e2-603e173b4e85','notebook'),(10,'Apple Macbook Air','5.888','50','Apple','MacOS','256 GB','13 Polegadas','MacBook AIr','Apple notebook MacBook Air (de 13 polegadas, Processador M1 da Apple com CPU 8‑core e GPU 7‑core, 8 GB RAM, 256 GB) - Cinza espacial','4.8','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FMacBook%2Fimg1.jpg?alt=media&token=1a992d8e-7b42-4e4a-adeb-03a72b4b168f','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FMacBook%2Fimg2.jpg?alt=media&token=d327098b-0c65-4cf7-8bf9-cfb22a41a106','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FMacBook%2Fimg3.jpg?alt=media&token=9c614e59-71e4-4cc2-a95b-48081a61fba6','8 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FMacBook%2Floja1.jpg?alt=media&token=585a413d-0b49-4db0-95d1-d8f9b1c8d533','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FMacBook%2Floja2.jpg?alt=media&token=73de4318-119a-40e9-949b-65cc999faaac','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/notebooks%2FMacBook%2Floja3.jpg?alt=media&token=f6e06072-0f85-4543-874f-3bf06e0e6c0f','notebook'),(11,'Apple iPad Pro','6.999','10','Apple','IOS 14','128 GB','12.9 Polegadas','Apple IPad Pro','Apple iPad Pro Wi-Fi de 12,9 polegadas (Wi-Fi, 128 GB) - Prateado','5.0','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fapple%2Fimg1.jpg?alt=media&token=bdffce32-8ac0-4de8-a437-47359400b158','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fapple%2Fimg2.jpg?alt=media&token=388a8772-d1c1-45fb-afbb-67040442e9bc','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fapple%2Fimg3.jpg?alt=media&token=a166f0d5-43dc-4d6d-8209-0e41e83ad1b2','4 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fapple%2Floja1.jpg?alt=media&token=410c5fe7-3adc-4004-b3bb-863fc5b9e2f6','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fapple%2Floja2.jpg?alt=media&token=44427f05-a1b2-48bc-a716-d9e08c64a188','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fapple%2Floja3.jpg?alt=media&token=bb92e234-6bd2-4000-ac4a-f05c65f8af9d','tablet'),(12,'Galaxy Tab A9+ 5G','1.115','50','Sansung','Android 14','64 GB','11 Polegadas','Galaxy Tab A9+','Galaxy Tab A9+ 5G, Grafite, Tela 11\", 64 GB, 4GB RAM, Câmera Frontal 5 MP Câmera Principal 8 MP','4.5','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Ftab%2Fimg1.jpg?alt=media&token=75d1af3a-d34a-4f60-b625-3283fcbab6d4','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Ftab%2Fimg2.jpg?alt=media&token=1345965f-1771-4b5e-b0ea-620480ec2232','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Ftab%2Fimg3.jpg?alt=media&token=757ce046-29f7-49de-b6f2-6bf740ab62d7','4 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Ftab%2Floja1.jpg?alt=media&token=4e2e9729-2579-4cd2-86b7-e02331ea99be','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Ftab%2Floja2.jpg?alt=media&token=522c2def-65e6-4073-95b1-01e25a2c5f4f','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Ftab%2Floja3.jpg?alt=media&token=4697f5d7-a684-45d9-9c5a-3a2073315532','tablet'),(13,'Tablet Positivo Vision TAB','1250','20','Positivo','Android 12','128 GB','10.1 Polegadas','Positivo VIsion TAB 10','Tablet Positivo Vision TAB 10 4GB RAM 128GB Armazenamento, Octa-Core, 13MP + Selfie 5MP, Bateria 6000mAh, Tela 10.1“ HD, Wifi AC e 4G, Full Lamination','1.2','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fpositivo%2Fimg1.jpg?alt=media&token=37ac89e5-fdc2-417f-9466-1b4fee995de1','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fpositivo%2Fimg2.jpg?alt=media&token=334588cd-5de4-4e51-8fc0-98353c148232','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fpositivo%2Fimg3.jpg?alt=media&token=654bcb6b-46db-4d66-9ea1-bd5b9e29317e','4 GB','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fpositivo%2Floja1.jpg?alt=media&token=74376281-48d1-4cd9-a2ab-778b052fccea','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fpositivo%2Floja2.jpg?alt=media&token=78f98d64-831f-4e1e-be3a-e9f9faaa5938','https://firebasestorage.googleapis.com/v0/b/magazine-97057.appspot.com/o/tablets%2Fpositivo%2Floja3.jpg?alt=media&token=20197238-114a-4b17-96cc-8cd2d0333ae7','tablet');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `login` (`login`),
  CONSTRAINT `users_chk_1` CHECK ((`tipo` in (_utf8mb4'user',_utf8mb4'admin')))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'denisson','pereira','denis@gmail.com','denis','$2a$10$mGErN.H61SKsQaD6TgP4cOcIhb3IpNrGW4KfikSmgclQMk3iu/lkm','foto','7999855494','rua joao ferreira','aracaju','Sergipe',NULL,'2024-08-07 20:45:31'),(2,'denisson','pereira','denisson@gmail.com','denisson','$2a$10$VvCRWsTv.B0iC0UfOy1sPuYQ/UbOkdTL4Bo2xREaIgIG7U/S8F2Ee','foto','7999855494','rua joao ferreira','aracaju','Sergipe','user','2024-08-07 20:46:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-07 17:56:11
