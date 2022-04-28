function CheckRegister(username, labelUsername, password, labelPassword, verifyPassword, labelVerifyPassword, nickname, labelNickname, imageSrc, validationText, setResult) {
    if (username.current.value.length === 0) {
        validationText.current.innerHTML = "Username must not be empty!";
        ErrorRegister(username, labelUsername, password, labelPassword, verifyPassword, labelVerifyPassword, nickname, labelNickname, imageSrc, validationText, setResult);
        return;
    }
    if (nickname.current.value.length === 0) {
        validationText.current.innerHTML = "Nickname must not be empty!";
        ErrorRegister(username, labelUsername, password, labelPassword, verifyPassword, labelVerifyPassword, nickname, labelNickname, imageSrc, validationText, setResult);
        return;
    }
    if (password.current.value === verifyPassword.verifyPassword.value) {
        
    }
}

function ErrorRegister(username, labelUsername, password, labelPassword, verifyPassword, labelVerifyPassword, nickname, labelNickname, imageSrc, validationText, setResult) {
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
    labelVerifyPassword.current.style.color = "red";
    verifyPassword.current.value = "";
    verifyPassword.current.style.boxShadow = "none";
    verifyPassword.current.style.borderWidth = "2px";
    verifyPassword.current.style.borderTopWidth = "0px";
    verifyPassword.current.style.borderColor = "red";
    labelNickname.current.style.color = "red";
    nickname.current.value = "";
    nickname.current.style.boxShadow = "none";
    nickname.current.style.borderWidth = "2px";
    nickname.current.style.borderTopWidth = "0px";
    nickname.current.style.borderColor = "red";
    nickname.current.style.marginBottom = "1vh";
    validationText.current.hidden = false;
    setResult("");
    imageSrc.current.value = null;
}

export default CheckRegister;