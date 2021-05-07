const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var myEngine,myWorld,bg;

function setup(){
    createCanvas(1200,800);

    myEngine = Engine.create();
    myWorld  = myEngine.world;

    ground = new Ground(600,790,1200,20);
    box1 = new Box(600,737);
    box2 = new Box(600,694);
    box3 = new Box(600,651);
    box4 = new Box(600,608);
    box5 = new Box(600,565);
    box6 = new Box(600,522);
    box7 = new Box(600,479);
    box8 = new Box(600,436);

    box11 = new Box(700,737);
    box21 = new Box(700,694);
    box31= new Box(700,651);
    box41 = new Box(700,608);
    box51 = new Box(700,565);
    box61 = new Box(700,522);
    box71 = new Box(700,479);
    box81 = new Box(700,436);

    box12 = new Box(800,737);
    box22 = new Box(800,694);
    box32 = new Box(800,651);
    box42 = new Box(800,608);
    box52 = new Box(800,565);
    box62 = new Box(800,522);
    box72 = new Box(800,479);
    box82 = new Box(800,436);
    
}

function draw(){ 
    background("pink");

    Engine.update(myEngine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();
    box71.display();
    box81.display();

    box12.display();
    box22.display();
    box32.display();
    box42.display();
    box52.display();
    box62.display();
    box72.display();
    box82.display();

    ground.display();

}

