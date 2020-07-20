
# serverless-api
Serverless api desenvolvida durante lab do bootcamp desenvolvimento com node.js da Digital Inovation One.
O projeto foi originalmente criado por Igor Halfeld -> https://github.com/IgorHalfeld

## Foram utilizados
 - Node.js (v12.17.0)
 - Mongodb (CosmosDb da Azure) 
 - Azure Functions Core Tools

## Executando o projeto localmente
Clone o repositório em sua máquina e execute o comando `npm install`
para instalar todas as dependências especificadas no `package.json`. 
Instale também  o Azure Functions Core Tools globalmente com o comando `npm install -g azure-functions-core-tools@3`. 
Por fim, crie um arquivo `.env` e insira as credenciais necessárias para realizar a conexão com o Mongodb

    DB_URL=mongodb://suaUrl
    DB_NAME=seuDbName

   Para iniciar o servidor (mesmo sendo serverless né :/) use o comando `func host start` 
