import AddContact from "./AddContact";
import users from "./DataBase";
import userIdx from "./UserIdx";
import initContact from "./InitializeContacts";

function initUser() {
    document.getElementById("Friends").innerHTML = "";
    for (let i = 0; i < users[userIdx.value].friends.length; i++) {
        document.getElementById("Friends").innerHTML += AddContact.addContactElement(users[userIdx.value].friends[i].friend);
    }
    initContact();
}

export default initUser;