console.log('Thank you for using WebStorm 💙')
function saveStorage(id){
    var data = document.getElementById(id).value;
    var time = new Date().toUTCString();
    localStorage.setItem(time, data);
    showMsg("msg");
}

function showMsg(id){
    var result = '<table border="1">';
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        result += "<tr><td>"+value+"</td><td>"+key+"</td></tr>";
    }
    result += "</table>";
    var target = document.getElementById(id);
    target.innerHTML = result;
}

function clearStorage(){
    localStorage.clear();
    showMsg("msg");
}

function clearSingleStorage(){
    localStorage.removeItem(localStorage.key(localStorage.length-1));
    showMsg("msg");
}

// showMsg("msg");

function showDataByURL(){
    var resultFile = document.getElementById("fileDemo").files[0];
    if (resultFile){
        var reader = new FileReader();
        reader.readAsDataURL(resultFile);
        reader.onload = function(e){
            var urlData = this.result;
            document.getElementById("result").innerHTML += "<img src='"+urlData+"' alt='"+resultFile.name+"'/>";
        }
    }
}

function showDataByText(){
    var resultFile = document.getElementById("fileDemo").files[0];
    if (resultFile){
        var reader = new FileReader();
        reader.readAsText(resultFile);
        reader.onload = function(e){
            var textData = this.result;
            document.getElementById("result").innerHTML += textData;
        }
    }
}