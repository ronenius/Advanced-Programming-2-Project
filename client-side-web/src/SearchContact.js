import users from './DataBase.js'
import userIdx from './UserIdx';
import addContactFunctions from "./AddContact.js"
import initContact from './InitializeContacts';
function applySearch(s) {
    let friends = users[userIdx.value].friends;
    let ans = "";
    for (let i = 0; i < users[userIdx.value].friends.length; i++) {
        if (friends[i].friend.name.toLowerCase().includes(s.toLowerCase())) {
            ans += addContactFunctions.addContactElement(friends[i].friend)
        }
    }
    document.getElementById("Friends").innerHTML=ans;
}
function searchContactButton() {
    applySearch(document.getElementById("searchContact").value);
    initContact();
}
export default searchContactButton;