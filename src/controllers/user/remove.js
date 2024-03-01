import userModel from "../../models/userModel.js";

const remove = async (req, res) =>{
    try{
        const id = req.params.id
        const users = await userModel.remove(+id)
        
        return res.json({
            sucess: 'Usuarios apagado com sucesso!',
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default remove