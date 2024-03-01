import productModel from "../../models/productModel.js";

const create = async (req, res) =>{

    try{
        const products = await productModel.create(req.body)
        return res.json({
            sucess: 'Produto criado com sucesso!',
            products
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default create