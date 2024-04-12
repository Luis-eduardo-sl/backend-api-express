import userModel from "../../models/userModel.js";

const update = async (req, res) =>{
    try{
        const id = req.params.id
        const users = await userModel.update(+id, req.body)
        
        return res.json({
            success: 'Usuarios atualizado com sucesso!',
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default update