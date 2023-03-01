# Verifiche-Docenti
Per avviare, eseguire il comando "docker compose up" nel terminale. Al termine, rendere le porte pubbliche ed aprirle.
Se la registrazione dovesse avere qualche problema, è possibile passare da una pagina all'altra con le route, si avrà comunque accesso al resto delle pagine. Aggiungere alla porta 8080 "/login" per accedere, "/register" per registrarsi, "/docenti" per visualizzare la lista di docenti e "/verifiche" per visualizzare la lista di verifiche.

Se ci sono errori "permission denied", aprire il terminale da "node_modules" e inserire i seguenti comandi:
- cd ..
- sudo chmod 777 node_modules/
- npm i
