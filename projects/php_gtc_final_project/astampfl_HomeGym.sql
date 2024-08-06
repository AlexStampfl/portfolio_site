-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 29, 2023 at 02:00 PM
-- Server version: 8.0.35-0ubuntu0.20.04.1
-- PHP Version: 8.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `astampfl_HomeGym`
--

-- --------------------------------------------------------

--
-- Table structure for table `ContactForm`
--

CREATE TABLE `ContactForm` (
  `contactID` int NOT NULL,
  `FirstName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `LastName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Message` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ContactForm`
--

INSERT INTO `ContactForm` (`contactID`, `FirstName`, `LastName`, `Email`, `Message`) VALUES
(1, 'Alex', 'Stampfl', 'alexstampfl@gmail.com', NULL),
(2, 'Donald', 'Duck', 'donaldduck@gmail.com', NULL),
(4, 'Joseph', 'Stampfl', 'alexstampfl@gmail.com', NULL),
(5, 'Matt', 'Kowski', 'johndoe@gmail.com', NULL),
(6, 'John', 'Jones', 'johnjones@gmail.com', NULL),
(7, 'Hawk', 'Girl', 'hawkgirl@gmail.com', NULL),
(8, 'Goofy', 'Peterson', 'donaldduck@gmail.com', NULL),
(9, 'Wendy', 'Revolinski', 'April18Wendy@mail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Customize`
--

CREATE TABLE `Customize` (
  `FirstName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `LastName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Weight` int DEFAULT NULL,
  `Height` int DEFAULT NULL,
  `BMI` int DEFAULT NULL,
  `BMR` int DEFAULT NULL,
  `Equipment` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `WorkoutType` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `MedicalConditions` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ContactForm`
--
ALTER TABLE `ContactForm`
  ADD PRIMARY KEY (`contactID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ContactForm`
--
ALTER TABLE `ContactForm`
  MODIFY `contactID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
