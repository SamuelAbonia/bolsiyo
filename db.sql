use bolsiyo;
-- bolsiyo.store definition
CREATE TABLE `store` (
  `id` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- bolsiyo.category definition
CREATE TABLE `category` (
  `id` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `store_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `store_id` (`store_id`),
  CONSTRAINT `category_ibfk_1` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- bolsiyo.product definition
CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `purchase_price` double NOT NULL,
  `sale_price` double NOT NULL,
  `stock` int DEFAULT NULL,
  `category_id` varchar(255) NOT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- bolsiyo.product_logs definition
CREATE TABLE `product_logs` (
  `id` varchar(255) NOT NULL,
  `action` varchar(50) NOT NULL,
  `units` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_logs_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO store (id,name) VALUES
	 ('10e83e04-c6c1-4e30-86e1-3c392796018b','Tiendas pupi'),
	 ('27d9aadc-a051-4205-bb53-27f1638519fd','EL NEGOCIO SOCIO');

INSERT INTO category (id,name,store_id) VALUES
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c1','Juguetes','27d9aadc-a051-4205-bb53-27f1638519fd'),
	 ('985b443b-17f6-4c59-994c-f14a321ef34b','Juguetes','10e83e04-c6c1-4e30-86e1-3c392796018b');

INSERT INTO product (id,name,purchase_price,sale_price,stock,category_id,updated_at,created_at,deleted_at) VALUES
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c1','Barbie',1000.0,2000.0,54,'335e7206-6945-4fa3-b62a-00c7d5c517c1','2023-08-22 15:11:54','2023-08-21 23:09:13',NULL),
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c2','Max Steel',1000.0,2000.0,7,'335e7206-6945-4fa3-b62a-00c7d5c517c1','2023-08-21 23:43:57','2023-08-21 23:43:57',NULL),
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c3','Ken',1000.0,2000.0,7,'335e7206-6945-4fa3-b62a-00c7d5c517c1','2023-08-22 00:32:12','2023-08-21 23:44:17','2023-08-22 00:32:13'),
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c4','Spiderman',1000.0,2000.0,7,'985b443b-17f6-4c59-994c-f14a321ef34b','2023-08-21 23:47:54','2023-08-21 20:47:54',NULL),
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c7','Batman',1000.0,2000.0,7,'335e7206-6945-4fa3-b62a-00c7d5c517c1','2023-08-22 11:47:11','2023-08-22 11:47:11',NULL),
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c8','Superman Justice League',25500.0,2000.0,7,'335e7206-6945-4fa3-b62a-00c7d5c517c1','2023-08-22 15:02:28','2023-08-22 11:48:49',NULL),
	 ('335e7206-6945-4fa3-b62a-00c7d5c517c9','Wonder Woman',1000.0,2000.0,7,'335e7206-6945-4fa3-b62a-00c7d5c517c1','2023-08-22 14:33:18','2023-08-22 14:32:33','2023-08-22 14:33:19');

INSERT INTO product_logs (id,`action`,units,created_at,product_id) VALUES
	 ('2cd2059d-e80e-4067-9752-dc94debc8b0d','STOCK_INCREASE',20,'2023-08-22 13:19:55','335e7206-6945-4fa3-b62a-00c7d5c517c1'),
	 ('97003676-c11a-4ffc-995e-0ce5c6b3b477','STOCK_INCREASE',10,'2023-08-22 13:19:50','335e7206-6945-4fa3-b62a-00c7d5c517c1'),
	 ('990950e0-4cf0-4685-a029-17f03937d556','STOCK_INCREASE',7,'2023-08-22 15:11:54','335e7206-6945-4fa3-b62a-00c7d5c517c1'),
	 ('e4ac50fb-6c94-40a2-9200-017688729d6e','STOCK_DECREASE',30,'2023-08-22 13:19:44','335e7206-6945-4fa3-b62a-00c7d5c517c1');
