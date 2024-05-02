import sessionModel from "../../models/sessionModel.js"

const refreshToken = async (req, res) => {
    try{
        res.json({message: "Logout"})
        res.clearCookie('token', { httpOnly: true, sameSite: 'None', secure: true })

        // limpar dados bd
        await sessionModel.remove(req.userLogged.id, req.userLogged.token)


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}
export default refreshToken