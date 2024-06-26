import userModel from "../../models/userModel.js";

const listAll = async (req, res) =>{

    try{
        const users = await userModel.getAll()
        return res.json({
            success: 'Usuarios listados com sucesso!',
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!',
            users
        })
    }
};

export default listAll