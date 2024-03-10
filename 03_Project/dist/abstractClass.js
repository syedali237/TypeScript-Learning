"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
// ABSTRACT CLASS : doesnt allows to create an object 
// allows to create using an inheritance class (eg Instagramm)
class Instagramm extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const alii = new Instagramm("test", "test", 3);
alii.getReelTime(); // can alter here
