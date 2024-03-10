abstract class TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
    ){}

    abstract getSepia() : void
    getReelTime(): number{
        // some complex calculation
        return 8
    }
}

// ABSTRACT CLASS : doesnt allows to create an object 
// allows to create using an inheritance class (eg Instagramm)

class Instagramm extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter: string,
        public burst : number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("sepia");
        }
}
const alii = new Instagramm("test" , "test" , 3)

alii.getReelTime() // can alter here