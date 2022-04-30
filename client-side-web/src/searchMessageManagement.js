import contactIdx from "./contactIdx";
import users from "./DataBase";
import userIdx from "./UserIdx";
let messageIdx;
let messagesSearched = [];
function resetMessageSearch() {
    let friends = users[userIdx].friends
    messagesSearched = friends[contactIdx.value].chat;
    document.getElementById("searchMessage").value = "";
    messageIdx = messagesSearched.length - 1;
    document.getElementById("prevResult").disabled=true;
    document.getElementById("nextResult").disabled=true;
}
function searchMessage() {
    let friends = users[userIdx].friends
    console.log("entered on change");
    messagesSearched = [];
    for (let i = 0; i < friends[contactIdx].chat.length; i++) {
        if (friends[contactIdx].chat[i].contance.toLowerCase().includes(document.getElementById("searchMessage").value.toLowerCase())) {
            messagesSearched.push(document.getElementById(friends[contactIdx].friend.username+"message#"+i));
        }
    }
    messageIdx = messagesSearched.length - 1;
    document.getElementById("prevResult").disabled=false;
    document.getElementById("nextResult").disabled=false;
}
function prevResult() {
    /*if (messageIdx==messagesSearched.length)
        messageIdx--;*/
    if (messageIdx!=0) {
        messageIdx--;
        //console.log("jumped up to " + messagesSearched[messageIdx].id);
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].getBoundingClientRect().top);
    }
}
function nextResult() {
    /*if (messageIdx==-1)
        messageIdx++;*/
    if (messageIdx!=messagesSearched.length - 1) {
        messageIdx++;
        //console.log("jumped down to " + messagesSearched[messageIdx].id);
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].getBoundingClientRect().bottom);
    }
}
export default {searchMessage,resetMessageSearch,prevResult, nextResult};