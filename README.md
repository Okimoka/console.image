# console.image
Alternative (very slow) method to console.log an image, since [**this**](https://github.com/adriancooney/console.image) doesn't seem to work anymore.

Works in Chrome 50.0.2661.102 m and Opera 37.0.2178.43. not in Firefox and IE11 though.

![Alt text](http://i.imgur.com/RAK1BHh.jpg)

#####Usage
`console.image("url", offsetX, offsetY);`

(only works if 'Access-Control-Allow-Origin' header is present on the requested resource, e.g. wikimedia or imgur).

Offsets default to 0. Supports transparency.

#####How it works
Request to the resource is made, image saved in base64. A temporary canvas is created in which the image is drawn.
getImageData creates an Array that contains the rgb values of every pixel.
The image is drawn as a series of 1x1 text-shadows of a single dot.




