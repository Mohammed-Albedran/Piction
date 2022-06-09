const sideList = document.getElementById("sideList");
const openMenu = document.getElementById("icon1");
const closeMenu = document.getElementById("close");
var menuStatue = false;
openMenu.onclick = ()=>{
    if(menuStatue == false){
        sideList.style.right = "0";
        menuStatue = true;
    }else if(menuStatue == true){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}
closeMenu.onclick = ()=>{
    if(menuStatue == false){
        sideList.style.right = "0";
        menuStatue = true;
    }else if(menuStatue == true){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}
onresize = ()=>{
    if(menuStatue == true){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
}

// document.onclick = function(e){
//     if(e.target.id !== "sideList" && e.target.id !== "icon1"){
//         sideList.style.right = "-220px";
//         menuStatue = false;
//     }
// }

var selectEl = document.getElementById("selectEl");
var linkValue = document.getElementById("linkValue");
var ytPhoto = document.getElementById("ytPhoto");
var qualityValue = "highQ";
var theLink = '';
var downloadPic = '';
linkValue.oninput = ()=>{
    theLink = linkValue.value;
    if(selectEl.value == "highQ"){
        getThumbnail("highV");
    }else if(selectEl.value == "midQ"){
        getThumbnail("midV");
    }else if(selectEl.value == "lowV"){
        getThumbnail("lowV");
    }
}

selectEl.onchange = ()=>{
    if(selectEl.value == "highQ"){
        qualityValue = "highQ";
        getThumbnail("highV");
    }else if(selectEl.value == "midQ"){
        qualityValue = "midQ";
        getThumbnail("midV");
    }else if(selectEl.value == "lowQ"){
        qualityValue = "lowQ";
        getThumbnail("lowV");
    }
}
function getThumbnail(vidQuality){
    if(vidQuality == "highV"){
        if(theLink.indexOf("https://www.youtube.com/watch?v=") != -1){
        var videoId = theLink.split("v=")[1].substring(0, 11);
        ytPhoto.src = "https://i1.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";
        downloadPic = "https://i1.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";
    }else if(theLink.indexOf("https://youtu.be/") != -1){
        var videoId = theLink.split("be/")[1].substring(0, 11);
        ytPhoto.src = "https://i1.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";
        downloadPic = "https://i1.ytimg.com/vi/" + videoId + "/maxresdefault.jpg";
    }
    }else if(vidQuality == "midV"){
        if(theLink.indexOf("https://www.youtube.com/watch?v=") != -1){
            var videoId = theLink.split("v=")[1].substring(0, 11);
            ytPhoto.src = "https://i1.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
            downloadPic = "https://i1.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
        }else if(theLink.indexOf("https://youtu.be/") != -1){
            var videoId = theLink.split("be/")[1].substring(0, 11);
            ytPhoto.src = "https://i1.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
            downloadPic = "https://i1.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
        }
    }else if(vidQuality == "lowV"){
        if(theLink.indexOf("https://www.youtube.com/watch?v=") != -1){
            var videoId = theLink.split("v=")[1].substring(0, 11);
            ytPhoto.src = "https://i1.ytimg.com/vi/" + videoId + "/default.jpg";
            downloadPic = "https://i1.ytimg.com/vi/" + videoId + "/default.jpg";
        }else if(theLink.indexOf("https://youtu.be/") != -1){
            var videoId = theLink.split("be/")[1].substring(0, 11);
            ytPhoto.src = "https://i1.ytimg.com/vi/" + videoId + "/default.jpg";
            downloadPic = "https://i1.ytimg.com/vi/" + videoId + "/default.jpg";
        }
    }
    
}
var downloadB = document.getElementById("downloadB");
var historyArray = [];
onload = ()=>{
    if(localStorage.getItem("historyPics") == null || localStorage.getItem("historyPics") == ''){

    }else{
        var jsjs = JSON.parse(localStorage.getItem("historyPics"))
        historyArray = jsjs;
    }
}

downloadB.onclick = ()=>{
    window.open(downloadPic,"_blank");
    historyArray.push(downloadPic);
    localStorage.setItem("historyPics",JSON.stringify(historyArray));
}

const historyList = document.getElementById("historyList");
function setHistory(historyStatue){
    // historyList.children[1].innerHTML = '<li><img src="YT design.png" /></li>';
    if(historyStatue == "set"){
        for(var i = 0;i<historyArray.length;i++){
        historyList.children[2].innerHTML += '<li><a href="'+ historyArray[i] +'" target="_blank"><img src="' + historyArray[i] + '" /></a></li>';
    }
    }else{
        localStorage.removeItem("historyPics");
        historyList.children[2].innerHTML = '';
        historyArray = '';
    }
    
}

function openHistory(listStatue){
    if(listStatue == "open"){
        historyList.style.right = "0";
        setHistory("set");
    }else{
        historyList.style.right = "-280px";
        historyList.children[2].innerHTML = '';
    }

}
const historyButton = document.getElementById("historyButton");
const historyButtonSlide = document.getElementById("historyButtonSlide");



const aboutDiv = document.getElementById("about");
const aboutButton = document.getElementById("aboutButton");
const aboutButtonSlide = document.getElementById("aboutButtonSlide");
var aboutStatue = false;
aboutButton.onclick = ()=>{
    aboutOpen();
}
aboutButtonSlide.onclick = ()=>{
    aboutOpen();
}
function aboutOpen(){
    if(aboutStatue == false){
        aboutDiv.style.display = "block"
        aboutStatue = true;
    }else{
        aboutDiv.style.display = "none"
        aboutStatue = false;
    }
}

document.onclick = function(e){
    if(e.target.id !== "historyList" && e.target.id !== "historyButton" && e.target.id !== "historyButtonSlide"){
        historyList.style.right = "-280px";
        historyList.children[2].innerHTML = '';
    }
    if(e.target.id !== "sideList" && e.target.id !== "icon1"){
        sideList.style.right = "-220px";
        menuStatue = false;
    }
    if(e.target.id !== "aboutDiv" && e.target.id !== "aboutButton" && e.target.id !== "aboutButtonSlide"){
        aboutDiv.style.display = "none";
        aboutStatue = false;
    }
}