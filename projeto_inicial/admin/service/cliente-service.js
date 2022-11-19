// forma antiga

// const listClientes = () => {
//     const promise = new Promise((resolve, reject) => {

//         const http = new XMLHttpRequest()
//         http.open('GET', 'http://localhost:3000/profile')
//         http.onload = () => {
//             if(http.status >= 400) {
//                 reject(JSON.parse(http.response))
//             }
//             else {
//                 resolve(JSON.parse(http.response))
//             }
//         }
//         http.send()
//     }) 
//     console.log(promise)
//     return promise
//     return fetch(`http://localhost:3000/profile`)
//         .then(resposta => {
//             return resposta.json()
//         })
// }


const listClientes = () => {

    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            return resposta.json()
        })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const criarClientes = (nome, email) => {

    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta
    })
}

const excluirClientes = (id) => {
    
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
})

}

const atualizarCliente = (id, nome, email) => {

    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
}




export const clienteService = {
    listClientes,
    criarClientes,
    excluirClientes,
    detalhaCliente, 
    atualizarCliente
}




//json-server --watch db.json