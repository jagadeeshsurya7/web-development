var users=[
    {
        "name":"Jaggu Bhai",
        "gender":"Male",
        "image":"My image1.jpeg"
    },
    {
        "name":"Bannu",
        "gender":"Male",
        "image":"My image2.jpeg"
    }
]
var index=0;
function toggle() {
    if(index==0) index=1;
    else index=0;
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").innerText=users[index].gender;
    document.getElementById("user-image").src=users[index].image;
}
function randomUser() {
    fetch("https://randomuser.me/api")
    .then(function(rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var name=user.name.title+" "+user.name.first+" "+user.name.last;
        var gender=user.gender;
        var picture=user.picture.large;
        document.getElementById("user-name").innerText=name;
        document.getElementById("user-gender").innerText=gender;
        document.getElementById("user-image").src=picture;
    })
}