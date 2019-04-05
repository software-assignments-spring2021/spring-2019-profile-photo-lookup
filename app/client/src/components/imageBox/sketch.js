export default function sketch(p){
    let canvas;
    let img;

    p.setup = () => {
      // canvas = p.createCanvas(300, 200);
      // p.noStroke();
      canvas = p.createCanvas(720, 400);
      img = p.loadImage('0barack-michelle.jpeg');
    }

    p.draw = () => {
      // p.background('orangered');
      // p.ellipse(150, 100, 100, 100);
      p.image(img, 0, 0);
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      // if(canvas) //Make sure the canvas has been created
      //   p.fill(newProps.color);
    }
}
