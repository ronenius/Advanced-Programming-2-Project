import timeWriter from "./timeWriter.js"
import addMessage from "./AddMessage";
import padding from "./chatPadding"
import "./speechBubble.css";
import getLastMessage from "./lastMessage.js";

function displayChat(contact) {
    let PlaceHolder = document.getElementById("chatPlaceHolder");
    PlaceHolder.innerHTML="";
    for (let i = 0; i < contact.chat.length; i++) {
        PlaceHolder.innerHTML+=addMessage(contact.chat[i],contact.friend.name, contact.friend.username, i);
    }
    padding.addPadding(PlaceHolder);
    PlaceHolder.scrollTo(0,PlaceHolder.scrollHeight);
}
function chatElement(s, to, messageType) {
    var time = new Date();
    var x = {
        contance : s,
        hour:time.getHours(),
        minute:time.getMinutes(),
        day:time.getDate(),
        month:time.getMonth() + 1,
        year:time.getFullYear(),
        sent:to,
        type:messageType
    };
    return x;
}

function updateTime(friend) {
    let time = document.getElementById(friend.friend.username + "Time");
    time.style.fontSize = "100%";
    time.innerHTML = timeWriter.getTime(friend.chat[friend.chat.length - 1]) + "<br>" + timeWriter.getDate(friend.chat[friend.chat.length - 1]);
    let lastMessage = document.getElementById(friend.friend.username + "lastmessage");
    lastMessage.innerHTML = getLastMessage(friend.chat);
}

export default { displayChat, chatElement, updateTime };