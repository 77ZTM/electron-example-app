const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const dev = document.getElementById('creators')

dev.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'create.html')
    let win = new BrowserWindow({width: 800, height:450})
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
})


///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function developersnote() {
    alert("Creators: Vince Richter");
}

function name() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("nameres").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}

function hoi() {
    var newWindow = window.open("create.html", null, "height=450,width=800,status=yes,toolbar=no,menubar=no,location=no");
}