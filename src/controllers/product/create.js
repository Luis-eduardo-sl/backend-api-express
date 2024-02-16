const create = (req, res) =>{
    const product = req.body
    res.json({message: 'Está é a rota POST /product/'})
}

export default create