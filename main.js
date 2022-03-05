status="";

function start()
{
    objectDetector=ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("object_name").value

}

function modelLoaded(){
    console.log("Model Loaded")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function setup()
{
    canvas=createCanvas(480,380);
    canvas.center();
}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}