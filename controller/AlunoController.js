import Aluno from '../models/Aluno.js'

class AlunoController{
    index = async function (req, res) {
        const alunos = await Aluno.findAll()
        res.render('aluno/index', {alunos: alunos})
    }

    cadastrar = function(req, res){
        res.render('aluno/cadastrar')
    }

    salvar = function(req, res){
        let nota = req.body.nota
        let situacaoAluno

        if(nota >= '7'){
            situacaoAluno = 'aprovado'
        } else{
            situacaoAluno = 'reprovado'
        }

        let aluno = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            situacao: situacaoAluno
        }

        Aluno.create(aluno).then(function(){
            res.redirect('/aluno')
        })
    }
}

export default new AlunoController()