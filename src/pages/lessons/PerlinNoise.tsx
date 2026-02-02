import Blocks from "@/components/blocks";
import { PerlinDemo, PerlineWaveDemo, PerlineColorDemo } from "@/components/perlin";

const PerlinNoise = () => {
  return (
    <>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/OPXQqLe"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {"Perlin Noise codepen practice page"}
      </a>

      <h1>Perlin Noise</h1>

      <PerlinDemo />

      <h2>overview</h2>

      <p>
        Perlin noise is a “gradient noise” algorithm that can be used to create textures, shapes, and motion that look “natural”. It was created by Ken Perlin in 1982 after working on Disney’s TRON movie as a way to generate natural looking terrain.
      </p>

      <p>For example, let’s say we wanted to generate a path that looks like a some rolling hills. We could just create a method to generate random Y numbers, and then use them to create a polyline. This is just pseudo-code, but perhaps something like this:</p>

      {/* <Blocks lang="javascript">{`function makeRandomPolyline(y) {
  let pointString = \`0,\${h} \`;
  let xpos = 0;
  for (let i = 0; i < totalPoints + 1; i++) {
    xpos = i * dx;
    let ypos = y - (Math.random() * h) / 5;
    pointString += \`\${xpos},\${ypos} \`;
  };
  pointString += \`\${w},\${h}\`;
  randomLine.setAttribute("points", pointString);
}`}</Blocks> */}

      <Blocks lang="javascript">{`function makeRandomPolyline() {
  let pointString = "";
  let xpos = 0;
  for (let i = 0; i < 50; i++) {
    xpos += 10;
    let ypos = Math.random() * svgHeight;
    pointString += \`\${xpos},\${ypos} \`;
  };
  randomLine.setAttribute("points", pointString);
}`}</Blocks>

      <p>
        <i><strong>Note:</strong> The code above is just pseudo-code to illustrate the concept. It won't generate the image below as-is.</i>
      </p>

      <p>Using this method, we would generate a polyline that looks something like this:</p>

      <svg viewBox="0 0 750 250">
        <rect id="bg" x="0" y="0" width="750" height="250" fill="white"></rect>
        <g id="holder">
          <polyline id="random" points="0,250 0,94.41426649464603 7.5,82.23408544613852 15,76.05792144817548 22.5,88.38062071787066 30,83.88910662721747 37.5,89.8643099926652 45,109.0342130674082 52.5,78.41383034079084 60,81.40529243847357 67.5,79.03441798197915 75,86.3292479984999 82.5,100.10266389735732 90,86.15236325317017 97.5,83.89061943033231 105,89.54154676677568 112.5,115.5834335198432 120,111.1805926081885 127.5,108.53854870097837 135,123.7204553812213 142.5,115.90778520972908 150,114.32943906711691 157.5,102.14115294990452 165,117.76172528843657 172.5,121.26199660982164 180,106.36279023238689 187.5,87.08173917003326 195,80.02417382134703 202.5,96.09060324414315 210,92.02238328536599 217.5,82.96184404970941 225,119.8470658620487 232.5,81.44530291080645 240,82.72106544700901 247.5,112.11820075958227 255,92.27135633543153 262.5,81.84078653832188 270,78.03300463248445 277.5,119.96665583589457 285,99.0522124937793 292.5,121.56343295976978 300,113.67402256589159 307.5,82.53190631575762 315,95.957314741149 322.5,79.85772387785326 330,108.30674774571969 337.5,122.22859040280407 345,110.42205966483601 352.5,122.19176996062602 360,111.51840922635137 367.5,118.81115937049461 375,87.21826166509847 382.5,116.15287988434724 390,101.94624080454057 397.5,87.0215872118003 405,89.65104043388233 412.5,76.5559907887079 420,118.8682603717573 427.5,85.34389967880514 435,81.43388511001584 442.5,84.57409285262605 450,97.55102692668834 457.5,91.08537994519051 465,103.56699042912194 472.5,75.42333831414227 480,117.12056940319239 487.5,86.51776638623078 495,77.43456849770624 502.5,84.21427256681523 510,101.02192530449807 517.5,87.82681848111602 525,114.221054050589 532.5,88.50285238592434 540,104.70731178569501 547.5,79.2908742328154 555,86.5206686115877 562.5,103.47377311601464 570,79.09873868784348 577.5,84.45352415332228 585,80.08564716722263 592.5,97.1055777882744 600,97.53565055415449 607.5,78.08728094943568 615,100.17203603459794 622.5,77.36120454466821 630,82.85886856837078 637.5,82.06585068335028 645,122.44386731264667 652.5,87.20080070902145 660,91.1418853088275 667.5,120.58171345303975 675,121.60902227844267 682.5,75.20358646947372 690,121.72023722211804 697.5,76.7521866322253 705,93.73930556925464 712.5,121.66715655244413 720,87.55275273499826 727.5,89.99831686859677 735,88.12109941110614 742.5,82.5743515070299 750,80.97242887647862 750,250" fill="#2C3930" stroke="none" stroke-width="1"></polyline>
          <polyline id="perline" points="" fill="#2C3930" stroke="none" stroke-width="3"></polyline>
        </g>
      </svg>
      <p>
        Needless to say, this looks awful. Using Perlin noise however, we can get something that looks much better. We're going create a similar method that generates Perlin noise values for each of the x positions, and then use those values to create our polyline.
      </p>

      <p>
        There are many implementations of Perlin noise available online, but for this example, we'll be using <a href='https://www.jsdelivr.com/package/npm/simplex-noise' target='_blank' rel="noopener noreferrer"> one called simplex-noise,created by J Wagner.</a> You can find the code for it <a href='https://www.jsdelivr.com/package/npm/simplex-noise' target='_blank' rel="noopener noreferrer"> here</a>.
      </p>

      <p>
        I've taken the liberty of creating a codepen page with the code below, which you can find <a href='https://codepen.io/aokorodu/pen/QwEQoNy' target='_blank' rel="noopener noreferrer"> here</a> I start off by importing the simplex-noise library, after which I instantiate, or "seed" the noise function. Then I define some variables for the width, height, and total number of points for the polyline.
      </p>



      <Blocks lang="javascript">{`
import { createNoise2D } from "https://cdn.skypack.dev/simplex-noise@4.0.0";

const noise = createNoise2D();
const w = 750;
const h = 250;
const totalPoints = 100;`}</Blocks>

      <p>
        Now let's create our Perlin noise polyline method. Similar to the random polyline method, we start off in the lower left hand corner, and then generate a series of x positions. However, instead of generating random y values, we use the noise function to generate Perlin noise values for each x position.
      </p>

      <p>The noise function takes two arguments, which represent the x and y coordinates in a 2D space. In this case, we're only interested in the x coordinate, so we can just pass in 0 for the y coordinate. The noise function returns a value between -1 and 1, so we need to map that value to a range that makes sense for our polyline. In this case, we're mapping it to between 50 and 200, which gives us a nice range of y values that SHOULD create a rolling hills effect. </p>

      <Blocks lang="javascript">{`const mapRange = (value, inMin, inMax, outMin, outMax) => 
  ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

function makePerlinPolyline() {
  const dx = w / totalPoints;
  let pointString = \`0,\${h} \`;
  let xpos = 0;
  for (let i = 0; i < totalPoints + 1; i++) {
    xpos = i * dx;
    let dy = noise(xpos, 0);
    let ypos = mapRange(dy, -1, 1, 50,200);
    pointString += \`\${xpos},\${ypos} \`;
  }
  pointString += \`\${w},\${h}\`;
  const perlineLine = document.getElementById("perline");
  perlineLine.setAttribute("points", pointString);
}`}</Blocks>
      <p>
        But as you can see from the resulting polyline, it doesn't quite look right. The hills are too steep and jagged, and don't have the smooth, natural look that we're going for.
      </p>



      <svg id="bottom" viewBox="0 0 750 250">
        <g id="holder">
          <polyline id="perline" points="0,250 0,125 7.5,104.58437898483358 15,87.57915690756178 22.5,151.75523308292316 30,125 37.5,62.807790226744984 45,87.57977197467088 52.5,101.33481511451305 60,117.76841101122247 67.5,118.77702248779921 75,162.41604570304082 82.5,142.3320758227078 90,114.25948649024204 97.5,76.65224063189947 105,110.42304401835264 112.5,104.07895136789492 120,110.87703386711419 127.5,104.50475655758112 135,171.13193563625697 142.5,143.58339904640565 150,142.33971670022552 157.5,148.41527335698453 165,95.49616133613785 172.5,111.97361071580295 180,125 187.5,171.4966433967959 195,162.20158534757405 202.5,169.88018613860385 210,171.26404661987237 217.5,96.7785651985954 225,166.88508798362062 232.5,90.41461750485117 240,124.998626840626 247.5,149.6919956916667 255,128.65653558409804 262.5,169.61454142509632 270,152.84316975455437 277.5,118.9426333770361 285,195.19788525003295 292.5,120.45613129093026 300,124.95585569895583 307.5,113.96279982788022 315,90.89873133432673 322.5,180.92827971577148 330,156.4670011635738 337.5,143.83474958371374 345,191.98660761976515 352.5,151.99565967804074 360,158.1465225842039 367.5,134.66064113252764 375,91.9896916155686 382.5,124.3885887569498 390,158.44323178868345 397.5,169.57412465360824 405,157.63462163490257 412.5,126.88123793354437 420,91.98749267257114 427.5,136.6075128067984 435,93.21208639148247 442.5,138.5282127556614 450,160.6476148655347 457.5,157.29290970932465 465,155.65729128381741 472.5,157.1745439246762 480,161.20546970355963 487.5,132.97941668520062 495,153.88038071248104 502.5,160.01353195230178 510,161.62151598282122 517.5,135.40614547959316 525,71.46384790437452 532.5,138.84267100752686 540,161.9210845077615 547.5,127.9234703322395 555,100.60129136421986 562.5,63.34748806031942 570,98.94302228110384 577.5,79.4721334566234 585,103.25222875380398 592.5,122.5723324428884 600,101.76672900293015 607.5,100.54536641491029 615,125 622.5,141.2158698542704 630,133.6675882124178 637.5,94.446310608052 645,140.72345167991517 652.5,102.95529366462583 660,108.5623284747181 667.5,158.68794081069075 675,149.83498687200483 682.5,134.26282225241425 690,112.42198670128361 697.5,76.22263628905795 705,107.0688908114261 712.5,117.1305783801547 720,110.53895542407268 727.5,77.23713676341416 735,130.4078945773304 742.5,142.45863908999362 750,120.73456917017882 750,250" fill="#2C3930" stroke="none" stroke-width="3"></polyline>
        </g>
      </svg>
      <p>The solution: the smaller the difference in the x value, the smoother the resulting polyline will be. All I need to do is divide the x value by a larger number. After some trial an error, I found that 300 gives me the look I'm going for: </p>

      <Blocks lang="javascript">{`function makePerlinPolyline() {
  ...
  let dy = noise(xpos/300, 0);
  ...
}`}</Blocks>


      <svg id="bottom" viewBox="0 0 750 250">
        <g id="holder">
          <polyline id="perline" points="0,250 0,125 7.5,133.16218621522998 15,141.0805777446289 22.5,148.52050110525417 30,155.26520525 37.5,161.12420081100123 45,165.95662163951306 52.5,169.71795087912741 60,172.44676894342987 67.5,174.23519301704667 75,175.20651838094568 82.5,175.49799186188233 90,175.24842117765937 97.5,174.58951659203882 105,173.6399629320236 112.5,172.50138004231138 120,171.25549704126473 127.5,169.96204029973546 135,168.6570168885367 142.5,167.35126433226318 150,166.0293338665245 157.5,164.64897802247907 165,163.1417242568308 172.5,161.41523450718452 180,159.35837598184588 187.5,156.85016118979487 195,153.77395518066416 202.5,150.03859519611046 210,145.60832243297983 217.5,140.542046218022 225,134.9957777828231 232.5,129.16014584417593 240,123.24943975310353 247.5,117.51182516593187 255,112.20371434171037 262.5,107.56028997214679 270,103.77423560622682 277.5,100.98214930145238 285,99.25824100716412 292.5,98.61513700570515 300,99.0117226499569 307.5,100.36242312392713 315,102.55269854378898 322.5,105.47121039378183 330,109.00173675878607 337.5,113.01058260464671 345,117.342540449725 352.5,121.8236081509791 360,126.26870213573156 367.5,130.4927218558279 375,134.32341688406672 382.5,137.6145819135932 390,140.25815695938786 397.5,142.19384029705603 405,143.4148301078297 412.5,143.96829743002752 420,143.94915784619155 427.5,143.48565236171524 435,142.71516915501385 442.5,141.74902814006623 450,140.6677759385388 457.5,139.61537757209132 465,138.7973297915712 472.5,138.43242268016854 480,138.71659777413896 487.5,139.79827394887639 495,141.76349514833458 502.5,144.6293811366939 510,148.3444677497042 517.5,152.7946066192964 525,157.8131560388505 532.5,163.19423452793632 540,168.70782674440062 547.5,174.11552767836565 555,179.18568554702816 562.5,183.70665649109867 570,187.49681505331247 577.5,190.4098734966565 585,192.3339502948098 592.5,193.1826953320781 600,192.88213668782905 607.5,191.3875066320183 615,188.70482195921196 622.5,184.89282445259798 630,180.06100773558953 637.5,174.36318239775716 645,167.98579826060705 652.5,161.13318254457803 660,154.01846286353947 667.5,146.8577130571183 675,139.8618865568518 682.5,133.20648080327345 690,126.96802081640823 697.5,121.14006766744784 705,115.6724119123374 712.5,110.4991061637709 720,105.55705387356672 727.5,100.7972182479782 735,96.19029377842014 742.5,91.72845416256024 750,87.42455441573355 750,250" fill="#2C3930" stroke="none" stroke-width="3"></polyline>
        </g>
      </svg>

      <p>I'm sure you noticed the wave animation at the top of the page. Well, it's very easy to add that effect to our current illustration. Instead of passing a constant value for the y coordinate in the noise function, we can pass a time variable that changes over time. This will create the illusion of the waves moving.</p>

      <p>We'll need to add a couple new variables - a "tick" variable to keep track of time, and a "tickIncrement" variable to control the speed of the animation.</p>

      <Blocks lang="javascript">{`
import { createNoise2D } from "https://cdn.skypack.dev/simplex-noise@4.0.0";

const noise = createNoise2D();
const w = 750;
const h = 250;
const totalPoints = 100;

let tick = 0;
const tickIncrement = 0.0075;`}</Blocks>

      <p>Next we need to update the function and pass in the tick variable as the second argument to the noise function. At the end of the function, we'll increment the tick variable by the tickIncrement value to animate the waves.</p>

      <Blocks lang="javascript">{`const mapRange = (value, inMin, inMax, outMin, outMax) => 
  ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

function makePerlinPolyline() {
  const dx = w / totalPoints;
  let pointString = \`0,\${h} \`;
  let xpos = 0;
  for (let i = 0; i < totalPoints + 1; i++) {
    xpos = i * dx;
    let dy = noise(xpos/300, tick);
    let ypos = mapRange(dy, -1, 1, 50,200);
    pointString += \`\${xpos},\${ypos} \`;
  }
  pointString += \`\${w},\${h}\`;
  const perlineLine = document.getElementById("perline");
  perlineLine.setAttribute("points", pointString);
  tick += tickIncrement;
}`}</Blocks>

      <p>Finally we'll need to call the <strong>makePerlinPolyline</strong> function repeatedly to update the animation. We can do this using the requestAnimationFrame function.</p>

      <Blocks lang="javascript">{`function update(){
  makePerlinPolyline();
  window.requestAnimationFrame(update);
}`}</Blocks>

      <p>I've created a codepen with this animation to make it easier to explore and play with thhe code. This codepen has two sliders: a "smoothness" slider that changes the value that we divide the x position by in the noise function, making the curves more or less wavy, and a "speed" slider that changes the value of the tickIncrement variable,  making the waves move faster or slower. Make sure to experiment with this and some other values to see how they affect the animation.</p>

      <PerlineWaveDemo />

      <p>This is just a simple example of how you can use Perlin noise to create your animations. We've been looking at motion, but you can use it to animate colors as well, as I've done in the codepen below. Have fun experimenting!</p>

      <PerlineColorDemo />

    </>
  );
};

export default PerlinNoise;




