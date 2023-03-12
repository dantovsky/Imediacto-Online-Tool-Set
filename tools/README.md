# Purge CSS

Ao desenvolver uma nova tool, pode-se usar o CSS contido em `shared/css/boot.css`.  
Ao fazer o purge CSS, é enviado para o `dist/boot.css` somente os estilos que foram utilizados, reduzindo assim o CSS final, pois elimina todo o CSS desnecessário.

Como usar o Purge CSS?
```
npm install
```

Após finalizar o dev, rodar o comando:
```
npm run purge
```

# Git command

```
git add . && git commit -m "Updating Listing and app." && git push
```