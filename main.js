var x=0;
var y=0;
function preload(){
    clown=loadImage("https://i.postimg.cc/Mpgqt51w/Clown-Nose-Transparent-PNG-Image.png")
};
function setup(){
    canvas=createCanvas(300,350);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.size(300,350);
    cam.hide();
    posenet=ml5.poseNet(cam,modelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    image(cam,0,0,300,350);
    image(clown,x,y,30,30);
}
function take_snapshot(){
    save("Clown-fliter-image.jpg");
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        x=results[0].pose.nose.x - 15;
        y=results[0].pose.nose.y - 15;
        console.log("x=" + x);
        console.log("y=" + y);
    }
}