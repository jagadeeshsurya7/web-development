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