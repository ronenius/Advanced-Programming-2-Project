import users from "./DataBase";
import userIdx from "./UserIdx";
import contactIdx from "./contactIdx";
import chatManagement from "./chatManagement";

function attachmentButton(event) {
    let files = event.target.files;
    let friends = users[userIdx.value].friends;
    if (files.length==0)
        return;
    let reader = new FileReader();
    reader.onload = function(e) {
        friends[contactIdx.value].chat.push(chatManagement.chatElement("<a href=\""+e.target.result+"\" download=\""+files[0].name+"\">"+files[0].name+"</a>",true));
        let friend = friends[contactIdx.value].friend;
        let idx = 0;
        for (let i = 0; i < friend.friends.length; i++) {
            if (friend.friends[i]===users[userIdx.value]) {
                idx = i;
                break;
            }
        }
        friend.friends[idx].chat.push(chatManagement.chatElement("<a href=\""+e.target.result+"\" download=\""+files[0].name+"\">"+files[0].name+"</a>", false));
        chatManagement.displayChat(friends[contactIdx.value]);
        chatManagement.updateTime(friends[contactIdx.value]);
        event.target.value=null;
        //resetMessageSearch();
    }
    reader.readAsDataURL(files[0]);
};
export default attachmentButton;