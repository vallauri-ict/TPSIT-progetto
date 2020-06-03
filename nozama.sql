-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 03, 2020 alle 19:29
-- Versione del server: 10.4.11-MariaDB
-- Versione PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nozama`
--
CREATE DATABASE IF NOT EXISTS `nozama` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `nozama`;

-- --------------------------------------------------------

--
-- Struttura della tabella `item`
--

CREATE TABLE `item` (
  `codice` int(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descrizione` varchar(255) NOT NULL,
  `immagine` varchar(255) NOT NULL,
  `venditore` varchar(255) NOT NULL,
  `stato` varchar(255) NOT NULL,
  `quantita` int(255) NOT NULL,
  `prezzo` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `item`
--

INSERT INTO `item` (`codice`, `nome`, `descrizione`, `immagine`, `venditore`, `stato`, `quantita`, `prezzo`) VALUES
(1, 'Maglietta a maniche corte', 'maglietta a maniche corte realizzata con la massima cura da LaMiaAzienda per il confort di chi la indosserà', 'maglietta_a_maniche_corte.jpg', 'LaMiaAzienda', 'nuovo', 50, 15),
(2, 'prova', 'dnsaliosdoasòndubuoasdo', 'prova.jpg', 'abdul', 'usato', 2000, 0),
(3, 'MioItem', 'item molto carino aggiunto da me', 'item.png', 'me', 'nuovo', 100, 10),
(4, 'Macchina caffè', 'macchina del caffè LAVAZZA, qualità italiana', 'lavazza.jpg', 'LAVAZZA', 'nuovo', 2, 50),
(5, 'Sedia gaming', 'sedia da gaming/ufficio ergonomica e studiata per chi deve passarci tante ore sopra', 'sedia.jpg', 'OOkla', 'nuovo', 200, 150),
(6, 'coperta', 'coperta in piuma vera d\'oca', 'coperta.jpg', 'Coperte & co.', 'usato', 1, 30),
(7, 'ASUS xp', 'Computer portatile di casa ASUS, la massima potenza disponibile al miglior prezzo', 'pc.jpg', 'ASUS', 'nuovo', 500, 400);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `email` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `carrello` varchar(255) NOT NULL,
  `indirizzo` varchar(255) NOT NULL,
  `carta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`email`, `nome`, `password`, `carrello`, `indirizzo`, `carta`) VALUES
('n.dovetta.0823@vallauri.edu', 'Dovetta Nicolas', 'ab536e8fc1e08938961969945f884da9', '', 'Via Dei Pescatori 1', '9999888877774444|05/21|235'),
('p.stefirca.0882@vallauri.edu', 'Paul', '5f4dcc3b5aa765d61d8327deb882cf99', '1|2|5', 'sdfg', 'wedfvbhgfcxwef'),
('pippo@baudo.it', 'Pippo', '5f4dcc3b5aa765d61d8327deb882cf99', '2|2|4', 'Via dei pippi 1', '1111222233334444|05/22|235'),
('stefirca.alex.as@gmail.com', 'Alessandru Stefirca', '5f4dcc3b5aa765d61d8327deb882cf99', '', 'Via giuseppe verdi 16', '1234123412341234|08/29|589'),
('v.palumbo.1004@vallauri.edu', 'Palumbo Valerio', '585ab4c50b3895d60c0438f4d9b931f1', '', 'Via Giuseppe 12', '3333444455559999|12/27|777');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`codice`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `item`
--
ALTER TABLE `item`
  MODIFY `codice` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
