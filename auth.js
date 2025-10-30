import passport from "passport";
import { Strategy as localStrategy} from "passport-local";
import Person from "./models/person.js";
passport.use(new localStrategy(async(uname,pword,done)=>{
    try{
        const user = await Person.findOne({username:uname})
    if(!user){
        return done(null,false,{mesg:'user not found'})
    }
    const ispassword = user.comparePassword(pword)
    if(ispassword){
        return done(null,user)
    }else{
        return done(null,false,{mesg:'user not found'})
    }
    }catch(err){
        return done(null,false,{mesg:'user not found'})
    }
}))
export default passport
