function getLastMessage(chat) {
    if (chat.length === 0) {
        return "";
    }
    let lastMessage = chat[chat.length - 1];
    if (lastMessage.type === "text") {
        return lastMessage.contance;
    }
    if (lastMessage.type === "image") {
        return "image...";
    }
    if (lastMessage.type === "file") {
        return "file...";
    }
    if (lastMessage.type === "audio") {
        return "recording...";
    }
    if (lastMessage.type === "video") {
        return "video...";
    }
}

export default getLastMessage;