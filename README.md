# Sixt
Ce projet est un site Web complet de location de voitures construit à l'aide de React pour le frontend et de bases de données relationnelles et non relationnelles pour le backend. Il fournit une interface conviviale permettant aux clients de parcourir, rechercher et louer des voitures, ainsi qu'une interface administrative pour gérer les listes de voitures, les réservations et les informations client.

## Table des matières

    Caractéristiques
    Technologies utilisées
    Installation
    Usage
    Schémas de base de données
    Structure des dossiers
    Contribuant
    Licence
    
## Caractéristiques

    Authentification utilisateur : inscrivez-vous, connectez-vous et gérez les comptes utilisateur.
    Annonces de voitures : parcourez une variété de voitures disponibles à la location.
    Recherche et filtre : recherchez des voitures par marque, type et prix.
    Système de réservation : réservez des voitures pour des dates spécifiques.
    Panneau d'administration : gérez les listes de voitures, affichez les réservations et gérez les requêtes des clients.
    Conception réactive : interface adaptée aux mobiles.

# Technologies utilisées

### L'extrémité avant

    React
    CSS
    Bootstrap (pour une conception réactive)
    
### Back-end
<<<<<<< HEAD

    Noeud.js
    Express.js
    
### Bases de données

    Base de données relationnelle :  MySQL
    Base de données non relationnelle :  Firebase
    
### Authentification

    JWT (JSON Web Tokens) pour l'authentification des utilisateurs
    
### Bibliothèques et outils supplémentaires

    Axios (pour les requêtes API)
    React Router (pour la navigation)
    Mongoose (pour l'interaction MongoDB)
    Sequelize (pour l'interaction PostgreSQL)
    dotenv (pour les variables d'environnement)
    bcrypt (pour le hachage de mot de passe)
    
##Installation

=======

    Node.js
    Express.js
    
### Bases de données

    Base de données relationnelle :  MySQL
    Base de données non relationnelle :  Firebase
    
### Authentification

    JWT (JSON Web Tokens) pour l'authentification des utilisateurs
    
### Bibliothèques et outils supplémentaires

    Axios (pour les requêtes API)
    React Router (pour la navigation)
    bcrypt (pour le hachage de mot de passe)
    
##Installation

>>>>>>> 483c03fc235684fb6beb8f0a1a7f6023c0634e89
   ### Conditions préalables
   
    Assurez-vous que les éléments suivants sont installés sur votre ordinateur :
    Nodejs
    npm ou yarn
    MySQL
    Firebase

### Pas

1. Cloner le référentiel
- cloner le github https://github.com/your-username/car-rental-website.git
site-de-location-de-voiture-cd

2. Installer les dépendances
- npm je viens @latest
- installation npm
- npm je réagis routeur-dom
- npm j'exprime les cors


# DÉFINITION DES TERMES BASE DE DONNÉES RELATIONNELLES

### 1. Introduction
○ Présentation générale des modèles de données et des bases de données
relationnelles.

### 2. Modèle Conceptuel de Données (MCD)
○ 2.1 Entité
○ 2.2 Attribut
○ 2.3 Relation
○ 2.4 Cardinalité

### 3. Modèle Physique de Données (MPD)
○ 3.1 Table
○ 3.2 Colonne
○ 3.3 Index
○ 3.4 Clé Primaire
○ 3.5 Clé Étrangère

### 4. Modèle Logique de Données (MLD)
○ 4.1 Table Logique
○ 4.2 Schéma Logique

### 5. SQL (Structured Query Language)
○ 5.1 SELECT
○ 5.2 INSERT
○ 5.3 UPDATE
○ 5.4 DELETE
○ 5.5 CREATE
○ 5.6 ALTER
○ 5.7 DROP

### 6. Base de Données Relationnelle
○ 6.1 Relation
○ 6.2 Tuple
○ 6.3 Schéma

### 7. Dictionnaire de Données
○ 7.1 Description d'Entité
○ 7.2 Description d'Attribut
○ 7.3 Description de Relation

### 8. Exemples Pratiques
○ 8.1 Exemples d'Entités
○ 8.2 Exemples d'Attributs
○ 8.3 Exemples de Relations et de Cardinalités
### 9. Conclusion

○ Synthèse des concepts et importance des modèles de données pour la
conception de bases de données robustes.

Ce sommaire peut servir de guide pour une présentation ou un document détaillé sur les
concepts liés aux bases de données relationnelles et aux modèles de données.

## BASE DE DONNÉES RELATIONNELLES
Une base de données relationnelle est un système de gestion de données
organisé en tables, où les données sont stockées sous forme de lignes et de
colonnes. Les tables sont interconnectées par des relations définies par des
clés primaires et étrangères, permettant une organisation structurée et des
requêtes complexes. Ce modèle utilise SQL (Structured Query Language) pour
la gestion et la manipulation des données.
MCD

### Un MCD (Modèle Conceptuel de Données) est une représentation graphique des
données et de leurs relations dans une base de données. Il décrit les entités, leurs
attributs, et les relations entre elles, permettant de structurer et d'organiser les
informations de manière logique avant la création physique de la base de données.
MPD

### Un MPD (Modèle Physique de Données) : C'est la traduction du MCD en un
schéma physique pour une base de données spécifique. Il décrit comment les
données seront réellement stockées dans le système de gestion de bases de
données (SGBD) en termes de tables, colonnes, types de données, index, etc.
MLD

### Un MLD (Modèle Logique de Données) : C'est une étape intermédiaire entre le
MCD et le MPD. Il convertit le MCD en un modèle plus détaillé sans se préoccuper
des spécificités techniques du SGBD. Le MLD spécifie les tables, les colonnes et les
clés primaires/étrangères tout en restant indépendant du SGBD.
UNE ENTITÉ

### Une entité dans un MCD (Modèle Conceptuel de Données) est un objet ou concept
distinct et identifiable, pertinent pour le domaine étudié, qui possède des attributs décrivant
ses propriétés. Par exemple, "Client", "Produit" ou "Commande" sont des entités.
UNE ASSOCIATION
Une association dans un MCD (Modèle Conceptuel de Données) est une relation qui lie
deux ou plusieurs entités, définissant comment elles interagissent ou sont liées entre elles.
Par exemple, une association entre "Client" et "Commande" indique qu'un client passe des
commandes.

### LA CARDINALITÉ
La cardinalité dans le MCD (Modèle Conceptuel de Données) représente le nombre
d'occurrences d'une entité qui peuvent être associées à une occurrence d'une autre entité
dans une relation. En d'autres termes, elle définit les contraintes quantitatives des relations
entre les entités.
Il existe principalement trois types de cardinalité :

#### 1. Un-à-Un (1:1) : Une occurrence d'une entité A est associée à une et une seule
occurrence d'une entité B, et vice versa. Par exemple, chaque personne a un
numéro de sécurité sociale unique.
#### 2. Un-à-Plusieurs (1

) : Une occurrence d'une entité A peut être associée à plusieurs occurrences d'une
entité B, mais une occurrence de B ne peut être associée qu'à une seule occurrence
de A. Par exemple, un client peut passer plusieurs commandes, mais chaque
commande est passée par un seul client.
#### 3. Plusieurs-à-Plusieurs (N

) : Plusieurs occurrences d'une entité A peuvent être associées à plusieurs
occurrences d'une entité B. Par exemple, les étudiants peuvent s'inscrire à plusieurs
cours, et chaque cours peut avoir plusieurs étudiants inscrits.
Exemples visuels de cardinalités :
● 1:1 : Personne (1) -- (1) Carte d'identité
● 1
: Client (1) -- (N) Commande
● N
: Étudiant (N) -- (M) Cours
Ces cardinalités sont généralement représentées graphiquement dans un MCD avec des
notations spécifiques (comme les pattes de corbeaux pour les relations un-à-plusieurs ou
plusieurs à plusieurs) pour illustrer les contraintes de relation entre les entités.


# SQL

### SQL (Structured Query Language) est un langage standard utilisé pour gérer et manipuler
des bases de données relationnelles. Il permet de créer, lire, mettre à jour et supprimer des
données dans une base de données. Les principales opérations SQL incluent :
● SELECT : pour récupérer des données.
● INSERT : pour ajouter de nouvelles données.
● UPDATE : pour modifier des données existantes.
● DELETE : pour supprimer des données.
● CREATE : pour créer des tables et d'autres objets de la base de données.
● ALTER : pour modifier la structure d'une table existante.
● DROP : pour supprimer des tables ou d'autres objets de la base de données.

SQL est utilisé par de nombreux systèmes de gestion de bases de données relationnelles,
comme MySQL, PostgreSQL, Oracle, et Microsoft SQL Server.
Un dictionnaire de données obtenu à partir d'un MCD (Modèle Conceptuel de Données) est
un document qui détaille et décrit les éléments de données représentés dans le MCD. Il sert
de référence pour comprendre les données et leur structure dans la base de données. Voici
comment il peut être expliqué :
#### 1. Entités : Chaque entité du MCD est listée avec son nom et sa description. Une entité
représente un objet ou un concept important pour le système (par exemple, Client ou
Produit).

#### 2. Attributs : Pour chaque entité, tous les attributs (ou champs) sont détaillés. Chaque
attribut a un nom, une description, un type de données (par exemple, entier, texte,
date), et des contraintes éventuelles (comme la taille maximale, si c'est une clé
primaire, etc.).

#### 3. Relations : Les relations entre les entités sont décrites. Chaque relation indique les
entités concernées, le type de relation (un-à-un, un-à-plusieurs, plusieurs
à-plusieurs), et les contraintes de la relation (comme les clés étrangères).

#### 4. Contraintes et règles de gestion : Toute règle ou contrainte d'intégrité spécifique
est mentionnée. Cela inclut les règles de validation des données, les contraintes
d'unicité, les dépendances entre les données, etc.

#### 5. Autres Détails : Des informations supplémentaires peuvent être incluses, telles que
les valeurs par défaut pour certains attributs, les index, les vues, les déclencheurs, et
d'autres objets de la base de données.
Exemple : Pour une entité "Client", le dictionnaire de données pourrait inclure :
● Entité : Client
○ Description : Représente les clients de l'entreprise.
○ Attributs :
■ ID_Client : Identifiant unique du client (type : entier, clé primaire).
■ Nom : Nom du client (type : texte, taille maximale : 50 caractères).
■ Email : Adresse email du client (type : texte, contrainte d'unicité).
■ Date_Inscription : Date d'inscription du client (type : date).
○ Relations :
■ Commande : Un client peut passer plusieurs commandes (relation
un-à-plusieurs avec l'entité "Commande").
En résumé, un dictionnaire de données à partir d'un MCD est une documentation détaillée
qui aide les développeurs et les utilisateurs à comprendre les données, leur structure et
leurs interrelations dans le système.

# Glossaire des termes techniques

#### 1. MCD (Modèle Conceptuel de Données)
● Entité : Objet ou concept distinct identifiable, ayant des propriétés pertinentes pour
le domaine étudié.
● Attribut : Propriété ou caractéristique d'une entité.
● Relation : Lien entre deux ou plusieurs entités, définissant leurs interactions.
● Cardinalité : Nombre d'occurrences d'une entité pouvant être associées à une
occurrence d'une autre entité dans une relation.
#### 2. MPD (Modèle Physique de Données)

● Table : Structure de stockage de données organisée en lignes et colonnes.
● Colonne : Champ dans une table qui contient un type spécifique de données.
● Index : Structure de données qui améliore la vitesse des opérations de recherche
dans une table.
● Clé Primaire : Attribut ou ensemble d'attributs qui identifient de manière unique une
occurrence d'une entité.
● Clé Étrangère : Attribut d'une table qui est une clé primaire dans une autre table,
établissant une relation entre les tables.
#### 3. MLD (Modèle Logique de Données)

● Table Logique : Structure théorique représentant comment les données seront
organisées, indépendamment du SGBD spécifique.
● Schéma Logique : Représentation détaillée des tables, colonnes, clés primaires et
étrangères sans spécificités techniques du SGBD.
#### 4. SQL (Structured Query Language)

● SELECT : Instruction SQL utilisée pour récupérer des données de la base de
données.
● INSERT : Instruction SQL utilisée pour ajouter de nouvelles données dans une table.
● UPDATE : Instruction SQL utilisée pour modifier des données existantes.
● DELETE : Instruction SQL utilisée pour supprimer des données.
● CREATE : Instruction SQL utilisée pour créer une nouvelle table ou un autre objet
dans la base de données.
● ALTER : Instruction SQL utilisée pour modifier la structure d'une table existante.
● DROP : Instruction SQL utilisée pour supprimer une table ou un autre objet de la
base de données.

#### 5. Base de Données Relationnelle
● Relation : Table dans une base de données relationnelle.
● Tuple : Ligne dans une table, représentant un enregistrement unique.
● Schéma : Définition de la structure de la base de données, incluant les tables et
leurs relations.

#### 6. Dictionnaire de Données
● Description d'Entité : Détail des entités, incluant leur nom et description.
● Description d'Attribut : Détail des attributs d'une entité, incluant nom, type de
données et contraintes.
● Description de Relation : Détail des relations entre entités, incluant cardinalité et
contraintes.
Exemples
● Entité : "Client", "Produit", "Commande"
● Attribut : "Nom", "Prix", "Date_Inscription"
● Relation : "Un client passe des commandes"
● Cardinalité : 1:1, 1
, N
Ce glossaire couvre les termes essentiels pour comprendre et travailler avec des modèles
conceptuels, logiques et physiques de données, ainsi que les bases de données
relationnelles et SQL.



# React + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React dans Vite avec HMR et certaines règles ESLint.

Actuellement, deux plugins officiels sont disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utilise [Babel](https://babeljs .io/) pour une actualisation rapide
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utilise [SWC](https://swc.rs/) pour l'actualisation rapide
#sixt_243
