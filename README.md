# TP3

## Sujet

1. Transformer la méthode `addBook(book: Book): void` du `BookService` pour gérer les doublons
2. Mettre en place un composant `book-detail` qui récupèrera l'id du livre via l'URL
3. Mettre en place le routing qui va gérer les routes suivantes :
    - / => affichage de la page d'accueil vide
    - /books => affichage de la liste des livres
    - /book/:id => affichage du détail du livre passé en paramètre
    - /book/add => affichage du formulaire d'ajout d'un livre
4. En plus du stub, charger la liste des livres via l'URL suivante : https://664ba07f35bbda10987d9f99.mockapi.io/api/books
5. A la validation du formulaire, faire un ajout via l'API précédente.

## Annexes

1. https://angular.dev/guide/routing/common-router-tasks
2. https://docs.angular.lat/guide/http
