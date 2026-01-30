import Blocks from "@/components/blocks";
import { GsapDemo } from "@/components/gsap";

const GreensockIntro = () => {
  return (
    <>
      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/JojPMMz"}
        target="_blank"
      rel="noopener noreferrer"
      >
        {"codepen practice page"}
      </a>

      <h1>Greensock Animation Platform (GSAP)</h1>

      <h2>Intro</h2>

      <GsapDemo />

      <p>
        <strong>GSAP</strong> (GreenSock Animation Platform) is a powerful
        JavaScript library used for creating high-performance animations that
        work in all major browsers. It allows developers to animate CSS
        properties, SVG, canvas, and more with great control and precision. GSAP
        is known for its speed, reliability, and ease of use, making it a
        popular choice for both simple and complex animations in web
        development.
      </p>

      <p>
        An in depth exploration of GSAP could be it's own course, so we're just
        going to focus on <em>some</em> of the many ways GSAP can be used to
        animate SVG elements.
      </p>

      <h3>GSAP methods</h3>

      <p>
        We'll learn about the three main gsap methods, <strong>gsap.to()</strong>,{" "}
        <strong>gsap.from()</strong>, and <strong>gsap.fromTo()</strong>.
      </p>

      <h3>Timelines</h3>

      <p>
        The most powerful tool in the GSAP library, timelines allow you to chain
        individual tweens together to create complex animation sequences.
      </p>

      <h3>Playback control</h3>

      <p>
        The GSAP library gives you the ability to control your tweens once
        created, including the ability to play, pause, reverse and resume your
        animations
      </p>

      <h3>Animating object properties</h3>

      <p>
        GSAP's ability to tween numeric object properties gives you the ability
        to manipulate SVG elements in very unique and powerful ways.
      </p>
    </>
  );
};

export default GreensockIntro;
