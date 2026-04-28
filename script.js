document.addEventListener('DOMContentLoaded', function () {

    const search = document.getElementById('search');
  
    search.addEventListener('input', function () {
      const value = search.value.toLowerCase();
      const projetos = document.querySelectorAll('.card');
  
      projetos.forEach(projeto => {
        const texto = projeto.innerText.toLowerCase();
  
        projeto.parentElement.style.display =
          texto.includes(value) ? 'block' : 'none';
      });
    });
  
    const form = document.getElementById('formulario');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nome = document.querySelector('#formulario input').value.trim();
      const mensagem = document.querySelector('#formulario textarea').value.trim();
  
      if (!nome || !mensagem) {
        alert('Preencha todos os campos!');
        return;
      }
  
      const texto = `Olá, me chamo ${nome}. ${mensagem}`;
      const numero = "5588996752812";
  
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
      window.open(url, '_blank');
    });
  
  });