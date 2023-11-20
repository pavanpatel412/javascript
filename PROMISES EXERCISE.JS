let logine_logout = new Promise((success,reject)=>{
    const login = true;
    const logout = false;
 if (login == logout){
    success("enter your login credentials:",login)
 }
 else{
    reject("check your credentials:",logout)
    
 }
});
logine_logout
.then((self)=>{
    console.log("u are authorized user",self)
})
.catch((durga)=>{
    console.log("u not authorized user:",durga)
});