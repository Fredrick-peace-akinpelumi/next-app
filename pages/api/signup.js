import connection from '../../database/connection'
import userModel from '../../database/models'
connection()
export default function handler(req,res){
    // res.send("hello welcome")
    console.log(req.method);
    if (req.method === "GET"){ 
        res.send("hello welcome")
    }else if (req.method === "POST"){ 
        console.log(req.body);
        let form = new userModel(req.body)
        form.save((err)=>{
            if (err) {
                res.json({message:"user not saved", status:false})
            } else {
                res.json({message:"user signup successfully", status:false})
                
            }
        })
    }
}