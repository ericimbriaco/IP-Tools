//--------------- GET YEAR ---------------
document.getElementById("year").innerHTML = new Date().getFullYear();


//--------------- GET IP INFOMATIOENS ---------------
const ipv4 = document.getElementById('ipv4');
const isp = document.getElementById('isp');
const country = document.getElementById('country');
const city = document.getElementById('city');

//fetch('https://api.ipgeolocation.io/ipgeo?apiKey=62120e09c8984b9b8cea4ae931e9cccd')
fetch('https://api.geoiplookup.net/?json=true')
//fetch('http://ipwho.is/')
//OLD API KEY(https://api.ipgeolocation.io/ipgeo?apiKey=62120e09c8984b9b8cea4ae931e9cccd)
.then((res) => res.json())
.then((data) => {
  // NEW API: https://api.geoiplookup.net/?json=true
    // API: https://ipgeolocation.io/documentation/ip-geolocation-api.html
    console.log(data);
    ipv4.innerHTML = data.ip;
    isp.innerHTML = data.isp;
    country.innerHTML = data.countryname;
    city.innerHTML = data.city;

});
//--------------- TAB CHANGER (INDEX - SPEEDTEST)---------------

const tablinksHome = document.getElementById("tablinksHome");
const tablinksSpeedtest1 = document.getElementById("tablinksSpeedtest1");
const tablinksQR = document.getElementById("tablinksQR");
const tablinksSettings = document.getElementById("tablinksSettings");
const tablinksOokla = document.getElementById("tablinksOokla");

tablinksHome.onclick = function(){
  changeTabContent(event, 'yourip')
}

tablinksSpeedtest1.onclick = function(){
  changeTabContent(event, 'speedtest-by-geschwindigkeit')
}

tablinksQR.onclick = function(){
  changeTabContent(event, 'qr-code-generator')
}

tablinksOokla.onclick = function(){
  changeTabContent(event, 'speedtest-by-ookla')
}

//tablinksSettings.onclick = function(){
//  changeTabContent(event, 'settings')
//}

changeTabContent(event, 'yourip');



function changeTabContent(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//--------------- COPY FUNCTION BY ALEXEJ ---------------
const copyText = document.getElementById("ipv4");
const copyTextbtn = document.getElementById("ipcopybtn");

copyTextbtn.onclick = function(){
    copy(ipv4);
}



function copy(text)
{
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");  // Security exception may be thrown by some browsers.
    }
    catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
    }
    finally {
        document.body.removeChild(textarea);
    }
}
