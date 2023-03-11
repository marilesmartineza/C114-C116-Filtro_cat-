noseX=0;
noseY=0;

function preload() {
   cat=loadImage("https://i.postimg.cc/qvQxvYsP/imageedit-7-6725826284.png");

}

 function setup() {
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modeLoaded);
    poseNet.on("pose", gotPoses);

   }

   function modeLoaded(){
      console.log("poseNet está inicializado");
   }

   function gotPoses(results){
      if(results.length>0){
         console.log(results),
         noseX=results[0].pose.nose.x -50;
         noseY=results[0].pose.nose.y -30;
         console.log("nose x = "+ results[0].pose.nose.x);
         console.log("nose y = "+ results[0].pose.nose.y);
      }
   }

   function draw() {
      image(video,0,0,300,300);
      fill(255.0,0);
      stroke(103,21,21);
      image(cat,noseX,noseY,100,95);

   }

   function take_snapshot() {
       save("Foto.jpg");
   }


 