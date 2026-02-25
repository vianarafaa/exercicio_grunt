const botao = document.getElementById('sortear')
const slots = document.querySelectorAll('.time-pokemon li')

botao.addEventListener('click', sortearTime)

async function sortearTime() {
    for (let i = 0; i < slots.length; i++) {
        const id = Math.floor(Math.random() * 151) + 1

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const dados = await resposta.json()

        const imagem = dados.sprites.other['official-artwork'].front_default

        slots[i].innerHTML = `<img src="${imagem}" alt="${dados.name}">`
    }
}
