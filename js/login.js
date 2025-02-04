//O querySelector buscará o elemento definido dentro de cada 
//parênteses e assim ativar em html o login.
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

//Valida a inserção do nome que tem mais de 3 letras.
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  //Registra o valor atual do elemento de entrada(input).
  event.preventDefault();
  //Para impedir que um evento padrão ocorra.

  localStorage.setItem('login-form', input.value);
  window.location = 'pages/busca.html';
}

input.addEventListener('input', validateInput);
//addEventListener chama o evento ao clicar no botão.
form.addEventListener('submit', handleSubmit);