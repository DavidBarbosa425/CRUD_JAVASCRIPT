import { clienteService } from "../service/cliente-service.js"

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo =
    `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
    }

    const tabela = document.querySelector('[data-tabela]')

    const listarClientes = async () => {
        try {
            
            const data = await clienteService.listClientes()
   
                data.forEach(element => {
                    tabela.appendChild(criaNovaLinha(element.nome,element.email, element.id)) 
                })
        } catch (error) {
            
            return window.location.href = '../telas/erro.html'
        }
        
    }
    listarClientes()

    tabela.addEventListener('click', async (e) => {
    
        try {

            let isBotaoExcluir = e.target.className === 'botao-simples botao-simples--excluir'
            if(isBotaoExcluir) {
             const linhaCliente = e.target.closest('[data-id]')
             let id = linhaCliente.dataset.id
    
             await clienteService.excluirClientes(id)
                linhaCliente.remove()
    
            }
            
        } catch (error) {
            return window.location.href = '../telas/erro.html'
        }

     })

        //browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html