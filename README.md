# console.image
Alternative method to console.log an image

Since [this](https://github.com/adriancooney/console.image) doesn't seem to work anymore here's a (very impractical, limited and slow) method which works as of Chrome 50.0.2661.102 m and Opera 37.0.2178.43. not in Firefox and IE11 though.
It works by drawing the base64 image on a generated canvas, reads the pixels using getImageData, then displays the image as a series of 1x1 text-shadows of a single dot.

Usage: console.image("base64 image", offsetX, offsetY);
offsets default to 0

Supports transparency too.
Dimensions seem to be very limited, varies on the image, but it cuts of after a certain width/height.

![Alt text](http://i.imgur.com/x7vGQOI.jpg)
It *kinda* works
