//document.getElementById("year").textContent = new Date().getFullYear();

const ipv4 = document.getElementById("ipv4");
const isp = document.getElementById("isp");
const country = document.getElementById("countryCode");

// Achtung: HTTP kann auf HTTPS-Seiten blockiert werden
fetch('http://ip-api.com/json/')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    ipv4.textContent = data.query;
    isp.textContent = data.isp;
    country.textContent = data.countryCode;
    
    
  })
  .catch((err) => {
    console.error("Fehler beim Laden der IP-Daten:", err);
    document.getElementById("errorOffline").style.display = "block";
    document.getElementById("errortext").textContent = err
    
  });

const tablinksHome = document.getElementById("tablinksHome");
const tablinksSpeedtest1 = document.getElementById("tablinksSpeedtest1");
const tablinksQR = document.getElementById("tablinksQR");
const tablinksOokla = document.getElementById("tablinksOokla");

tablinksHome.onclick = function(e){
  changeTabContent(e, 'yourip');
};

tablinksSpeedtest1.onclick = function(e){
  changeTabContent(e, 'speedtest-by-geschwindigkeit');
};

tablinksQR.onclick = function(e){
  changeTabContent(e, 'qr-code-generator');
};


function changeTabContent(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";

  if (evt) {
    evt.currentTarget.classList.add("active");
  }
}

changeTabContent(event, 'yourip');

// Startzustand ohne Event
document.getElementById("yourip").style.display = "block";
tablinksHome.classList.add("active");

const copyTextbtn = document.getElementById("ipcopybtn");
const copyText = document.getElementById("ipv4");

copyTextbtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyText.textContent);
    console.log("Kopiert!");
  } catch (err) {
    console.error("Fehler beim Kopieren:", err);
  }
});

const goqrURL = 'http://api.qrserver.com/v1/create-qr-code/?';
const QRInput = document.getElementById("qr-code-generator_input"); //?data=
const QRSubmit = document.getElementById("qr-code-generator_submit");
const resolution = '1000x1000'; //&size=
const fileType = 'png'; //&format=s
const Image = document.getElementById("qr-code-generator-img");
// const Download = document.getElementById("qr-code-generator-download-link");


QRSubmit.onclick = function(){
  QRCodeGen();
}

function QRCodeGen(){
  var content = QRInput.value;
  var qrCodeURL = `${goqrURL}data=${encodeURIComponent(content)}&size=${resolution}&format=${fileType}`;
  Image.src = qrCodeURL;
  // Download.href = qrCodeURL;
  // Download.style.visibility = "visible";
  console.log(qrCodeURL);
}
