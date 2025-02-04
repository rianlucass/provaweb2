import Sequelize from "sequelize";

const NOME_BANCO = 'prova'
const USER = 'root'
const PASSWORD = ''
const HOST = 'localhost'

const sequelize = new Sequelize(
    NOME_BANCO,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.error(erro + ', erro na conexão')
})

export default {Sequelize, sequelize}