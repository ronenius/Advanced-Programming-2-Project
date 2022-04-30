import contactIdx from "./contactIdx";
import users from "./DataBase";
import userIdx from "./UserIdx";
import chatManager from "./chatManagement.js";
function sendMessage() {
    let input = document.getElementById("typeMessage").value;
    let friends = users[userIdx.value].friends;
    document.getElementById("typeMessage").value = "";
    if (input==""||contactIdx.value==-1)
        return;
    friends[contactIdx.value].chat.push(chatManager.chatElement(input, true));
    let friend = friends[contactIdx.value].friend;
    let idx = 0;
    for (let i = 0; i < friend.friends.length; i++) {
        if (friend.friends[i].friend==users[userIdx.value]) {
            idx = i;
            console.log("happend"+i);
            break;
        }
    }
    friend.friends[idx].chat.push(chatManager.chatElement(input, false));
    chatManager.displayChat(friends[contactIdx.value]);
    chatManager.updateTime(friends[contactIdx.value]);
    //resetMessageSearch();
}
export default sendMessage