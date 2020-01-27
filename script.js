let createTable = function(){

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");
    let box4 = document.getElementById("block4");
    let box5 = document.getElementById("block5");
    let box6 = document.getElementById("block6");
    let box7 = document.getElementById("block7");
    let box8 = document.getElementById("block8");
    let box9 = document.getElementById("block9");

};

let setOriginal = function(){
    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

};

togglePic = true;

let init = function(){

    image = document.createElement("IMG");
    image.onclick = togglePicture;
    image.src="img3.png";

    let content = document.getElementById("content");

    content.appendChild(image);
};

let togglePicture = function(id){
    if (togglePic === true) {
        image.src = "img3.png";
        togglePic = false;
    } else {
        image.src = "img4.png";
        togglePic = true;
    }
};

