import http from 'node:http'

const server = http.createServer((request, response) => {
    return response.end('Hello World!')
})

server.listen(3333);

// criamos npm init -y, para criar o package.json, esse arquivo armazena as depedencias que o codigo tem.
// 'node:http' colocamos node a frente para destacar que e um modulo interno do node.
// o nodejs por padrao nao fornece suporte ao ESModules => import/export, 
// usamnos o 'Common JS = require'.