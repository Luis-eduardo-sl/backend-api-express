import  express  from 'express';
import logger from '../middleware/logger.js'

const router = express.Router()

router.get('/', (req, res) =>{
    res.json({message: 'Está é a rota /user/'})
});


router.get('/:id', (req, res) =>{
    const id = req.params.id
    res.json({message: 'Está é a rota /user/:id ' + 'ID = ' +id })
})

router.post('/', (req, res) =>{
    const user = req.body
    res.json({message: 'Está é a rota POST /user/', user})
});

router.put('/', (req, res) =>{
    res.json({message: 'Está é a rota put /user/'})
});


router.delete('/:id', (req, res) =>{
    const id = req.params.id
    res.json({message: 'Está é a rota Delete /user/:id ' + 'ID = ' +id })
})

export default router