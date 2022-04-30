import users from "./DataBase";
import userIdx from "./UserIdx";
import contactIdx from "./contactIdx";
import searchMessageManagement from "./searchMessageManagement";
function updateChatBoard() {
    let friends = users[userIdx.value].friends;
    document.getElementById("curContactBoard").style.visibility = "visible";
    document.getElementById("curContactPicture").src = friends[contactIdx.value].friend.picture;
    document.getElementById("curContactName").innerHTML = friends[contactIdx.value].friend.name;
    searchMessageManagement.resetMessageSearch();
}
export default updateChatBoard;