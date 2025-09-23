(function(){
  if(document.getElementById('paulBlessedMenu')) return;

  const style = document.createElement('style');
  style.innerHTML = `
    #paulBlessedMenu {
      position: fixed;
      top: 50px;
      right: 20px;
      width: 360px;
      max-height: 500px;
      background: linear-gradient(135deg,#1e3c72,#2a5298);
      color: #fff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      overflow: hidden;
      z-index: 999999;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      user-select: none;
    }
    #paulBlessedHeader {
      padding: 10px;
      background: rgba(0,0,0,0.25);
      cursor: move;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #paulBlessedHeader span {
      cursor: pointer;
      font-size: 18px;
    }
    #paulBlessedContent {
      padding: 10px;
      overflow-y: auto;
      flex-grow: 1;
      font-size: 14px;
    }
    .paulQuestao {
      margin-bottom: 10px;
      padding: 5px;
      background: rgba(255,255,255,0.1);
      border-radius: 6px;
    }
    .paulQuestao p {
      margin: 0 0 3px 0;
    }
    .paulQuestao .letra {
      font-weight: bold;
      color: #ffd700;
    }
  `;
  document.head.appendChild(style);

  const menu = document.createElement('div');
  menu.id = 'paulBlessedMenu';

  const header = document.createElement('div');
  header.id = 'paulBlessedHeader';
  header.innerHTML = `PAUL BLESSED - RESPOSTAS <div><span id="paulBlessedToggle">−</span> <span id="paulBlessedClose">×</span></div>`;

  const content = document.createElement('div');
  content.id = 'paulBlessedContent';

  const questoes = document.querySelectorAll('.led-questao');
  if(questoes.length === 0){
    content.innerHTML = '<p>Nenhuma questão encontrada nesta página.</p>';
  }else{
    questoes.forEach((q, idx)=>{
      const numeroEl = q.querySelector('.led-questao-fonte');
      const numero = numeroEl ? numeroEl.textContent.trim() : idx+1;

      const corretaEl = q.querySelector('.led-questao-resposta .correto');
      let letra = 'Não encontrada';
      if(corretaEl){
        const id = corretaEl.querySelector('input')?.id;
        if(id){
          const partes = id.split('_');
          const ultima = partes[partes.length-1];
          letra = String.fromCharCode(65 + parseInt(ultima));
        }
      }

      const textoEl = corretaEl?.querySelector('.textoMultiplaEscolha');
      const texto = textoEl ? textoEl.textContent.trim() : '';

      const div = document.createElement('div');
      div.className = 'paulQuestao';
      div.innerHTML = `<p>Questão ${numero}: <span class="letra">${letra}</span></p><p>${texto}</p>`;
      content.appendChild(div);
    });
  }

  menu.appendChild(header);
  menu.appendChild(content);
  document.body.appendChild(menu);

  document.getElementById('paulBlessedToggle').onclick = function(){
    if(content.style.display==='none'){
      content.style.display='block';
      this.textContent='−';
      menu.style.height='auto';
    }else{
      content.style.display='none';
      this.textContent='+';
      menu.style.height='40px';
    }
  };

  document.getElementById('paulBlessedClose').onclick = function(){
    menu.remove();
  };

  let isDragging=false, offsetX, offsetY;
  header.onmousedown=function(e){
    isDragging=true;
    offsetX=e.clientX - menu.offsetLeft;
    offsetY=e.clientY - menu.offsetTop;
  };
  document.onmousemove=function(e){
    if(isDragging){
      menu.style.top=(e.clientY-offsetY)+'px';
      menu.style.left=(e.clientX-offsetX)+'px';
      menu.style.right='auto';
    }
  };
  document.onmouseup=function(){ isDragging=false; };
})();
