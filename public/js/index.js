import QrScanner from "qr-scanner";

const videoElem = document.querySelector("video");
const qrScanner = new QrScanner(videoElem, (result) =>
  console.log("decoded qr code:", result)
);

QrScanner.hasCamera()
  .then(() => {
    console.log("yess it has");
  })
  .catch(() => {
    console.log("no camera found");
  });
qrScanner.start();
