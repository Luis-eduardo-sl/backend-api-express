import userModel from "../../models/userModel.js";
import zodErrorFormat from "../../helpers/zodErrorFormat.js"

const create = async (req, res) =>{

    try{
        const result = userModel.validateUserToCreat(req.body)

        if(!result.success){
            // const errorFormated = result.error.format()
            // delete errorFormated._errors 
            // errorFormated.name ? errorFormated.name = errorFormated.name._errors : null
            // errorFormated.email ? errorFormated.email = errorFormated.email._errors : null
            // errorFormated.avatar ? errorFormated.avatar = errorFormated.avatar._errors : null
            return res.status(400).json({
                error: 'Dados de cadastro invalido',
                fields: zodErrorFormat(result.error)
            })
        }
        const user = await userModel.create(req.body)

        return res.json({
            sucess: 'Usuarios criado com sucesso!',
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