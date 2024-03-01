import productModel from "../../models/productModel.js";

const remove = async (req, res) =>{
    try{
        const id = req.params.id
        const product = await productModel.remove(+id)
        
        return res.json({
            sucess: 'Produto apagado com sucesso!',
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default remove