const remove = (req, res) =>{
    const id = req.params.id
    res.json({message: 'Está é a rota Delete /user/:id ' + 'ID = ' +id })
}

export default remove