function setup()
{

    Canvas=createCanvas(600,500);
    Canvas.position(200,300);

    video=createCapture(VIDEO);
    v1=""
    video.hide()
}

function draw()
{
image(video,200,200,200,150);
fill("red")
stroke("red")
circle(50,50,80)
circle(550,50,80)
circle(50,450,80)
circle(550,450,80)

fill("green")
stroke("green")
rect(90,40,420,20)
rect(90,440,420,20)
rect(40,86,20,325)
rect(540,86,20,325)
tint(v1)
}

function take_snapshot()
{
    save("img.png")
}
function apply()
{
    v1=document.getElementById("txt").value;
}
