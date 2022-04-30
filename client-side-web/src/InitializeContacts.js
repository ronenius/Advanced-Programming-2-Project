import userIdx from "./UserIdx";
import users from "./DataBase.js"
import addMessage from "./AddMessage";
import contactIdx from "./contactIdx";
import updateChatBoard from "./updateChatBoard"
import padding from "./chatPadding"
function initContact() {
    let friends = users[userIdx.value].friends;
    let PlaceHolder = document.getElementById("chatPlaceHolder");
    for (let i = 0; i < friends.length; i++) {
        let f = document.getElementById(friends[i].friend.username);
        if(f!=null)
            f.onclick = function() {
                PlaceHolder.innerHTML="";
                console.log(friends[i].chat);
                for (let j = 0; j < friends[i].chat.length; j++) {
                    PlaceHolder.innerHTML += addMessage(friends[i].chat[j],friends[i].friend.name, friends[i].friend.username, j);
                }
                contactIdx.value = i;
                PlaceHolder.scrollTo(0,PlaceHolder.scrollHeight);
                updateChatBoard();
                padding.addPadding(PlaceHolder);
                document.getElementById("sendingBoard").style.visibility = "visible";
            }
    }
}
export default initContact;