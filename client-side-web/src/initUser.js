import contactIdx from "./contactIdx";
import AddContact from "./AddContact";
import users, { initUsers } from "./DataBase";
import userIdx from "./UserIdx";
import initContact from "./InitializeContacts";
function initUser() {
    //contactIdx.value = -1;
    console.log(-1);
    initUsers();
    for (let i = 0; i < users[userIdx.value].friends.length; i++) {
        document.getElementById("Friends").innerHTML += AddContact.addContactElement(users[userIdx.value].friends[i].friend);
    }
    initContact();
}
export default initUser;