const getById = (req, res) =>{
    const id = req.params.id
    res.json({message: 'Está é a rota /user/:id ' + 'ID = ' +id })
}

export default getById