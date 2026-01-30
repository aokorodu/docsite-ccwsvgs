import Blocks from "@/components/blocks";
import {
  TimlineDemo,
  GSAPTimelineStarter,
  TimlineDemoError,
  TimlineDemoErrorFix,
  TimlineDemoNoClip,
  GSAPTimelineEnder,
} from "@/components/gsap";

const GreensockTimelines = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/yyLNqoZ?editors=1010"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"codepen practice page"}
      </a>

      <h1>Timelines</h1>

      <h2>What is a Timeline?</h2>

      <p>
        The GSAP timeline is a powerful tool that allows you to create detailed,
        sequenced animations. Using "traditional" methods it can be difficult to
        create and magage manage complex animations involving multiple elements,
        but GSAP timelines makes the process simple and intuitive. In this
        lesson we're going to create the relativly simple animation below, but
        know that with timelines the only limit is your imagination!
      </p>

      <TimlineDemo />

      <h2>Recreating the example</h2>

      <p>
        I've created a starter page on codpen that contains all of the visual
        elements that we'll need to recreate the animation above{" "}
        <a
          href="https://codepen.io/aokorodu/pen/yyLNqoZ?editors=1010"
          target="_blank"
        rel="noopener noreferrer"
        >
          here.
        </a>
      </p>

      <GSAPTimelineStarter />

      <h3>Elements that we'll be animating</h3>

      <p>There are essentially three elements that we'll be animating</p>

      <p>
        1.The black circle with an id of <strong>circleHolder</strong> that
        starts off small, animates to the center of the svg and then expands to
        fill it. Our circle positioned at the cebter of the svg and has a radius
        of 400:
      </p>

      <Blocks>{`<g id="circleHolder" transform="translate(250 250)">
  <circle cx="0" cy="0" r="400" fill="black" stroke="none" />
</g>`}</Blocks>

      <p>
        2.A white line with an id of <strong>lineHolder</strong> that extends
        across the middle of the svg after the black circle fills the screen:
      </p>

      <Blocks>{`<g id="lineHolder" transform="translate(250 250) scale(1 1)">
  <path d="M-250,0 h500" stroke="white" stroke-width="2" />
</g>`}</Blocks>

      <p>
        3.And the individual text elements for each letter in "TEXT ANIMATION",
        each with a class of "letter". All the text elements are inside a group
        with the id of <strong>textHolder</strong>.
      </p>

      <Blocks>{`<g id="textHolder">
  <text x="90" y="230" text-anchor="middle" dominant-baseline="middle" class="letter">T</text>
  <text x="115" y="230" text-anchor="middle" dominant-baseline="middle" class="letter">E</text>
  <text x="140" y="230" text-anchor="middle" dominant-baseline="middle" class="letter">X</text>
  // other letters ...
</g>`}</Blocks>

      <h3>Creating the timeline object</h3>

      <p>The first thing we need to do is create our timeline object.</p>

      <Blocks>{`gsap.timeline( {vars} );`}</Blocks>

      <p>In the animate method let's put the following:</p>

      <Blocks>{`function animate(){
  theTween = gsap.timeline();
}`}</Blocks>

      <p>
        You can configure your timeline object by passing it a{" "}
        <strong>vars</strong> object that allows you to set various options. For
        example, we want our animation to <em>yoyo</em> and <em>repeat</em>, so
        we'll be including those properties in the vars object. Additionally,
        we'll add a <em>repeatDelay</em> of 1 second to introduce a slight delay
        between each repetition.
      </p>

      <Blocks>{`function animate(){
  theTween = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1});
}`}</Blocks>

      <p>
        The first part of our animation will be the circle animating down fron
        "off screen" to the center of the svg, so we'll need to add a{" "}
        <em>fromTo</em> animation to our timeline object. It will look something
        like this
      </p>

      <Blocks>{`theTween.fromTo(...)`}</Blocks>

      <Blocks>{`theTween = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1})
theTween.fromTo(
  "#circleHolder",
  { attr: { transform: "translate(250 -30) scale(.03)"} },
  { attr: { transform: "translate(250 250) scale(.03)"}, duration: dur, ease:"back"}
)`}</Blocks>

      <p>
        So in the <em>from</em> part of the animation I set the initial
        translate y position of the circle to -30, and set it's scale to 0.03 so
        that it looks like a little dot. In the <em>to</em> part of the
        animation I move it to the center of the svg (250,20), keeping it's
        scale at 0.03.
      </p>

      <p>
        In the next phase of the animation we'll be tweening the scale of the
        circle from .03 to it's full size (scale:1) so that it covers the entire
        svg. To do so we simply "chain" another <em>fromTo</em> animation to our
        current animation:
      </p>

      <Blocks>{`theTween.fromTo(...).fromTo(...)`}</Blocks>

      <Blocks>{`theTween = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1});
theTween.fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 -30) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(.03)"}, duration: dur, ease:"back"})
    .fromTo(
    "#circleHolder",
    { attr: { transform: "scale(.03)"} },
    { attr: { transform: "scale(1)"}, duration: dur})`}</Blocks>

      <p>
        You might notice a problem. The circle animates properly to the center,
        but when it expands it moves to the upper right hand corner, instead of
        expandig from the center of the svg. Why?
      </p>

      <TimlineDemoError />

      <p>
        The reason: whenever you use GSAP to animate the transform attribute,
        you need to explicitly set the translate location. If not, gsap will
        simply assume a translate position of (0 0). Let's make the correction:
      </p>

      <Blocks highlight="6-9">{`theTween = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1});
theTween.fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 -30) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(.03)"}, duration: dur, ease:"back"})
    .fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 250) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(1)"}, duration: dur})`}</Blocks>

      <TimlineDemoErrorFix />

      <p>
        Now let's animate the line. Since our 500px line is already centered
        inside the <em>lineHolder</em> container, all we need to do is animate
        the <em>lineHolder</em> element's scale from 0 to 1. Again, we need to
        make sure that we include the translate position of (250 250), so that
        the line expends from the center of our SVG.
      </p>

      <Blocks highlight="10,11,12,13">{`theTween = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1});
theTween.fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 -30) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(.03)"}, duration: dur, ease:"back"})
    .fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 250) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(1)"}, duration: dur})
    .fromTo(
    "#lineHolder",
    { attr: { transform: "translate(250 250) scale(0 1)"} },
    { attr: { transform: "translate(250 250) scale(1 1)"}, duration: dur})`}</Blocks>

      <p>
        Now let's animate the text. This is what our animation currently looks
        like after the line has finished animating.
      </p>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <rect x="0" y="0" width="500" height="500" fill="black" />
        <g transform="translate(250 250) scale(1 1)">
          <path d="M-250,0 h500" stroke="white" strokeWidth="2" />
        </g>
        <g id="holder">
          <g transform="translate(80, 230)" fill="white" fontSize="35">
            <text
              x="10"
              y="0"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              stroke="white"
            >
              {"T"}
            </text>
            <text x="35" y="0" textAnchor="middle" dominantBaseline="middle">
              {"E"}
            </text>
            <text x="60" y="0" textAnchor="middle" dominantBaseline="middle">
              {"X"}
            </text>
            <text x="85" y="0" textAnchor="middle" dominantBaseline="middle">
              {"T"}
            </text>
            <text x="135" y="0" textAnchor="middle" dominantBaseline="middle">
              {"A"}
            </text>
            <text x="160" y="0" textAnchor="middle" dominantBaseline="middle">
              {"N"}
            </text>
            <text x="185" y="0" textAnchor="middle" dominantBaseline="middle">
              {"I"}
            </text>
            <text x="210" y="0" textAnchor="middle" dominantBaseline="middle">
              {"M"}
            </text>
            <text x="235" y="0" textAnchor="middle" dominantBaseline="middle">
              {"A"}
            </text>
            <text x="260" y="0" textAnchor="middle" dominantBaseline="middle">
              {"T"}
            </text>
            <text x="285" y="0" textAnchor="middle" dominantBaseline="middle">
              {"I"}
            </text>
            <text x="310" y="0" textAnchor="middle" dominantBaseline="middle">
              {"O"}
            </text>
            <text x="335" y="0" textAnchor="middle" dominantBaseline="middle">
              {"N"}
            </text>
          </g>
        </g>
      </svg>

      <p>
        We want the text to "pop up" over the line once it finishes scaling. We
        can use the technique we learned last lesson of passing a class name (in
        this case <strong>letter</strong>) to the fromTo method and adding a
        stagger.
      </p>

      <Blocks highlight="14,15,16,17,18">{`theTween = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1});
theTween.fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 -30) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(.03)"}, duration: dur, ease:"back"}
  ).fromTo(
    "#circleHolder",
    { attr: { transform: "translate(250 250) scale(.03)"} },
    { attr: { transform: "translate(250 250) scale(1)"}, duration: dur}
  ).fromTo(
    "#lineHolder",
    { attr: { transform: "translate(250 250) scale(0 1)"} },
    { attr: { transform: "translate(250 250) scale(1 1)"}, duration: dur}
  ).fromTo(
    ".letter",
    { attr: { y:100} },
    { attr: { y:0 }, duration: dur, stagger:.1, ease:"back"}
  );`}</Blocks>

      <TimlineDemoNoClip />

      <p>
        Now the only thing remaining is to make the letters look like they're
        popping up from the line. To do this we'll define a{" "}
        <strong>clipPath</strong> and then add it to the textHolder (the group
        that contains all the letters). As you recall from the chapter on
        reusable elements, a clipPath defines a rectangular area and restricts
        the visibility of elements to within that specified area, effectively{" "}
        <em>hiding</em> any parts of the elements that fall <em>outside</em>{" "}
        this area. Our clipPath will only allow the text elements to be visible
        when they animate above the line. Our clipPath will simply be a
        rectangle that covers the top half of our SVG.
      </p>

      <p>
        We'll define our clipPath in the <strong>defs</strong> section, and then
        apply it to the texHolder (which contains all the letters).
      </p>

      <Blocks>{`<defs>
  <clipPath id="text-clip-path">
    <rect x="0" y="0" width="500" height="250" />
  </clipPath>
</defs>
...
<g id="textHolder" clip-path="url(#text-clip-path)">`}</Blocks>

      <p>
        And that's it! You can find the final code{" "}
        <a href="https://codepen.io/aokorodu/pen/gbOpjoX" target="_blank" rel="noopener noreferrer">
          here.
        </a>
      </p>

      <GSAPTimelineEnder />
    </>
  );
};

export default GreensockTimelines;
