# console.image
Alternative method to console.log an image

Since [this](https://github.com/adriancooney/console.image) doesn't seem to work anymore here's a (very slow) method which works as of Chrome 50.0.2661.102 m and Opera 37.0.2178.43. not in Firefox and IE11 though.
It displays the image as a series of 1x1 text-shadows of a single dot. The colors are read from a temporary canvas.

Usage: console.image("path/to/image.png", offsetX, offsetY);
offsets default to 0

Supports transparency too.
Image seems to have rendering issues but usually you can still recognize it.

![Alt text](http://i.imgur.com/yOW4Pzi.jpg)
