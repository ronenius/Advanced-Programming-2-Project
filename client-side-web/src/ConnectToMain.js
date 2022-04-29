import users from './DataBase.js';
import userIdx from './UserIdx.js';

function ConnectToMain(username, password, navigate) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            userIdx.value = i;
            navigate('../main', { replace: true });
            break;
        }
    }
}

export default ConnectToMain;