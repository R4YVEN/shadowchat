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

function HandleAudio(msg, msgItem)
{
    var audioId = Math.floor(Math.random() * 1000000);
    var oAudio = document.createElement("audio");

    //Padding
    msgItem.appendChild(document.createElement("br"));
    msgItem.appendChild(document.createElement("br"));

    oAudio.setAttribute('id', "audio-" + audioId);
    oAudio.setAttribute('controls', "");
    oAudio.setAttribute('src', msg);
    msgItem.appendChild(oAudio);
}

function IsValidUrl(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(str);
  }