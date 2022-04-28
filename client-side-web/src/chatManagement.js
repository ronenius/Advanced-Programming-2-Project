import timeWriter from "./timeWriter.js"
import addMessage from "./AddMessage";
import "./speechBubble.css";
function displayChat(contact) {
    let PlaceHolder = document.getElementById("chatPlaceHolder");
    PlaceHolder.innerHTML="";
    console.log(contact);
    for (let i = 0; i < contact.chat.length; i++) {
        console.log(contact);
        PlaceHolder.innerHTML+=addMessage(contact.chat[i],contact.friend.name, contact.friend.username, i);
        console.log("added");
    }
    PlaceHolder.scrollTo(0,PlaceHolder.scrollHeight);
}
function chatElement(s, to) {
    var time = new Date();
    var x = {
        contance : s,
        hour:time.getHours(),
        minute:time.getMinutes(),
        day:time.getDate(),
        month:time.getMonth() + 1,
        year:time.getFullYear(),
        sent:to
    };
    return x;
}
function updateTime(friend) {
    let time = document.getElementById(friend.friend.username+"Time");
    time.style.fontSize = "100%";
    time.innerHTML=timeWriter.getTime(friend.chat[friend.chat.length-1])+"<br>"+timeWriter.getDate(friend.chat[friend.chat.length-1]);
}
export default {displayChat, chatElement, updateTime};