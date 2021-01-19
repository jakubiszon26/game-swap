-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Czas generowania: 08 Sty 2021, 21:22
-- Wersja serwera: 8.0.22-0ubuntu0.20.04.3
-- Wersja PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `game-swap`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `offerts`
--

CREATE TABLE `offerts` (
  `id` int NOT NULL,
  `title` text  NOT NULL,
  `description` text NOT NULL,
  `category` text NOT NULL,
  `price` text NOT NULL,
  `pic` text NOT NULL,
  `contact` text NOT NULL,
  `user` int NOT NULL
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `offerts`
--

INSERT INTO `offerts` (`id`, `title`, `description`, `category`, `price`, `pic`, `contact`, `user`) VALUES
(5, 'Minecraft', 'klocki', 'Fantasy', 'cyberprank', '1609952533977-220px-Minecraft_cover.png', 'mail@mail.com', 1),
(6, 'Witcher', 'nie lubie nie znam ale mi sie wyswietlilo w google xd', 'Fantasy', 'Minecraft', '1610053518852-wiedzmin.jpg', 'jakubkolakowski6@gmail.com', 1),
(8, 'Nowa oferta', 'dlugi opis', 'Fantasy', 'Minecraft', '1610054983210-pexels-travis-blessing-1363876.jpg', 'jakubkolakowski6@gmail.com', 1),
(9, 'The last of us', 'zombie itp', 'Horror', 'wiedźmin', '1610098857842-the-last-of-us-2-ellie-i76718.jpg', 'jakubkolakowski6@gmail.com', 3),
(10, 'Roblox', 'klocki', 'Fantasy', 'cyberprank', '1610114564516-roblox.jpg', 'jakubkolakowski6@gmail.com', 8),
(11, 'Uncharted', 'Fajna gra logiczna ', 'Survival', 'Minecraft', '1610136771247-unchartedd.jpg', 'jakubkolakowski6@gmail.com', 11);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'user', 'pass'),
(3, 'jakub', 'trudnehaslo'),
(4, 'git', 'clone'),
(5, 'linux', 'mint'),
(6, 'andrzej', 'matematyka'),
(7, 'Jan', 'Robak'),
(8, 'JacekSoplica', 'tadek'),
(9, 'władek', '2137'),
(10, 'jakubiszon26', 'github'),
(11, 'jakubb', 'test');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `offerts`
--
ALTER TABLE `offerts`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla tabel zrzutów
--

--
-- AUTO_INCREMENT dla tabeli `offerts`
--
ALTER TABLE `offerts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
