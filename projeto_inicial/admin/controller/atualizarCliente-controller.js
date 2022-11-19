import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location)
const id = pegaURL.searchParams.get('id')

console.log(id)

// let inputName = document.querySelector('[data-nome]')
// let inputEmail = document.querySelector('[data-email]')

let inputName = document.getElementById('nome')
let inputEmail = document.getElementById('email')

clienteService.detalhaCliente(id)
    .then((resposta) => {
        inputName.value = resposta.nome
        inputEmail.value = resposta.email
    })

    const formulario = document.querySelector('[data-form]')

    formulario.addEventListener('submit', async (e) => {

        e.preventDefault()

        if(inputName.value == '' || inputEmail.value == '')
         return alert('Preencha os campos para edição')

        const resp = await clienteService.atualizarCliente(id, inputName.value, inputEmail.value)
            if(!resp.ok)
            return window.location.href = '../telas/erro.html'
            
            window.location.href = '../telas/edicao_concluida.html'

    })


