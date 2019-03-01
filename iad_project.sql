-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2019 at 02:17 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iad_project`
--
CREATE DATABASE IF NOT EXISTS `iad_project` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `iad_project`;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(5) NOT NULL,
  `orderDetail` varchar(255) NOT NULL,
  `paid` varchar(25) NOT NULL,
  `receiverName` varchar(255) NOT NULL,
  `phoneNumber` int(20) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `orderDetail`, `paid`, `receiverName`, `phoneNumber`, `address`) VALUES
(1, 'Produce ID: 2 quantity: 1,Produce ID: 1 quantity: 1,Produce ID: 3 quantity: 1,', '$92.97', 'Alan Tan Jia Shun', 6235, '10 Ubi Crescent #04-88 Lobby E Ubi Techpark, 408564, Singapore');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(3) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `price`) VALUES
(1, 'Hershey\'s Milk Chocolate (10 bar)', '19.99'),
(2, 'Hershey\'s Skor Candy Bar (10 bar)', '26.99'),
(3, 'Hershey\'s Krackel Chocolate Bar (10 bar)', '45.99');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Username` varchar(25) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Phone` int(20) NOT NULL,
  `Role` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Username`, `Name`, `Password`, `Email`, `Gender`, `Phone`, `Role`) VALUES
('a234567890123456789012345', 'very very very very very very very very long long name 2', '900150983cd24fb0d6963f7d28e17f72', 'admin12345@admin.com', 'F', 12345678, 'N'),
('admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin@a.com', 'M', 99999999, 'A'),
('alan', 'alan', '02558a70324e7c4f269c69825450cec8', 'al@al.com', 'M', 12341222, 'N');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD UNIQUE KEY `orderID` (`orderID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Username`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
