function ToggleBigImage(imgId)
{
    var oImg = document.getElementById('img-' + imgId);
    console.log("Image (" + imgId + ") was clicked!");

    if(oImg.getAttribute('isBig') == "false")
    {
        //oImg.removeAttribute('width');
        //oImg.removeAttribute('heigth');
        oImg.setAttribute('width', 600);
        oImg.setAttribute('heigth', 600);
        oImg.setAttribute('isBig', 'true');
    }
    else
    {
        oImg.setAttribute('width', 200);
        oImg.setAttribute('heigth', 200);
        oImg.setAttribute('isBig', 'false');
    }
}

function HandleImage(msg, msgItem)
{
    var imgId = Math.floor(Math.random() * 1000000);
    var oImg = document.createElement("img");

    //Padding
    msgItem.appendChild(document.createElement("br"));
    msgItem.appendChild(document.createElement("br"));

    oImg.setAttribute('id', "img-" + imgId);
    oImg.setAttribute('src', msg);
    oImg.setAttribute('width', 200);
    oImg.setAttribute('heigth', 200);
    oImg.setAttribute('isBig', "false");
    oImg.setAttribute('onclick', "ToggleBigImage(" + imgId + ");");
    msgItem.appendChild(oImg);
}