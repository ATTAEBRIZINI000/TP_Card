# TP_Card

# Exercice SOLID : Panier, Stockage et Produits en TypeScript

## Objectif

L'objectif de cet exercice est de mettre en pratique les principes SOLID en créant un système de gestion de panier d'achat avec des produits, un stockage de données, et la possibilité d'ajouter ou de retirer des articles du panier.

## Contexte

Vous devez créer trois principales entités :

1. **Product (Produit)** : Représente un article avec un nom et un prix.
2. **Cart (Panier)** : Contient les produits ajoutés par l'utilisateur.
3. **StorageArray (Stockage)** : Représente le mécanisme de persistance (local storage, base de données, etc.).

### Contraintes

- Le système doit suivre les principes SOLID.
- Utilisez les interfaces et/ou classes abstraites pour garantir un design modulaire et extensible.
- Il doit être facile d'ajouter de nouveaux types de stockage (par exemple, un stockage en mémoire ou un stockage dans une base de données) sans modifier le code existant.

## Exercice

1. **Single Responsibility Principle (SRP)** : Chaque classe doit avoir une seule responsabilité.
2. **Open/Closed Principle (OCP)** : Le code doit être ouvert à l'extension mais fermé à la modification.
3. **Liskov Substitution Principle (LSP)** : Les classes dérivées doivent être utilisables sans altérer le comportement.
4. **Interface Segregation Principle (ISP)** : Les interfaces ne doivent pas forcer les classes à implémenter des méthodes inutiles.
5. **Dependency Inversion Principle (DIP)** : Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau, mais des abstractions.

## Configuration et Installation

### Étape 1 : Initialiser le projet TypeScript

1. **Créer le projet et initialiser `package.json`** :

   ```bash
   mkdir Card
   cd Card
   npm init -y
