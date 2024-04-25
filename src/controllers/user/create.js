import userModel from "../../models/userModel.js";
import zodErrorFormat from "../../helpers/zodErrorFormat.js"
import bcrypt from 'bcrypt'

const create = async (req, res) =>{

    try{
        const result = userModel.validateUserToCreat(req.body)

        if(!result.success){
            return res.status(400).json({
                error: 'Dados de cadastro invalido',
                fields: zodErrorFormat(result.error)
            })
        }
        result .data.pass = await bcrypt.hash(result.data.pass, 10)
        const user = await userModel.create(result.data)

        return res.json({
            success: 'Usuarios criado com sucesso!',
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Opss erro no servidor, tente novamente!'
        })
    }
};

export default create