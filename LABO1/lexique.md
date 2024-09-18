Voici une présentation de quelques **codes de statut HTTP** et des **méthodes HTML** (ou verbes HTTP utilisés dans les formulaires HTML). Ces concepts sont essentiels pour comprendre la communication entre un navigateur et un serveur, ainsi que les interactions avec les formulaires HTML.

---

## 1. **Les codes de statut HTTP**

Les codes de statut HTTP sont renvoyés par le serveur pour indiquer si une requête HTTP a été traitée avec succès ou si une erreur est survenue. Ils sont divisés en cinq catégories principales :

### 1xx : **Informations**
Ces codes indiquent que la requête est en cours de traitement.

- **100 Continue** : Le client doit continuer la requête.
- **101 Switching Protocols** : Le serveur change de protocole sur demande du client.

### 2xx : **Succès**
Ces codes indiquent que la requête a été reçue, comprise et acceptée avec succès.

- **200 OK** : La requête a réussi, et le contenu demandé est renvoyé.
    - Exemple : Accéder à une page web avec succès.

- **201 Created** : La requête a réussi, et une nouvelle ressource a été créée en conséquence.
    - Exemple : Création d'une nouvelle ressource via une API.

- **204 No Content** : La requête a réussi, mais aucune réponse avec contenu n'est renvoyée.
    - Exemple : Mise à jour d'une ressource sans retour de contenu.

### 3xx : **Redirections**
Ces codes indiquent que le client doit effectuer une autre action pour terminer la requête.

- **301 Moved Permanently** : La ressource demandée a été déplacée de manière permanente à une nouvelle URL.
    - Exemple : Changement permanent d'adresse d'une page.

- **302 Found** : La ressource demandée a temporairement été déplacée à une autre URL.
    - Exemple : Redirection temporaire d'une page.

- **304 Not Modified** : La ressource n’a pas été modifiée depuis la dernière requête.
    - Exemple : Utilisé avec la mise en cache des navigateurs pour indiquer que le contenu local est toujours valide.

### 4xx : **Erreurs du client**
Ces codes indiquent que la requête contient une erreur de la part du client.

- **400 Bad Request** : La requête est mal formée.
    - Exemple : Envoyer des données incorrectes via un formulaire.

- **401 Unauthorized** : L'authentification est requise pour accéder à la ressource.
    - Exemple : Tentative d'accès à une page nécessitant une connexion.

- **403 Forbidden** : Le serveur refuse d'exécuter la requête.
    - Exemple : Tentative d'accès à une page sans autorisation adéquate.

- **404 Not Found** : La ressource demandée est introuvable.
    - Exemple : Accès à une URL qui n'existe pas.

### 5xx : **Erreurs du serveur**
Ces codes indiquent que le serveur a rencontré un problème lors du traitement de la requête.

- **500 Internal Server Error** : Une erreur interne s’est produite sur le serveur.
    - Exemple : Problème d'exécution d'un script sur le serveur.

- **502 Bad Gateway** : Le serveur a reçu une réponse invalide d’un autre serveur en amont.
    - Exemple : Un serveur proxy qui renvoie une mauvaise réponse.

- **503 Service Unavailable** : Le serveur est temporairement indisponible.
    - Exemple : Le serveur est en maintenance ou surchargé.

---

## 2. **Méthodes HTML (Verbes HTTP)**

Les méthodes (ou verbes) HTTP définissent l'action que le client (navigateur) souhaite réaliser sur une ressource lors de l'envoi d'une requête HTTP. Ces méthodes sont généralement utilisées dans les formulaires HTML pour interagir avec un serveur.

### 1. **GET**
- **Description :** Utilisé pour récupérer des informations à partir du serveur. Les données envoyées avec cette méthode sont incluses dans l'URL (query string).
- **Exemple d'utilisation :**
  ```html
  <form method="GET" action="/rechercher">
      <input type="text" name="query" placeholder="Rechercher...">
      <button type="submit">Envoyer</button>
  </form>
  ```
    - **Résultat :** Le navigateur envoie une requête GET avec l'URL modifiée pour inclure les paramètres de la recherche (par ex. `/rechercher?query=mot`).

### 2. **POST**
- **Description :** Utilisé pour envoyer des données au serveur, telles que des informations d’un formulaire. Contrairement à GET, les données sont envoyées dans le corps de la requête, ce qui permet de transmettre des informations plus volumineuses et sensibles.
- **Exemple d'utilisation :**
  ```html
  <form method="POST" action="/soumettre">
      <input type="text" name="nom" placeholder="Nom">
      <input type="text" name="email" placeholder="Email">
      <button type="submit">Soumettre</button>
  </form>
  ```
    - **Résultat :** Les informations "nom" et "email" sont envoyées au serveur via une requête POST, et ne sont pas visibles dans l'URL.

### 3. **PUT**
- **Description :** Utilisé pour mettre à jour une ressource existante sur le serveur avec des données spécifiques. Moins couramment utilisé dans les formulaires HTML, mais fréquent pour les API REST.
- **Exemple d'utilisation :**
  ```html
  <form method="POST" action="/update" onsubmit="this._method.value='PUT';">
      <input type="hidden" name="_method" value="PUT">
      <input type="text" name="nom" value="John">
      <button type="submit">Mettre à jour</button>
  </form>
  ```
    - **Résultat :** Les données envoyées via PUT mettent à jour la ressource ciblée sur le serveur.

### 4. **DELETE**
- **Description :** Utilisé pour supprimer une ressource sur le serveur. Comme PUT, DELETE est principalement utilisé dans les API REST et non dans les formulaires HTML traditionnels.
- **Exemple d'utilisation :**
  ```html
  <form method="POST" action="/supprimer" onsubmit="this._method.value='DELETE';">
      <input type="hidden" name="_method" value="DELETE">
      <button type="submit">Supprimer</button>
  </form>
  ```
    - **Résultat :** La ressource spécifiée dans l'URL est supprimée par une requête DELETE envoyée au serveur.

### 5. **PATCH**
- **Description :** Utilisé pour appliquer une mise à jour partielle à une ressource. Comme PUT, cette méthode est principalement utilisée dans les API REST.
- **Exemple d'utilisation :**
  ```html
  <form method="POST" action="/modifier" onsubmit="this._method.value='PATCH';">
      <input type="hidden" name="_method" value="PATCH">
      <input type="text" name="nom" value="John">
      <button type="submit">Modifier</button>
  </form>
  ```
    - **Résultat :** Applique une mise à jour partielle sur une ressource sans la remplacer complètement.

---

### Autres méthodes HTTP (moins courantes dans les formulaires HTML) :
- **HEAD :** Similaire à GET, mais ne renvoie que les en-têtes et non le corps de la réponse.
- **OPTIONS :** Utilisé pour décrire les méthodes HTTP supportées par le serveur pour une ressource spécifique.
- **CONNECT :** Utilisé pour établir un tunnel de communication (ex. pour une connexion HTTPS).
- **TRACE :** Utilisé pour diagnostiquer la connexion entre le client et le serveur.

---

### Conclusion

Les **codes de statut HTTP** et les **méthodes HTML** jouent un rôle fondamental dans la communication entre les navigateurs et les serveurs web. Les codes de statut renseignent sur le succès ou l’échec des requêtes, tandis que les méthodes HTTP définissent l’action souhaitée lors de l’envoi des requêtes (GET, POST, etc.).

En comprenant ces mécanismes, un étudiant débutant pourra mieux appréhender le fonctionnement d'une application web et les interactions avec les serveurs.