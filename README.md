# 📘 Paul Blessed - Respostas ENEM

Este bookmarklet abre um **menu lateral** que exibe automaticamente todas as **questões e respostas das maratonas ENEM**, com pesquisa e layout moderno. Ideal para navegar rapidamente pelas questões e respostas.

---

## 🔹 Pré-requisitos

- Navegador moderno (Chrome, Edge, Firefox).  
- Acesso à página do ENEM onde o bookmarklet será executado.  

---

## 🔹 Passo 1: Criar o bookmarklet

1. Abra o navegador.  
2. Abra a barra de favoritos (**Ctrl+Shift+B** ou equivalente).  
3. Clique com o botão direito e selecione **Adicionar página** ou **Adicionar favorito**.  
4. Dê um nome, por exemplo: `Paul Blessed`.  
5. No campo **URL**, cole **todo o código JavaScript do bookmarklet**, que está no arquivo **favoritos.js**, ou copie esse codigo abaixo:

```javascript
javascript:(()=>{var s=document.createElement('script');s.src='https://daerkerofc.github.io/ProjectEnemMG/favoritos.js?ver='+Date.now();document.body.appendChild(s);})();
```

BOM USO A TODOS! 
By: Paulinho (MikaVirus)
