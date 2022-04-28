const users = [{username:"Shlomy", password:"Shlomy123", name:"Shlomy", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Shabat", password:"Shabat123", name:"Shabat", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Shalom", password:"Shalom123", name:"Shalom", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Wumevorah", password:"Wumevorah123", name:"Wumevorah", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Alice", password:"Alice123", name:"Alice", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Bob", password:"Bob123", name:"Bob", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Eve", password:"Eve123", name:"Eve", picture:"Pictures/contatcPicture.png", friends:[]},
{username:"Teodor", password:"Teodor123", name:"teodor", picture:"Pictures/contatcPicture.png", friends:[]}];
export function connect(i,j) {
    users[i].friends.push({friend:users[j],chat:[{
        contance : "hello",
        hour:0,
        minute:0,
        day:0,
        month:0,
        year:0,
        sent:true}]});
    users[j].friends.push({friend:users[i],chat:[
        {
            contance : "world",
            hour:0,
            minute:0,
            day:0,
            month:0,
            year:0,
            sent:false}
    ]});
}
export function initUsers() {
    connect(0,1);
    connect(0,2);
    connect(0,3);
    connect(0,4);
    connect(0,5);
    connect(1,3);
    connect(1,4);
    connect(1,5);
    connect(1,6);
    connect(2,3);
    connect(2,4);
    connect(2,6);
    connect(2,7);
    connect(3,5);
    connect(3,7);
    connect(4,6);
    connect(4,7);
    connect(5,6);
    connect(5,7);
    connect(6,7);
}
export default users;