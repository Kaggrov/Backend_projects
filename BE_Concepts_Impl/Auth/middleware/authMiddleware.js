import jwt from 'jsonwebtoken';

function verifyToken(req,res,next) {

    const token = req.header('Authorization');
    console.log(token)

    if(!token)
        return res.status(400).json({error:'Token not present'});

    try{
        const decoded = jwt.verify(token,'karttekay');
        req.userId = decoded.userId;
        next();
    }
    catch(error){
        res.status(401).json({error:'Access denied',description:error})
    }
}

export default verifyToken;