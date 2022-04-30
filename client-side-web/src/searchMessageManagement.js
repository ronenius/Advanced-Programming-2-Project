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
    let friends = users[userIdx.value].friends
    console.log("entered on change"+friends[contactIdx.value].chat.length);
    messagesSearched = [];
    for (let i = 0; i < friends[contactIdx.value].chat.length; i++) {
        console.log(friends[contactIdx.value].chat[i].contance);
        console.log("message\">"+document.getElementById("searchMessage").value.toLowerCase());
        console.log("search1");
        if (friends[contactIdx.value].chat[i].type==="text" && friends[contactIdx.value].chat[i].contance.toLowerCase().includes(/*"message\">"+*/document.getElementById("searchMessage").value.toLowerCase())) {
            console.log(contactIdx);
            console.log(friends[contactIdx.value])
            console.log("search2");
            messagesSearched.push(document.getElementById(friends[contactIdx.value].friend.username+"message#"+i));
        }
    }
    messageIdx = messagesSearched.length - 1;
    document.getElementById("prevResult").disabled=false;
    document.getElementById("nextResult").disabled=false;
    console.log(messagesSearched);
}
function prevResult() {
    /*if (messageIdx==messagesSearched.length)
        messageIdx--;*/
    if (messageIdx!==0) {
        messageIdx--;
        //console.log("jumped up to " + messagesSearched[messageIdx].id);
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].offsetTop);
    }
}
function nextResult() {
    /*if (messageIdx==-1)
        messageIdx++;*/
    if (messageIdx!==messagesSearched.length - 1) {
        messageIdx++;
        //console.log("jumped down to " + messagesSearched[messageIdx].id);
        document.getElementById("chatPlaceHolder").scrollTo(0,messagesSearched[messageIdx].offsetTop);
    }
}
export default {searchMessage,resetMessageSearch,prevResult, nextResult};