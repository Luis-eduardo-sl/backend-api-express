import productModel from "../../models/productModel.js";

const listAll = async (req, res) =>{

    try{
        const product = await productModel.getAll()
        return res.json({
            sucess: 'Produto listados com sucesso!',
            product
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!',
            product
        })
    }
};

export default listAll