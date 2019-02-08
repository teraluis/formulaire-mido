-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 08 fév. 2019 à 14:48
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `mido2019`
--

-- --------------------------------------------------------

--
-- Structure de la table `inscrits`
--

DROP TABLE IF EXISTS `inscrits`;
CREATE TABLE IF NOT EXISTS `inscrits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(250) NOT NULL,
  `prenom` varchar(250) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `company` varchar(250) NOT NULL,
  `country` varchar(250) NOT NULL,
  `postal` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `inscrits`
--

INSERT INTO `inscrits` (`id`, `nom`, `prenom`, `mail`, `phone`, `company`, `country`, `postal`) VALUES
(1, 'goffart', 'Clotilde', 'luismanresaramirez@gmail.com', '651486815', 'angeleyes', 'France', '92200');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
