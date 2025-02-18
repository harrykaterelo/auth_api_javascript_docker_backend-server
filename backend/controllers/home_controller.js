exports.homeController = async (req,res)=>{
    const user = req.user;

    res.status(200).json({
        'message':'Welcome to the app'+user.name
    })
}

