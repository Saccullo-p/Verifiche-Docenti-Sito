# Verifiche-Docenti
Per avviare, eseguire il comando "docker compose up" nel terminale. Al termine, rendere le porte pubbliche ed aprirle, infine copiare l'URL della porta 5000 e incollarlo nel file /sito-verifiche-docenti/src/app/link.ts al posto del link precedente.
Se la registrazione dovesse avere qualche problema, è possibile passare da una pagina all'altra con le route, si avrà comunque accesso al resto delle pagine. Aggiungere alla porta 4200 "/login" per accedere, "/register" per registrarsi, "/docenti" per visualizzare la lista di docenti e "/verifiche" per visualizzare la lista di verifiche.

Se ci sono errori "permission denied", aprire il terminale da "node_modules" e inserire i seguenti comandi:
- cd ..
- sudo chmod 777 node_modules/
- npm i
