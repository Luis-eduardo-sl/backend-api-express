import userModel from '../../models/userModel.js'
import zodErrorFormat from '../../helpers/zodErrorFormat.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET_KEY, TOKEN_EXPIRES_IN } from '../../config.js'
import sessionModel from '../../models/sessionModel.js'

const login = async (req, res) => {
    try{
        const {email, pass} = req.body

        // validando as entradas
        const result = userModel.validateUserToLogin({email, pass})
        if(!result.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(result.error)
            })
        }

        //obter os dados do usuário pelo email
        const userFound = await userModel.getByEmail(email)
        if(!userFound){
            return res.status(401).json({
                error: `Email ou senha inválida`
            })
        }

        //comparar se a senha informate bate com o hash salvo
        const passIsValid = await bcrypt.compare(pass, userFound.pass)
        if(!passIsValid){
            return res.status(401).json({
                error: `Email ou senha inválida`
            })
        }
        
        //gerar o access token
        const token = jwt.sign({ 
            id: userFound.id, 
            name: userFound.name
        },
        SECRET_KEY, {
            expiresIn: TOKEN_EXPIRES_IN
        })

        res.cookie('token', token, {httpOnly: true, sameSite:"None", secure: true, maxAge: 24 * 60 * 60 * 1000})

        let date = new Date()
        date.setHours(data.getHours())

        await sessionModel.create({
            userId: userFound.id,
            token
        })

        res.json({
            message: "User Logado!", 
            token, 
            user: {
                id: userFound.id,
                name: userFound.name,
                email: userFound.email,
                avatar: userFound.avatar
            }})
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default login