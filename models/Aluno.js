import banco from '../config/banco.js'

const Aluno = banco.sequelize.define('alunos',{
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    email:{
        type: banco.Sequelize.STRING(100),
        unique: true,
        allowNull: false
    }, 
    telefone:{
        type: banco.Sequelize.STRING(20),
        allowNull: false
    },
    situacao:{
        type: banco.Sequelize.STRING(20),
        allowNull: false
    }
})

Aluno.sync()

export default Aluno