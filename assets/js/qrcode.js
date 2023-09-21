const goqrURL = 'http://api.qrserver.com/v1/create-qr-code/?';
const QRInput = document.getElementById("qr-code-generator_input"); //?data=
const QRSubmit = document.getElementById("qr-code-generator_submit");
const resolution = '1000x1000'; //&size=
const fileType = 'png'; //&format=s
const Image = document.getElementById("qr-code-generator-img");
const Download = document.getElementById("qr-code-generator-download-link");


QRSubmit.onclick = function(){
  QRCodeGen();
}

function QRCodeGen(){
  var content = QRInput.value;
  var qrCodeURL = `${goqrURL}data=${encodeURIComponent(content)}&size=${resolution}&format=${fileType}`;
  Image.src = qrCodeURL;
  Download.href = qrCodeURL;
  Download.style.visibility = "visible";
  console.log(qrCodeURL);
}
