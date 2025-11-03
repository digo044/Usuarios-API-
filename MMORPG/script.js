document.getElementById('carregar').addEventListener('click',carregarUsuario);

function carregarUsuario(){
    //requisição API 
    fetch('https://jsonplaceholder.typicode.com/users')

    //Conversor de resposta para json
    .then(response => response.json())

    //Tratamento de dados 
    .then(dados => {
    const container = document.getElementById('usuario');
    container.innerHTML= '';

        dados.forEach(usuario  => {
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML=`

        <h3>${usuario.name}</h3>
        <p>email:${usuario.email}</p> 
        <p>Endereço:${usuario.address.city}</p>

        `;
        container.appendChild(card);


    })

  })

}