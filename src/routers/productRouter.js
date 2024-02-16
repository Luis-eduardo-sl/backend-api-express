import  express  from 'express';

const router = express.Router()


router.get('/', (req, res) =>{
    res.json({message: 'Está é a rota /product/'})
});


router.get('/:id', (req, res) =>{
    const id = req.params.id
    res.json({message: 'Está é a rota /product/:id ' + 'ID = ' +id })
})

router.post('/', (req, res) =>{
    res.json({message: 'Está é a rota POST /product/'})
});

router.put('/', (req, res) =>{
    res.json({message: 'Está é a rota put /product/'})
});


router.delete('/:id', (req, res) =>{
    const id = req.params.id
    res.json({message: 'Está é a rota Delete /product/:id ' + 'ID = ' +id })
})

export default router