import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')
// const nome = document.getElementById('nome')
// const email = document.getElementById('email')


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    debugger
    const nome = e.target.querySelector('[data-nome]').value
    const email = e.target.querySelector('[data-email]').value
    
    clienteService.criarClientes(nome, email)
    .then((resp) => {
        if(!resp.ok)
            return window.location.href = '../telas/erro.html'
            
        window.location.href = '../telas/cadastro_concluido.html'
    })
})

        //browser-sync start --server --file . --host --port 5000 --startPath admin/telas/cadastra_cliente.html