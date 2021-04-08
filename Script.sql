DROP DATABASE IF EXISTS bdpaginacion
GO
CREATE DATABASE bdpaginacion
GO
USE bdpaginacion
GO
CREATE TABLE IF NOT EXISTS bdpaginacion.post(
    IdPost INT NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria',
    URL VARCHAR(200),
    Titulo VARCHAR(100),
    Fecha DATETIME,
    PRIMARY KEY (IdPost)
)
GO
SELECT * FROM bdpaginacion.post
GO
TRUNCATE TABLE bdpaginacion.post
GO

GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(1,'/PHP_Paginacion/public/img/1.png','Mihawk','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(2,'/PHP_Paginacion/public/img/2.png','Zoro','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(3,'/PHP_Paginacion/public/img/3.png','Luffy','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(4,'/PHP_Paginacion/public/img/4.png','Sabo','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(5,'/PHP_Paginacion/public/img/5.png','Aokiji','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(6,'/PHP_Paginacion/public/img/6.png','Brook','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(7,'/PHP_Paginacion/public/img/7.jpg','Marco','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(8,'/PHP_Paginacion/public/img/8.jpg','Smoker','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(9,'/PHP_Paginacion/public/img/9.png','Lucci','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(10,'/PHP_Paginacion/public/img/10.jpg','Kizaru','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(11,'/PHP_Paginacion/public/img/11.jpg','Kuro','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(12,'/PHP_Paginacion/public/img/12.png','Ussop','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(13,'/PHP_Paginacion/public/img/13.jpg','Enel','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(14,'/PHP_Paginacion/public/img/14.jpg','Chopper','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(15,'/PHP_Paginacion/public/img/15.jpg','Sanji','2021-04-05 18:17:57.0')
GO
INSERT INTO bdpaginacion.post (IdPost,URL,Titulo,Fecha) VALUES(16,'/PHP_Paginacion/public/img/16.png','Buggy','2021-04-05 18:17:57.0')
GO