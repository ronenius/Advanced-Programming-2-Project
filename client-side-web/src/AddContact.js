import users from './DataBase.js';
import { connect } from './DataBase';
import userIdx from './UserIdx';
import initContact from './InitializeContacts.js';
import getLastMessage from './lastMessage.js';

function addContactElement(friend) {
    return "<input type=\"radio\" class=\"d-block btn-check\" name=\"btnradio\" id=\"" + friend.friend.username + "\" autocomplete=\"off\">\n<label class=\"btn btn-outline-primary\" for=\"" + friend.friend.username + "\"><div class=\"row\"><div class=\"col-2\"><img src=\"" + friend.friend.picture + "\" class=\"rounded-circle\" width=\"40px\" height=\"40px\" style=\"object-fit: cover;\"></div><div class=\"col\"><div class=\"container\"><div class=\"row\" style=\"display: flex; justify-content: center\">" + friend.friend.name + "</div><div id=\"" + friend.friend.username + "lastmessage\" class=\"row\" style=\"display: flex; justify-content: center\">" + getLastMessage(friend.chat) + "</div></div></div><div class=\"col-2\" id=\"" + friend.friend.username + "Time\"></div></div></label>\n";
}
const addContactButton = function() {
    let friends = users[userIdx.value].friends;
    let input1 = document.getElementById("inputAddContact");
    for (let i = 0; i < friends.length; i++) {
        if (input1.value===friends[i].username) {
            alert("Contact already exists");
            input1.value="";
            return;
        }
    }
    let idx = -1;
    for (let i = 0; i < users.length; i++) {
        if (input1.value===users[i].username) {
            idx = i;
            break;
        }
    }
    if (idx === -1) {
        alert("No such user exists");
        input1.value="";
        return;
    }
    if (idx === userIdx.value) {
        alert("That is you :|");
        input1.value="";
        return;
    }
        
    connect(userIdx.value,idx);
    document.getElementById("Friends").innerHTML += addContactElement(friends[friends.length - 1]);
    input1.value = "";
    initContact();
}
export const addContactModalExit = () => {
    var input1 = document.getElementById("inputAddContact");
    input1.value = "";
}
export default {addContactButton, addContactModalExit, addContactElement};