function ToggleBigImage(imgId)
{
    console.log(imgId);
}

function HandleImage(msgItem)
{
    var imgId = Math.floor(Math.random() * 1000000);
    var oImg = document.createElement("img");
    msgItem.appendChild(document.createElement("br"));
    oImg.setAttribute('id', imgId);
    oImg.setAttribute('src', msg);
    oImg.setAttribute('width', 200);
    oImg.setAttribute('heigth', 200);
    oImg.setAttribute('isBig', false);
    oImg.setAttribute('onclick', "ToggleBigImage(" + imgId + ");");
    msgItem.appendChild(oImg);
}