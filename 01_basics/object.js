const mysym = Symbol("key1")
const jsuser = {
    name:"karan",
    "full name":"karan nanwani",
    [mysym] : "mykey1",
    age:18,
    location:"jaipur",
    email:"nanwanik21@gmail.com",
    isloggedin :false,
    lastlogindays:["monday","saturday"]
}

//console.log(jsuser[mysym]);
//console.log(typeof jsuser.mysym);
jsuser.email ="karannanwani57@gmail.com"
//Object.freeze(jsuser)
//console.log(jsuser);
jsuser.Greeting = Function()
   { console.log("hello js user");}  
jsuser.Greetingtwo = Function() 

    {console.log(`hello js user,${this.name}`);
}
console.log(jsuser.Greeting());
console.log(jsuser.Greetingtwo());


