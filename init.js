const mongoose= require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats=
 [{
     from:"Zeba",
      to:"Arif",
     message:"leave Muskan and be my Bf",
     created_at: new Date()
 }, 
 {
     from:"Aman",
     to:"Arif",
     message:"Check my result",
     created_at: new Date()
 },
 {
     from:"Sameer",
     to:"Arif",
     message:"let's play the game",
     created_at: new Date()
 },
 {
     from:"Kaif",
     to:"Sameer",
     message:"are you fine",
     created_at: new Date()
 },
 {
     from:"Sameer",
     to:"Kaif",
     message:"the game is not running in my phone",
     created_at: new Date()
 },
 {
    from:"Aman",
    to:"Kaif",
    message:"give me party",
    created_at: new Date()
 },
 {
     from:"Aman",
     to:"Sameer",
     message:"how thin you are",
     created_at: new Date()
 },
  {
     from:"sameer",
     to:"friends",
     message:"i am not able to play game because it is not running in my phone you guy's play",
     created_at: new Date()
}];

// Chat.insertMany(allChats);

module.exports = allChats; // Export the allChats array

// chat1.save()
// .then((res)=>{
//     console.log(res)
// })