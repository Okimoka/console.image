console.image = function(url, offsetX, offsetY) {

     var xhr = new XMLHttpRequest();
     xhr.responseType = 'blob';
     xhr.onload = function() {
         var reader = new FileReader();
         reader.onloadend = function() {
             base64 = reader.result;

             if (!offsetX) {
                 offsetX = 0
             }
             if (!offsetY) {
                 offsetY = 0
             }

             var canvasNode = document.createElement("canvas");
             canvasNode.style.display = "none"
             canvasNode.id = "tempConsoleCanvas"
             document.getElementsByTagName("body")[0].appendChild(canvasNode);

             var canvas = document.getElementById("tempConsoleCanvas");
             var ctx = canvas.getContext("2d");

             var image = new Image();
             image.src = base64;

             canvas.width = image.width;
             canvas.height = image.height;


             image.onload = function() {
                 ctx.drawImage(image, 0, 0);
                 var imgData = ctx.getImageData(0, 0, image.width, image.height);
                 document.getElementsByTagName("body")[0].removeChild(canvas);

                 var textShadowString = "text-shadow:";

                 var pos = 0;
                 for (var i = 0; i < imgData.data.length; i += 4) {
                     textShadowString += ((pos % image.width + offsetX) + "px " + (((pos / image.height) | 0) + offsetY) + "px 0px rgba(" + imgData.data[i] + "," + imgData.data[i + 1] + "," + imgData.data[i + 2] + "," + (imgData.data[i + 3] / 255) + "),")
                     pos++;
                 };

                 textShadowString = textShadowString.slice(0, -1);
                 console.log('%c .', textShadowString);

             };


         }
         reader.readAsDataURL(xhr.response);
     };
     xhr.open('GET', url);
     xhr.send();


 };
