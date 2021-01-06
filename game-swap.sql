-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 06, 2021 at 11:51 PM
-- Server version: 8.0.22-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game-swap`
--

-- --------------------------------------------------------

--
-- Table structure for table `offerts`
--

CREATE TABLE `offerts` (
  `id` int NOT NULL,
  `title` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL,
  `description` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL,
  `category` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL,
  `price` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL,
  `pic` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL,
  `contact` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_pl_0900_ai_ci;

--
-- Dumping data for table `offerts`
--

INSERT INTO `offerts` (`id`, `title`, `description`, `category`, `price`, `pic`, `contact`) VALUES
(5, 'Minecraft', 'klocki', 'Fantasy', 'cyberprank', '1609952533977-220px-Minecraft_cover.png', 'mail@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL,
  `password` text COLLATE utf8mb4_pl_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_pl_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'user', 'pass');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `offerts`
--
ALTER TABLE `offerts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `offerts`
--
ALTER TABLE `offerts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
