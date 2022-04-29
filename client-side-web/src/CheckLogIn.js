import ConnectToMain from "./ConnectToMain.js";

function CheckLogIn(username, labelUsername, password, labelPassword, validationText, navigate) {
    ConnectToMain(username.current.value, password.current.value, navigate);
    //ErrorLogIn(username, labelUsername, password, labelPassword, validationText);
}

function ErrorLogIn(username, labelUsername, password, labelPassword, validationText){
    labelUsername.current.style.color = "red";
    username.current.value = "";
    username.current.style.boxShadow = "none";
    username.current.style.borderWidth = "2px";
    username.current.style.borderColor = "red";
    labelPassword.current.style.color = "red";
    password.current.value = "";
    password.current.style.boxShadow = "none";
    password.current.style.borderWidth = "2px";
    password.current.style.borderTopWidth = "0px";
    password.current.style.borderColor = "red";
    password.current.style.marginBottom = "1vh";
    validationText.current.hidden = false;
}

export default CheckLogIn;