SET NAMES UTF8;
DROP DATABASE IF EXISTS Ebusiness;
CREATE DATABASE Ebusiness CHARSET=UTF8;
USE Ebusiness;

/**网站基本信息表**/
CREATE TABLE e_site_info(
	siteName VARCHAR(64),
	icpBak VARCHAR(32),
	icp VARCHAR(32),
	copyright VARCHAR(64),
	adminMail VARCHAR(64)
);
INSERT INTO e_site_info VALUES
('慕课网','京ICP备09037834号','京ICP证B1034-8373号','2006 - 2018 慕课版权所有','admin@ebusiness@com');

/**导航条内容表**/
CREATE TABLE e_navbar_item(
	nid INT PRIMARY KEY AUTO_INCREMENT,
	nname VARCHAR(8),
	title VARCHAR(16),
	url VARCHAR(128)
);
INSERT INTO e_navbar_item VALUES
(1,'全部商品分类','查询所有商品','#'),
(2,'数码城','查看最新数码产品','#'),
(3,'天黑黑','猎奇','#'),
(5,'团购','团购优惠多多','#'),
(6,'发现','发现新产品','#'),
(7,'二手特卖','质量二手特卖','#');

/**首页轮播广告表**/
CREATE TABLE e_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(64),
	title VARCHAR(64),
	url VARCHAR(64),
	isShown BOOLEAN
);
INSERT INTO e_carousel VALUES
(1,'image/pic/banner_lg_01.jpg','第二代智能手表','#',1),
(2,'image/pic/banner_lg_02.jpg','广告占位图','#',1);

/**用户信息表**/
CREATE TABLE e_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	uemail VARCHAR(64),
	uaddr VARCHAR(64),
	isAgree BOOLEAN
);
INSERT INTO e_user VALUES
(10,'jack','123456','123456@163.com','北京海淀区',1),
(20,'mary','456789','456789@163.com','上海浦东区',1);

/**商品首页信息**/
CREATE TABLE e_productIndex_lg(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	lpname VARCHAR(64),
	lprice FLOAT(10,2),
	lpic VARCHAR(32)
);
INSERT INTO e_productIndex_lg VALUES
(1,'HTC新渴望8系列',1899,'image/pic/item_lg_01.jpg'),
(2,'HTC新渴望9系列',2899,'image/pic/item_lg_01.jpg'),
(3,'HTC新渴望10系列',3899,'image/pic/item_lg_01.jpg'),
(4,'HTC新渴望11系列',4899,'image/pic/item_lg_01.jpg'),
(5,'三月美食狂享购',50,'image/pic/item_lg_02.jpg'),
(6,'三月美食狂享购',40,'image/pic/item_lg_02.jpg'),
(7,'三月美食狂享购',45,'image/pic/item_lg_02.jpg'),
(8,'三月美食狂享购',60,'image/pic/item_lg_02.jpg');

CREATE TABLE e_productIndex_sm(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	sname VARCHAR(64),
	sprice FLOAT(10,2),
	spic VARCHAR(32)
);
INSERT INTO e_productIndex_sm VALUES
(1,'NFC技术一碰轻松配对!接触屏幕',149.00,'image/pic/item_sm_01.png'),
(2,'Samsung三星G ALAXY Grand2',2000.00,'image/pic/item_sm_02.jpg'),
(3,'全网底价 Apple 苹果iPad mini1',1888.00,'image/pic/item_sm_03.jpg'),
(4,'Apple苹果 全新Retina屏MacBoo',20020.00,'image/pic/item_sm_04.jpg'),
(5,'康比特 维他保嚼片 60片',600.00,'image/pic/item_sm_05.jpg'),
(6,'康比特 维他保嚼片 40片',400,'image/pic/item_sm_05.jpg'),
(7,'康比特 维他保嚼片 50片',450,'image/pic/item_sm_05.jpg'),
(8,'康比特 维他保嚼片 30片',350,'image/pic/item_sm_05.jpg');


/**商品信息表,pgroup是商品类型分组 1表示数码产品，2表示食品**/
CREATE TABLE e_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(64),
	price FLOAT(10,2),
	pic VARCHAR(32),
	pgroup INT(10)
);
INSERT INTO e_product VALUES
(1,'小米 Note 全网通 白色 移动联通电信4G手机 双卡双待',1199.00,'image/phone/phone_01.jpg',1),
(2,'Apple iPhone 6s (A1700) 16G 玫瑰金色 移动联通电信4G手机',3999.00,'image/phone/phone_02.jpg',1),
(3,'PPO R9 4GB+64GB内存版 玫瑰金 全网通4G手机 双卡',2499.00,'image/phone/phone_03.jpg',1),
(4,'小米 红米 3S 高配全网通 3GB内存 32GB ROM 经典金色',899.00,'image/phone/phone_04.jpg',1),
(5,'金立M6 Plus 香槟金 4GB+64GB版 移动联通电信4G手机 双卡双待',2999.00,'image/phone/phone_05.jpg',1),
(6,'Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机',5799.00,'image/phone/phone_06.jpg',1),
(7,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待',2499.00,'image/phone/phone_07.png',1),
(8,'小米 红米Note3 高配全网通版 3GB+32GB 金色 移动联通电信4G手机',1099.00,'image/phone/phone_08.jpg',1),
(9,'荣耀8 4GB+32GB 全网通版 魅海蓝 双镜头，双2.5D玻璃',2499.00,'image/phone/phone_09.jpg',1),
(10,'荣耀7 (PLK-AL10) 3GB+64GB内存版 荣耀金 移动联通电信4G手机',1799.00,'image/phone/phone_10.jpg',1),
(11,'荣耀 V8 全网通 高配版 4GB+64GB 香槟金 移动联通电信4G手机 双卡双待双通',2799.00,'image/phone/phone_11.jpg',1),
(12,'荣耀 畅玩5X 3GB内存版 落日金 移动联通电信4G手机 双卡双待 炫酷指纹',1099.00,'image/phone/phone_12.jpg',1),
(13,'Apple iPhone 6 (A1586) 64GB 金色 移动联通电信4G手机',4199.00,'image/phone/phone_13.jpg',1),
(14,'TCL 初现 750 雅金 移动联通电信4G手机 双卡双待 后置1600万摄像，美姿拍照！',4199.00,'image/phone/phone_14.jpg',1),
(15,'华为 P9 plus 64GB 琥珀灰 移动联通电信4G手机 双卡双待',3988.00,'image/phone/phone_15.jpg',1),
(16,'Apple iPhone 5s (A1530) 16GB 金色 移动联通4G手机',2198.00,'image/phone/phone_16.jpg',1),
(17,'vivo X7Plus 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 金色',2798.00,'image/phone/phone_17.jpg',1),
(18,'华为 畅享5S 金色 移动联通电信4G手机 双卡双待 10万好评手机！',1099.00,'image/phone/phone_18.jpg',1),
(19,'Apple iPhone 6 Plus (A1524) 16GB 银色 移动联通电信4G手机',3899.00,'image/phone/phone_19.jpg',1),
(20,'华为 麦芒5 全网通 4GB+64GB版 香槟金 移动联通电信4G手机 双卡双待',2599.00,'image/phone/phone_20.jpg',1),
(21,'小米5 全网通 标准版 3GB内存 32GB ROM 白色 移动联通电信4G手机',1799.00,'image/phone/phone_21.jpg',1),
(22,'华为 P9 全网通 3GB+32GB版 流光金 移动联通电信4G手机 双卡双待 麒麟955',3188.00,'image/phone/phone_22.jpg',1),
(23,'金立 金钢 标准版 爵士金 移动联通电信4G手机 双卡双待 4G全网通',999.00,'image/phone/phone_23.jpg',1),
(24,'360手机 N4 全网通 4GB+32GB 阳光白 移动联通电信4G手机 双卡双待',999.00,'image/phone/phone_24.jpg',1),
(25,'小米 Max 全网通 标准版 3GB内存 32GB ROM 金色 移动联通电信4G手机',1299.00, 'image/phone/phone_25.jpg',1),
(26,'华为 P9 全网通 4GB+64GB版 金色 移动联通电信4G手机 双卡双待 后置1200万',3688.00, 'image/phone/phone_26.jpg',1),
(27,'乐视（Le）乐2（X620）32GB 原力金 移动联通电信4G手机 双卡双待 5.5英寸',988.00,'image/phone/phone_27.jpg',1),
(28,'努比亚(nubia)【3+64GB】小牛5 Z11mini 黑色 移动联通电信4G手机',1299.00, 'image/phone/phone_28.jpg',1),
(29,'乐视（Le）乐2Pro 32GB 金色 移动联通电信4G手机 双卡双待 5.5英寸In-Cell屏',1399.00,'image/phone/phone_29.jpg',1),
(30,'华为 Mate 8 3GB+32GB版 玫瑰金 移动联通电信4G手机 双卡双待 麒麟950芯片',2799.00, 'image/phone/phone_30.jpg',1),
(31,'小米 4c 标准版 全网通 白色 移动联通电信4G手机 双卡双待 高通骁龙808畅销机',799.00,'image/phone/phone_31.jpg',1),
(32,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 星空灰 vivox7',2498.00, 'image/phone/phone_32.jpg',1),
(33,'联想 乐檬3 （K32C36）16GB 金色 移动4G手机 双卡双待 刀锋致敬经典',599.00,'image/phone/phone_33.jpg',1),
(34,'华为 荣耀 畅玩4X 晨曦金 移动联通电信4G手机 双卡双待 5.5英寸大屏看片利器',749.00,'image/phone/phone_34.jpg',1),
(35,'三星 Galaxy On5（G5500）金色 移动联通4G手机 真皮质感后盖，2600毫安大容量',699.00,'image/phone/phone_35.jpg',1),
(36,'OPPO A37 2GB+16GB内存版 玫瑰金 全网通4G手机 双卡双待 【赠品任你选】',1299.00,'image/phone/phone_36.jpg',1),
(37,'小米 Note 全网通 白色 移动联通电信4G手机 双卡双待',1199.00,'image/phone/phone_01.jpg',1),
(38,'Apple iPhone 6s (A1700) 16G 玫瑰金色 移动联通电信4G手机',3999.00,'image/phone/phone_02.jpg',1),
(39,'PPO R9 4GB+64GB内存版 玫瑰金 全网通4G手机 双卡',2499.00,'image/phone/phone_03.jpg',1),
(40,'小米 红米 3S 高配全网通 3GB内存 32GB ROM 经典金色',899.00,'image/phone/phone_04.jpg',1),
(41,'金立M6 Plus 香槟金 4GB+64GB版 移动联通电信4G手机 双卡双待',2999.00,'image/phone/phone_05.jpg',1),
(42,'Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机',5799.00,'image/phone/phone_06.jpg',1),
(43,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待',2499.00,'image/phone/phone_07.png',1),
(44,'小米 红米Note3 高配全网通版 3GB+32GB 金色 移动联通电信4G手机',1099.00,'image/phone/phone_08.jpg',1),
(45,'荣耀8 4GB+32GB 全网通版 魅海蓝 双镜头，双2.5D玻璃',2499.00,'image/phone/phone_09.jpg',1),
(46,'荣耀7 (PLK-AL10) 3GB+64GB内存版 荣耀金 移动联通电信4G手机',1799.00,'image/phone/phone_10.jpg',1),
(47,'荣耀 V8 全网通 高配版 4GB+64GB 香槟金 移动联通电信4G手机 双卡双待双通',2799.00,'image/phone/phone_11.jpg',1),
(48,'荣耀 畅玩5X 3GB内存版 落日金 移动联通电信4G手机 双卡双待 炫酷指纹',1099.00,'image/phone/phone_12.jpg',1),
(49,'Apple iPhone 6 (A1586) 64GB 金色 移动联通电信4G手机',4199.00,'image/phone/phone_13.jpg',1),
(50,'TCL 初现 750 雅金 移动联通电信4G手机 双卡双待 后置1600万摄像，美姿拍照！',4199.00,'image/phone/phone_14.jpg',1),
(51,'华为 P9 plus 64GB 琥珀灰 移动联通电信4G手机 双卡双待',3988.00,'image/phone/phone_15.jpg',1),
(52,'Apple iPhone 5s (A1530) 16GB 金色 移动联通4G手机',2198.00,'image/phone/phone_16.jpg',1),
(53,'vivo X7Plus 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 金色',2798.00,'image/phone/phone_17.jpg',1),
(54,'华为 畅享5S 金色 移动联通电信4G手机 双卡双待 10万好评手机！',1099.00,'image/phone/phone_18.jpg',1),
(55,'Apple iPhone 6 Plus (A1524) 16GB 银色 移动联通电信4G手机',3899.00,'image/phone/phone_19.jpg',1),
(56,'华为 麦芒5 全网通 4GB+64GB版 香槟金 移动联通电信4G手机 双卡双待',2599.00,'image/phone/phone_20.jpg',1),
(57,'小米5 全网通 标准版 3GB内存 32GB ROM 白色 移动联通电信4G手机',1799.00,'image/phone/phone_21.jpg',1),
(58,'华为 P9 全网通 3GB+32GB版 流光金 移动联通电信4G手机 双卡双待 麒麟955',3188.00,'image/phone/phone_22.jpg',1),
(59,'金立 金钢 标准版 爵士金 移动联通电信4G手机 双卡双待 4G全网通',999.00,'image/phone/phone_23.jpg',1),
(60,'360手机 N4 全网通 4GB+32GB 阳光白 移动联通电信4G手机 双卡双待',999.00,'image/phone/phone_24.jpg',1),
(61,'小米 Max 全网通 标准版 3GB内存 32GB ROM 金色 移动联通电信4G手机',1299.00, 'image/phone/phone_25.jpg',1),
(62,'华为 P9 全网通 4GB+64GB版 金色 移动联通电信4G手机 双卡双待 后置1200万',3688.00, 'image/phone/phone_26.jpg',1),
(63,'乐视（Le）乐2（X620）32GB 原力金 移动联通电信4G手机 双卡双待 5.5英寸',988.00,'image/phone/phone_27.jpg',1),
(64,'努比亚(nubia)【3+64GB】小牛5 Z11mini 黑色 移动联通电信4G手机',1299.00, 'image/phone/phone_28.jpg',1),
(65,'乐视（Le）乐2Pro 32GB 金色 移动联通电信4G手机 双卡双待 5.5英寸In-Cell屏',1399.00,'image/phone/phone_29.jpg',1),
(66,'华为 Mate 8 3GB+32GB版 玫瑰金 移动联通电信4G手机 双卡双待 麒麟950芯片',2799.00, 'image/phone/phone_30.jpg',1),
(67,'小米 4c 标准版 全网通 白色 移动联通电信4G手机 双卡双待 高通骁龙808畅销机',799.00,'image/phone/phone_31.jpg',1),
(68,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 星空灰 vivox7',2498.00, 'image/phone/phone_32.jpg',1),
(69,'联想 乐檬3 （K32C36）16GB 金色 移动4G手机 双卡双待 刀锋致敬经典',599.00,'image/phone/phone_33.jpg',1),
(70,'华为 荣耀 畅玩4X 晨曦金 移动联通电信4G手机 双卡双待 5.5英寸大屏看片利器',749.00,'image/phone/phone_34.jpg',1),
(71,'三星 Galaxy On5（G5500）金色 移动联通4G手机 真皮质感后盖，2600毫安大容量',699.00,'image/phone/phone_35.jpg',1),
(72,'OPPO A37 2GB+16GB内存版 玫瑰金 全网通4G手机 双卡双待 【赠品任你选】',1299.00,'image/phone/phone_36.jpg',1),
(73,'乐视（Le）乐2（X620）32GB 原力金 移动联通电信4G手机 双卡双待 5.5英寸',988.00,'image/phone/phone_27.jpg',1),
(74,'【美味】车厘子',12.00, 'image/food/1.jpg',2),
(75,'【可口】香脆松子',99.00,'image/food/2.jpg',2),
(76,'【可口】香脆松子',79.00, 'image/food/3.jpg',2),
(77,'【新口味】减肥神器魔芋丝',9.00,'image/food/4.jpg',2),
(78,'最新上市 精品蓝莓',24.00, 'image/food/5.jpg',2),
(79,'最新上市 香甜脐橙',59.00,'image/food/6.jpg',2),
(80,'【香甜】浓郁巧克力',74.00,'image/food/7.jpg',2),
(81,'进口方便面',95.00,'image/food/8.jpg',2),
(82,'巧克力威化饼',29.00,'image/food/9.jpg',2);


/**用户购物车表**/
CREATE TABLE e_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	userId INT
);
INSERT INTO e_cart VALUES
(101,10);

/**购物车详情表**/
CREATE TABLE e_cart_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	cartId INT,
	productId INT,
	count INT
);
INSERT INTO e_cart_detail VALUES
(1,101,15,3),
(2,101,18,1),
(3,101,21,2);