import Blocks from "@/components/blocks";
import {
  GSAPPlaybackStarter,
  PlaybackControlsNoScrub,
  PlaybackControlsScrub,
} from "@/components/gsap";

const GreensockPlaybackControls = () => {
  return (
    <>
      <h1>GSAP Playback Controls</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/xbxGEWp"}
        target="_blank"
      >
        {"codepen practice page"}
      </a>

      <h2>intro</h2>

      <p>
        GSAP provides several easy-to-use methods to control the playback of
        your individual animations and timelines. In this section we'll add
        playback controls to the animation that we created in the prior lesson.
        I've created a starter page for this lesson{" "}
        <a href="https://codepen.io/aokorodu/pen/xbxGEWp" target="_blank">
          here
        </a>
        .
      </p>

      <GSAPPlaybackStarter />

      <p>
        You'll notice that the starter page contains four buttons below the SVG
        - <strong>play</strong>, <strong>pause</strong>, <strong>reverse</strong>{" "}
        and <strong>restart</strong>, as well as range slider input that will be
        used later as a video scrub bar. I've created variables for all the UI
        elements:
      </p>

      <Blocks>{`// ui
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const reverseButton = document.querySelector("#reverse");
const restartButton = document.querySelector("#restart");
const scrubber = document.querySelector("#scrubber");`}</Blocks>

      <p>
        I've also changed the animation itself so that it only runs once by
        removing the <strong>repeat:-1</strong> and <strong>yoyo:true</strong>{" "}
        properties;
      </p>

      <Blocks>{`theTween = gsap.timeline();`}</Blocks>

      <h2>play, pause, reverse, & restart</h2>

      <p>
        The playback controls are incredibly simple to use - all you need to do
        is call the tween's <strong>play()</strong>, <strong>pause()</strong>,{" "}
        <strong>reverse()</strong> or <strong>restart()</strong> method.
      </p>

      <p>Let's create our methods in the starter codepen.</p>

      <Blocks>{`function play(){
    theTween.play();
}
function pause(){
    if(theTween != null) theTween.pause();
}
function reverse(){
    if(theTween != null) theTween.reverse();
}
function restart(){
    if(theTween != null){
        theTween.restart();
        return;
    }
    theTween.play();
}`}</Blocks>

      <p>Let's hook these methods up to our buttons.</p>

      <Blocks>{`function initUI(){
  playButton.addEventListener("click", play);
  pauseButton.addEventListener("click", pause)
  reverseButton.addEventListener("click", reverse);
  restartButton.addEventListener("click", restart)
}
function play(){
    theTween.play();
}
function pause(){
    if(theTween != null) theTween.pause();
}
function reverse(){
    if(theTween != null) theTween.reverse();
}
function restart(){
    if(theTween != null){
        theTween.restart();
        return;
    }
    theTween.play();
}`}</Blocks>

      <PlaybackControlsNoScrub />

      <h2>adding a scrub bar</h2>

      <p>
        Next we'll add a slider that will allow you to "scrub" through the
        animation. The slider will also act as an animation progress bar. This
        is the html for our slider.
      </p>

      <Blocks>{`<label>
  <span id="slider-label">animation scrubber</span>
  <input id="scrubber" type="range" value="0" min="0" max="1" step="0.01">
</label>`}</Blocks>

      <p>
        Note that GSAP measures the progress of it's animations with a value
        ranging from 0 to 1, so I've given the slider corresponding min and max
        amounts.
      </p>

      <p>
        In order to create a progress bar/scrubber we'll need to know how long
        the animation is and the progress of the animation at any given time.
        Once we have those values, we'll be able to set the progress of the
        animation with our slider.
      </p>

      <p>First let's create a variable to store our animation duration.</p>

      <Blocks highlight="3">{`// tween variables
let theTween = null;
let animationDuration = 0;`}</Blocks>

      <p>
        We can set the value of animationDuration using the{" "}
        <strong>duration()</strong> method once we create our timeline.
      </p>

      <Blocks>{`theTween.duration();`}</Blocks>

      <Blocks>{`function animate() {
  theTween = gsap.timeline();
  theTween
    .fromTo(...
     // tween code
    );
  animationDuration = theTween.duration();
}`}</Blocks>

      <p>
        GSAP allows you to pass a callback function to your tween that will
        execute every time the animation updates. We pass the callback to our
        tween using the <strong>vars</strong> object, which we've used
        previously to configure our <strong>repeat</strong> and{" "}
        <strong>yoyo</strong> values. The property we'll need to set is{" "}
        <strong>onUpdate</strong>, and we'll pass it a function called{" "}
        <strong>updateScrubber</strong> which we'll create in a second.
      </p>

      <Blocks>{`function animate() {
  theTween = gsap.timeline({ onUpdate:updateScrubber});
  // rest of our animate code`}</Blocks>

      <p>
        The <strong>updateScrubber()</strong> method will be used to update the
        slider position. In order to do so we'll need to know how much time has
        elapsed in the animation, and then devide that by the animationDuration.
        We'll then use that to set the value of our scrubber.
      </p>

      <Blocks>{`function updateScrubber(){
  const val = theTween.time()/animationDuration;
  scrubber.value = val;
}`}</Blocks>

      <p>
        Now let's add the scrub functionality. We'll need to add an "input"
        listener to the slider, get it's value, and then set our animation's
        progress accordingly. First let's update our <strong>initUI</strong>{" "}
        method by adding the input listener and setting out eventHandler.
      </p>

      <Blocks highlight="6,7">{`function initUI() {
  playButton.addEventListener("click", play);
  pauseButton.addEventListener("click", pause);
  reverseButton.addEventListener("click", reverse);
  restartButton.addEventListener("click", restart);
  // slider
  scrubber.addEventListener("input", sliderInputHandler);
}`}</Blocks>

      <p>
        Now let's create the handler. We'll get the "seek time" for our
        animation by multiplying the scrubber value by the animation duration,
        then we'll set the animation to that time using the <strong>seek</strong>{" "}
        method.
      </p>

      <Blocks>{`someTween.seek(someTime);`}</Blocks>

      <Blocks>{`function sliderInputHandler(){
  const seekTime = scrubber.value * animationDuration;
  theTween.seek(seekTime)
}`}</Blocks>

      <p>
        We don't want our scrubber "playhead" to move while we're scrubbing the
        animation, so we'll add some mouse event handlers to pause the animation
        every time the cursur mouses over the slider. We'll also add a handler
        to play the animation once the user mouses out. First we'll add the
        mouse events to the slider in our <strong>initUI</strong> method:
      </p>

      <Blocks highlight="6,7,8,9">{`function initUI() {
  playButton.addEventListener("click", play);
  pauseButton.addEventListener("click", pause);
  reverseButton.addEventListener("click", reverse);
  restartButton.addEventListener("click", restart);
  // slider
  scrubber.addEventListener("input", sliderInputHandler);
  scrubber.addEventListener("mouseover",sliderOverHandler);
  scrubber.addEventListener("mouseout", sliderOutHandler);
}`}</Blocks>

      <p>
        Now let's create the handlers that pause/play the animation when the
        user mouses over/out of the slider:
      </p>

      <Blocks>{`function sliderOverHandler(){
  theTween.pause();
};
function sliderOutHandler(){
  theTween.play();
}`}</Blocks>

      <p>And that's it! Here's the final version on codepen.</p>

      <PlaybackControlsScrub />
    </>
  );
};

export default GreensockPlaybackControls;
