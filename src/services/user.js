const User = require('../models/user')

createUser= async (user)=>{
    let userInstance = new User(user)
    userInstance.save()
}

getUsers = async () =>{
    users = await User.find({})
    return users
}

getUserById = async (userId) =>{
    user = await User.findById(userId).exec()
    return user
}

updateUser = async(userId, user) =>{
    new_user = await User.findByIdAndUpdate(userId, user,{new: true})
    return new_user
}

deleteUser = async (userId) =>{
    return await User.findByIdAndDelete(userId)
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}