const router = require('express').Router()
const userService = require('../services/user')

router.post('/', async (req, res) => {
    let userCreated = await userService.createUser(req.body)
    return res.status(201).json({ userCreated })
})

router.get("/", async (req, res) => {
    let users = await userService.getUsers()
    return res.status(200).json({ users })
})


router.get('/:id', async (req, res) => {
    let user = await userService.getUserById(req.params.id)
    return res.status(200).json({ user })
})

router.put('/:id', async (req, res) => {
    let new_user = await userService.updateUser(userId = req.params.id, user = req.body)
    return res.status(200).json({new_user})
})

router.delete('/:id', async (req,res)=>{
    await userService.deleteUser(req.params.id)
    return res.status(204).json({})
})

module.exports = router;