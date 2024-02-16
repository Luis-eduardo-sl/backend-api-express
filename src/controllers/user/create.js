const create = (req, res) =>{
    const user = req.body
    res.json({message: 'Está é a rota POST /user/'})
}

export default create