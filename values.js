(function(){
    if(document.getElementById('paulBlessedMenu')) return;
    var d=document;
    var m=d.createElement('div');
    m.id='paulBlessedMenu';
    m.style.cssText='position:fixed;top:20px;right:20px;width:400px;height:500px;background:#1a1a1a;color:#fff;border-radius:12px;box-shadow:0 0 20px rgba(0,0,0,0.8);z-index:999999;padding:15px;overflow:auto;font-family:sans-serif;';
    m.innerHTML=`
        <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:bold;font-size:18px;">PAUL BLESSED - RESPOSTAS</span>
            <button onclick="this.parentElement.parentElement.style.display='none'" style="background:#ff4d4d;border:none;color:#fff;padding:4px 10px;border-radius:5px;cursor:pointer;">X</button>
        </div>
        <hr style="border-color:#444;">
        <div id="paulBlessedContent" style="font-size:14px;line-height:1.5;">
        </div>
    `;
    d.body.appendChild(m);

    var container=d.getElementById('paulBlessedContent');
    container.innerHTML='';

    var questoes=d.querySelectorAll('.led-questao');
    questoes.forEach(function(q){
        var numeroElem=q.querySelector('.led-questao-fonte');
        var numero = numeroElem ? numeroElem.textContent.trim().split('.')[0] : '?';
        var correta=q.querySelector('.led-questao-resposta .correto .textoMultiplaEscolha');
        var letraInput=q.querySelector('.led-questao-resposta input');
        var letra = letraInput ? letraInput.id.split('_').pop() : '?';
        letra = String.fromCharCode(65 + parseInt(letra)); // 0 -> A, 1 -> B ...
        var texto = correta ? correta.textContent.trim() : 'Não encontrada';
        var div=document.createElement('div');
        div.style.marginBottom='10px';
        div.innerHTML='<strong>Questão '+numero+':</strong> Letra '+letra+'<br>'+texto;
        container.appendChild(div);
    });
})();
