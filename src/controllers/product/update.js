import productModel from "../../models/productModel.js";

const update = async (req, res) =>{
    try{
        const id = req.params.id
        const product = await productModel.update(+id, req.body)
        
        return res.json({
            sucess: 'Produto atualizado com sucesso!',
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default update