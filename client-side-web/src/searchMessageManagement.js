import contactIdx from "./contactIdx";
import users from "./DataBase";
import userIdx from "./UserIdx";
let messageIdx;
let messagesSearched = [];

function resetMessageSearch() {
    let friends = users[userIdx.value].friends
    messagesSearched = friends[contactIdx.value].chat;
    document.getElementById("searchMessage").value = "";
    messageIdx = messagesSearched.length - 1;
    document.getElementById("prevResult").disabled=true;
    document.getElementById("nextResult").disabled=true;
}
function searchMessage() {
    let friends = users[userIdx.value].friends
    messagesSearched = [];
    for (let i = 0; i < friends[contactIdx.value].chat.length; i++) {
        if (friends[contactIdx.value].chat[i].type==="text" && friends[contactIdx.value].chat[i].contance.toLowerCase().includes(/*"message\">"+*/document.getElementById("searchMessage").value.toLowerCase())) {
            messagesSearched.push(document.getElementById(friends[contactIdx.value].friend.username+"message#"+i));
        }
    }
    messageIdx = messagesSearched.length - 1;
    document.getElementById("prevResult").disabled=false;
    document.getElementById("nextResult").disabled=false;
    if (messagesSearched.length!==0)
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].offsetTop);
}
function prevResult() {
    if (messagesSearched.length === 0)
        return;
    if (messageIdx!==0) {
        messageIdx--;
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].offsetTop);
    }
}
function nextResult() {
    if (messagesSearched.length === 0)
        return;
    if (messageIdx!==messagesSearched.length - 1) {
        messageIdx++;
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].offsetTop);
    }
}
export default {searchMessage,resetMessageSearch,prevResult, nextResult};