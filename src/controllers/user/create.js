import userModel from "../../models/userModel.js";

const create = async (req, res) =>{

    try{
        const users = await userModel.create(req.body)
        return res.json({
            sucess: 'Usuarios criado com sucesso!',
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default create