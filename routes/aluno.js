import express from 'express'
import AlunoController from '../controller/AlunoController.js'
const router = express.Router()

router.get('/aluno', AlunoController.index)
router.get('/aluno/cadastrar', AlunoController.cadastrar )
router.post('/aluno/salvar', AlunoController.salvar)

export default router