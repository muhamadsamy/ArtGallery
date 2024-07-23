const isAdmin = (req,res,next)=>{
    if(req.user&&req.user.isAdmin){
        return next();
    }
    return res.status(403).json({ message: "Access denied. Only admins can access this field !!" });
};

const isUser=(req,res,next)=>{
    if(req.user){
        return next();
    }
    return res.status(401).json({ message: "Unauthorized. Please log in to access this field!!" });
}

    export {isAdmin,isUser};
