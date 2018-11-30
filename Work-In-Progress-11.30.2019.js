function setup() {
  createCanvas(700, 500);
  colorMode(HSB);
}
var bubble1 = 50
var changeInBubble1 = 1
var bubble2 = 50
var changeInBubble2 = 1
var bubble3 = 50
var changeInBubble3 = 1
var bubble4 = 50
var changeInBubble4 = 1
var bubble5 = 50
var changeInBubble5 = 1
var bubble6 = 50
var changeInBubble6 = 1
var bubble7 = 50
var changeInBubble7 = 1
var bubble8 = 50
var changeInBubble8 = 1
var bubble9 = 50
var changeInBubble9 = 1


function draw() {
  background(244, 20, 100);
  ellipse (50, 250, bubble1, bubble1);
  fill (85, 20, 100);
  bubble1 = bubble1 + changeInBubble1
  if (bubble1 > 150) {
    changeInBubble1 = -1;
  }
  
  if (bubble1 < 50) {
    changeInBubble1 = 1;
  }
  ellipse (100, 250, bubble2, bubble2);
  
  bubble2 = bubble2 + changeInBubble2
  if (bubble2 > 150) {
    changeInBubble2 = -1;
  }
  
  if (bubble2 < 50) {
    changeInBubble2 = 1;
  }
    ellipse (150, 250, bubble2, bubble2);
  
  bubble3 = bubble3 + changeInBubble3
  if (bubble3 > 150) {
    changeInBubble3 = -1;
  }
  
  if (bubble3 < 50) {
    changeInBubble3 = 1;
  }
  ellipse (200, 250, bubble4, bubble4);  
  bubble4 = bubble4+ changeInBubble4
  if (bubble4 > 150) {
    changeInBubble4 = -1;
  }
  
  if (bubble4 < 50) {
    changeInBubble4 = 1;
  }
  ellipse (250, 250, bubble5, bubble5);
  bubble5 = bubble5 + changeInBubble5
  if (bubble5 > 150) {
    changeInBubble5 = -1;
  }
  if (bubble5 < 50) {
    changeInBubble5 = 1;
  }
  ellipse (300, 250, bubble6, bubble6);
  bubble6 = bubble6 + changeInBubble6
  if (bubble6 > 150) {
    changeInBubble6 = -1;
  }
  if (bubble6 < 50) {
    changeInBubble6 = 1;
  }
  ellipse (350, 250, bubble7, bubble7);
  bubble7 = bubble7 + changeInBubble7
  if (bubble7 > 150) {
    changeInBubble7 = -1;
  }
  if (bubble7 < 50) {
    changeInBubble7 = 1;
  }
  ellipse (400, 250, bubble8, bubble8);
  bubble8 = bubble8 + changeInBubble8
  if (bubble8 > 150) {
    changeInBubble8 = -1;
  }
  if (bubble8 < 50) {
    changeInBubble8 = 1;
  }
  ellipse (450, 250, bubble9, bubble9);
  bubble9 = bubble9 + changeInBubble9
  if (bubble9 > 150) {
    changeInBubble9 = -1;
  }
  if (bubble9 < 50) {
    changeInBubble9 = 1;
  }
}
