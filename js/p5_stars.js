
      var a;
      var b;
      var n1;
      var n2;
      var n3;

      a = 0.96;
      b = 0.66;
      n1 = 0.2;
      n2 = 0.88;
      n3 = 0.79;

      function rad(phi, a, b, n1, n2, n3, m) {
        var add1 = pow(abs((1 / a) * cos((m / 4) * phi)), n2);
        var add2 = pow(abs((1 / b) * sin((m / 4) * phi)), n3);
        var res = pow(add1 + add2, 1 / n1);
        if (res === 0) {
          return res;
        }
        return 1 / res;
      }

      function setup() {
        var canvasDiv = document.getElementById("Embed");
        //var width = canvasDiv.offsetWidth;
        //var height = canvasDiv.offsetHeight;
        createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight).parent(
          "Embed",
        );
        //sliders
        /*
  sliderA = createSlider(0.1, 3, 0.01, 0.01).position(20, 10);
  sliderB = createSlider(0.05, 3, 0.01, 0.01).position(20, 35);
  sliderN1 = createSlider(0.05, 3, 0.01, 0.01).position(20, 60);
  sliderN2 = createSlider(0.05, 3, 0.01, 0.01).position(20, 85);
  sliderN3 = createSlider(0.05, 3, 0.01, 0.01).position(20, 110); */
      }

      function draw() {
        clear();
        //var width = canvasDiv.offsetWidth;
        //var height = canvasDiv.offsetHeight;

        var m = 10;
        var s = height / 1.8; //scale
        //sliders
        /*
  n1 = sliderN1.value();;
  n2 = sliderN2.value();
  n3 = sliderN3.value();
  a = sliderA.value();
  b = sliderB.value();
  
  textSize(12);
  text(sliderA.value(), 154, 25);
  text(sliderB.value(), 154, 50);
  text(sliderN1.value(), 154, 75);
  text(sliderN2.value(), 154, 100);
  text(sliderN3.value(), 154, 125);
  
  text('A', 4, 25);
  text('B', 4, 50);
  text('N1', 4, 75);
  text('N2', 4, 100);
  text('N3', 4, 125);
  fill(0); */

        translate(width / 2, height / 2.2);
        noFill();
        stroke(9, 60, 88);
        smooth();

        beginShape();
        for (var phi = 0.01; phi <= 2 * TWO_PI; phi += 0.001) {
          var r = rad(phi, a, b, n1, n2, n3, m);
          x = s * r * sin(phi);
          y = s * r * cos(phi);
          vertex(x, y);
        }
        endShape();
      }
      function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight,
        );
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }
      function mouseWheel(event) {
        if (checkVisible(canvasDiv)) {
          n1 -= 0.0002 * event.delta;
          b += 0.001 * event.delta;
          a -= 0.0001 * event.delta;
          if (n1 < 0.15 || n1 > 0.2) {
            n1 += 0.0002 * event.delta;
            b -= 0.001 * event.delta;
            a += 0.0001 * event.delta;
            console.log(a);
          }
          if (a > 0.89 && a < 0.96) {
            a -= 0.0001 * event.delta;
          }
        }
      }
      function windowResized() {
        var canvasDiv = document.getElementById("Embed");
        resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
      }

