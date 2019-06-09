/*
 *
 * CENTRO Datos 
 * Trabajo Final (Mayo 2019)
 * CENTRO
 * Isabel Larragain González
 *
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */

var container;
var containerMap;
var welcomeContainer;
var welcomeContainerButton;
var graphContainer;
var imageHeader;


 /*
 *****************************************
 *****************************************
 * LYFE CYCLE METHODS
 *****************************************
 *****************************************
 */


function preload() {

}




function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  container.position(0,0);
  container.size(1,1);
  drawImageHeader();
  drawWelcomeContainer();
  drawGraphContainer();

}

function setup() {

  container = createCanvas(1, 1);
  container.style('z-index','0');
  container.position(0,0);
  initialize();
}

function draw() {
  // put drawing code here
  background('rgba(0,255,0, 0)');
  drawImageHeader();
  drawWelcomeContainer();
  drawGraphContainer();

}

/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */

function initialize() {
    background('rgba(0,255,0, 0)');
    initializeMap();
    initializeImageHeader();
    initializeWelcomeContainer();
    initializeGraphContainer();
    
}



/*
 *****************************************
 *****************************************
 * IMAGE HEADER METHODS
 *****************************************
 *****************************************
 */

function initializeImageHeader() {
  imageHeader = select("#imageHeader");
  drawImageHeader();

}

function drawImageHeader() {
  //pos de titulo
  imageHeader.position(10,windowHeight-73);
  imageHeader.size(644,55);

}



/*
 *****************************************
 *****************************************
 * WELCOME CONTAINER METHODS
 *****************************************
 *****************************************
 */

function initializeWelcomeContainer() {
  welcomeContainer = select("#welcomeContainer");
  welcomeContainerButton = select("#welcomeContainerButton");
  welcomeContainerButton.mouseOver(welcomeContainerButtonMouseOver);
  welcomeContainerButton.mouseOut(welcomeContainerButtonMouseOut);
  welcomeContainerButton.mouseClicked(welcomeContainerButtonMousePressed);
  drawWelcomeContainer();

}

function drawWelcomeContainer() {
  welcomeContainer.position(windowWidth/2 - 300,windowHeight/2 -235);
  welcomeContainer.size(616,470);

  welcomeContainerButton.position(-30,-30);
  welcomeContainerButton.size(70,70);

}

function welcomeContainerButtonMouseOver(){
  print("OVER");
  welcomeContainerButton.attribute('src', 'assets/images/welcomeImageButton_2.png');
}

function welcomeContainerButtonMouseOut(){
  print("OUT");
  welcomeContainerButton.attribute('src', 'assets/images/welcomeImageButton_1.png');

}

function welcomeContainerButtonMousePressed(){
  print("PRESSED");
  welcomeContainer.hide();
}

/*
 *****************************************
 *****************************************
 * GRAPH CONTAINER METHODS
 *****************************************
 *****************************************
 */

function initializeGraphContainer() {
  graphContainer = select("#graphContainer");
  imageGraph = select("#imageGraph");
  imageGraph.mouseOver(graphButton1MouseOver);
  imageGraph.mouseOut(graphButton1MouseOut);

  imageGraph2 = select("#imageGraph2");
  imageGraph2.mouseOver(graphButton2MouseOver);
  imageGraph2.mouseOut(graphButton2MouseOut);

  drawGraphContainer();

}

function drawGraphContainer() {
  graphContainer.position(50,50);
  graphContainer.size(1,1);

  imageGraph.position(0,0);
  imageGraph2.position(0,120);
  
}

function graphButton1MouseOver(){
 print("OVER");
 imageGraph.attribute('src', 'assets/images/graph1.png');
 imageGraph2.attribute('src', 'assets/images/alpha.png');
}

function graphButton1MouseOut(){
 print("OUT");
 imageGraph.attribute('src', 'assets/images/buttonGraph1.png');
 imageGraph2.attribute('src', 'assets/images/buttonGraph2.png');

}
/////2

function graphButton2MouseOver(){
 print("OVER");
 imageGraph2.attribute('src', 'assets/images/graph2.png');
 
}

function graphButton2MouseOut(){
 print("OUT");
 imageGraph2.attribute('src', 'assets/images/buttonGraph2.png');
}


/*
 *****************************************
 *****************************************
 * MAP METHODS
 *****************************************
 *****************************************
 */

function initializeMap() {
  containerMap = select("#centroMap");
  containerMap.style('z-index','-1');


}

function drawMap() {



}

