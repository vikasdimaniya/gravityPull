var rock = [], num = 10, i;
function setup() {
    createCanvas(720, 720);
    for (i=0; i < num; i++ )
        rock.push(new Rock());
}

function draw() {
  background(0);
    for(i=0; i < num; i++) {
        rock[i].show();
        rock[i].update();
    }
}