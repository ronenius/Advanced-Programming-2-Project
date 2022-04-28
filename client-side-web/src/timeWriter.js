function getTime(x) {
    if (x.hour<10 && x.minute<10)
            return "0"+x.hour+":"+"0"+x.minute;
        else if (x.hour<10)
            return "0"+x.hour+":"+x.minute;
        else if (x.minute<10)
            return x.hour+":"+"0"+x.minute;
        return x.hour+":"+x.minute;
}
function getDate(x) {
    return x.day+"/"+x.month;
}
export default {getTime, getDate};