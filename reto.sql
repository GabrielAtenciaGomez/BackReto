-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-02-2021 a las 10:14:11
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `reto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carros`
--

CREATE TABLE `carros` (
  `id` varchar(255) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carros`
--

INSERT INTO `carros` (`id`, `modelo`, `marca`, `foto`, `fecha_ingreso`, `valor`, `estado`, `createdAt`, `updatedAt`) VALUES
('123', '1995', 'toyotamarca1', '123.jpg', '2021-02-16', 250000, 1, '2021-02-17 07:59:12', '2021-02-17 03:57:39'),
('sdfsdf', '1995', 'audi', 'sdfsdf.jpg', '2021-02-15', 240000, 0, '2021-02-17 03:30:17', '2021-02-17 03:30:17'),
('124', '1996', 'toyotamarca2', '124.jpg', '2021-02-17', 240000, 0, '2021-02-17 03:57:39', '2021-02-17 03:57:53'),
('34', '2001', 'estoy modificado', '', '2021-02-22', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('45', '2000', 'toyotamarca6', '', '2021-02-21', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('125', '1997', 'toyotamarca3', '', '2021-02-18', 250000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('1', '2002', 'estoy modificado', '', '2021-02-23', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('126', '1998', 'toyotamarca4', '', '2021-02-19', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('127', '1999', 'toyotamarca5', '', '2021-02-20', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('2', '2003', 'estoy modificado', '', '2021-02-24', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('3', '2004', 'estoy modificado', '', '2021-02-25', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('4', '2005', 'estoy modificado', '', '2021-02-26', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('5', '2006', 'estoy modificado', '', '2021-02-27', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('6', '2007', 'estoy modificado', '', '2021-02-28', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('7', '2008', 'estoy modificado', '', '0000-00-00', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('8', '2009', 'estoy modificado', '', '0000-00-00', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('9', '2010', 'estoy modificado', '', '0000-00-00', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('10', '2011', 'estoy modificado', '', '2021-03-01', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('11', '2012', 'estoy modificado', '', '2021-03-02', 210000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39'),
('12', '2013', 'estoy modificado', '', '2021-03-03', 200000, 1, '2021-02-17 03:57:39', '2021-02-17 03:57:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210215172006-create-carro.js'),
('20210215172323-create-usuario.js'),
('20210215172618-create-usuario.js'),
('20210215172840-create-usuario.js'),
('20210216164519-create-carro.js'),
('20210216165154-create-carro.js'),
('20210216165433-create-carro.js'),
('20210217050344-create-carro.js'),
('20210217051036-create-carro.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `correo`, `contrasenia`, `createdAt`, `updatedAt`) VALUES
(1, 'PEPITO', 'PLUS', 'PEPITO.PLUS@HOLA.COM', '$2b$10$QLESyP4HBwr8ofjV0IEbw.hAQgCIA8uyyEWxmsFSaX/0IiRtxyzhK', '2021-02-10 11:26:23', '2021-02-10 11:27:15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
