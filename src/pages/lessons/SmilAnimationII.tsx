import Blocks from "@/components/blocks";
import { SuperExample } from "@/components/smilII";

const SmilAnimationII = () => {
  return (
    <>
      <h2>&lt;animateMotion&gt;</h2>

      <p>The animateMotion element allows you to animate an object along a path.</p>

      <SuperExample />

      <p>
        Let's start by animating a circle along a star path. First we create the
        circle and the star. Make sure to put the circle at the 0,0 coordinate.
      </p>

      <Blocks>{`<svg width="500" height="500" viewBox="0 0 500 500">
  <path
    d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
    fill="none"
    stroke="black"
    stroke-width="2"
  />
  <circle cx="0" cy="0" r="10" fill="black"></circle>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="0" cy="0" r="10" fill="black"></circle>
      </svg>

      <p>
        Now let's add the animateMotion element. You'll see that it looks
        similar to what you'd see with <strong>&lt;animate&gt;</strong> and{" "}
        <strong>&lt;animateTransform&gt;</strong> except for the path attribute.
      </p>

      <Blocks highlight="9,10,11,12,13">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <path
    d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
    fill="none"
    stroke="black"
    stroke-width="2"
  />
  <circle cx="0" cy="0" r="10" fill="black">
        <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            path="" />
    </circle>
</svg>`}</Blocks>

      <p>
        Now let's copy the "d" contents of the path and paste it into the "path"
        attribute of the animateMotion element.
      </p>

      <Blocks highlight="3,13">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <path
    d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
    fill="none"
    stroke="black"
    stroke-width="2"
  />
  <circle cx="0" cy="0" r="10" fill="black">
        <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z" />
    </circle>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="0" cy="0" r="10" fill="black">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          />
        </circle>
      </svg>

      <p>
        Something that may have been lost in the example is how the object being
        animated (in this case, the circle) has to be centered at the origin.
        Check out what happens when the circle is NOT centered on the origin.
      </p>

      <Blocks>{`<circle cx="50" cy="50" r="10" fill="black"> ...`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="10" fill="black">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          />
        </circle>
      </svg>

      <p>
        Let's try to replicate a simple version of the car traveling on the road
        shown in the intro to this section. Instead of a car, we'll use a simple
        rectangle. Notice how the rectangle is drawn so that it's center sits at
        the origin.
      </p>

      <Blocks highlight="3">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <path .../>
  <rect x="-15" y="-7" width="30" height="14" fill="black">
    <animateMotion .../>
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <rect x="-15" y="-7" width="30" height="14" fill="black">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          />
        </rect>
      </svg>

      <p>
        The rectangle is properly centered, but we want its orientation to match
        that of the path, so that it always points in the direction of the
        animation.
      </p>

      <p>
        Fortunately for us, it's an easy fix. Simply add the rotate attribute
        and set it to "auto."
      </p>

      <Blocks highlight="9,10">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <path
    d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
    fill="none"
    stroke="black"
    stroke-width="2"
  />
  <rect x="-15" y="-7" width="30" height="14" fill="black">
    <animateMotion
      rotate="auto"
      dur="8s"
      begin="0s"
      repeatCount="indefinite"
      path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
    />
  </rect>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <rect x="-15" y="-7" width="30" height="14" fill="black">
          <animateMotion
            rotate="auto"
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          />
        </rect>
      </svg>

      <p>
        What if we want to animate a more complex object around the path, like
        this car?
      </p>

      <br />

      <svg width="50" height="29" viewBox="0 0 50 29" fill="none">
        <path
          d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z"
          fill="#A50000"
        />
        <path
          d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
          fill="black"
        />
        <path
          d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
          fill="black"
        />
        <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
        <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
        <path d="M33.5 0H32V3H34.5L33.5 0Z" fill="#A50000" />
        <path d="M33.5 29H32V26H34.5L33.5 29Z" fill="#A50000" />
        <path
          d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
          fill="#E8E6E6"
        />
        <path
          d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
          fill="#E8E6E6"
        />
      </svg>

      <br />

      <p>
        Let's add the car to &lt;defs&gt;, and place it in the svg with the
        &lt;use&gt; element
      </p>

      <Blocks highlight="2,3,4,5,6,8">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <g id="nice_car">
      <path .../>
    </g>
  </defs>
  <path .../>
  <use href="#nice_car" x="0" y="0" />
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <g id="nice_car">
            <path
              d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z"
              fill="#A50000"
            />
            <path
              d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
              fill="black"
            />
            <path
              d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
              fill="black"
            />
            <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
            <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
            <path d="M33.5 0H32V3H34.5L33.5 0Z" fill="#A50000" />
            <path d="M33.5 29H32V26H34.5L33.5 29Z" fill="#A50000" />
            <path
              d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
              fill="#E8E6E6"
            />
            <path
              d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
              fill="#E8E6E6"
            />
          </g>
        </defs>
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <use href="#nice_car" x="0" y="0" />
      </svg>

      <p>
        Now we'll animate it. As you can see, the animation is off, just like
        the rectangle we animated earlier.
      </p>

      <Blocks highlight="2,3,4,5,6,8,9,10,11">{`<svg width="500" height="500" viewBox="0 0 500 500">
    <defs>
        <g id="nice_car">
        <path .../>
        </g>
    </defs>
    <path .../>
    <use href="#nice_car" x="0" y="0">
        <animateMotion dur="8s" begin="0s" repeatCount="indefinite" rotate="auto"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z" />
    </use>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <g id="nice_car_2">
            <path
              d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z"
              fill="#A50000"
            />
            <path
              d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
              fill="black"
            />
            <path
              d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
              fill="black"
            />
            <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
            <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
            <path d="M33.5 0H32V3H34.5L33.5 0Z" fill="#A50000" />
            <path d="M33.5 29H32V26H34.5L33.5 29Z" fill="#A50000" />
            <path
              d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
              fill="#E8E6E6"
            />
            <path
              d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
              fill="#E8E6E6"
            />
          </g>
        </defs>
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <use href="#nice_car_2" x="0" y="0">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            rotate="auto"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          />
        </use>
      </svg>

      <p>
        In order to center the car at the origin, we'll need to add a transform
        to it's group. Since the car is 50x30, we'll need to translate it by -25
        and -15 to center it. Now the animation looks much better!
      </p>

      <Blocks highlight="3">{`<svg width="500" height="500" viewBox="0 0 500 500">
    <defs>
        <g id="nice_car" transform="translate(-25 -15)">
        <path .../>
        </g>
    </defs>
    <path .../>
    <use href="#nice_car" x="0" y="0">
        <animateMotion dur="8s" begin="0s" repeatCount="indefinite" rotate="auto"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z" />
    </use>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <g id="nice_car_3" transform="translate(-25 -15)">
            <path
              d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z"
              fill="#A50000"
            />
            <path
              d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
              fill="black"
            />
            <path
              d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
              fill="black"
            />
            <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
            <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
            <path d="M33.5 0H32V3H34.5L33.5 0Z" fill="#A50000" />
            <path d="M33.5 29H32V26H34.5L33.5 29Z" fill="#A50000" />
            <path
              d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
              fill="#E8E6E6"
            />
            <path
              d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
              fill="#E8E6E6"
            />
          </g>
        </defs>
        <path
          d="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <use href="#nice_car_3" x="0" y="0">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            rotate="auto"
            path="M249.5 97L283.738 202.375H394.536L304.899 267.5L339.137 372.875L249.5 307.75L159.863 372.875L194.101 267.5L104.464 202.375H215.262L249.5 97Z"
          />
        </use>
      </svg>

      <p>
        As a final touch, lets swap out the star path for another star with
        rounded corners, so the car can turn more smoothly:
      </p>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <g id="nice_car_4" transform="translate(-25 -15)">
            <path
              d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z"
              fill="#A50000"
            />
            <path
              d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
              fill="black"
            />
            <path
              d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
              fill="black"
            />
            <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
            <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
            <path d="M33.5 0H32V3H34.5L33.5 0Z" fill="#A50000" />
            <path d="M33.5 29H32V26H34.5L33.5 29Z" fill="#A50000" />
            <path
              d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
              fill="#E8E6E6"
            />
            <path
              d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
              fill="#E8E6E6"
            />
          </g>
        </defs>
        <path
          d="M249.5 97C283.738 96 263 193 283.738 202.375C304.477 211.75 384.072 163.75 394.536 202.375C405 241 310.798 247 304.899 267.5C299 288 373.376 351.75 339.137 372.875C304.899 394 277 308 249.5 307.75C222 307.5 194.101 396 159.863 372.875C125.624 349.75 204 288 194.101 267.5C184.202 247 92.9277 238.75 104.464 202.375C116 166 205 217 215.262 202.375C225.523 187.75 215.262 98 249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <use href="#nice_car_4" x="0" y="0">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            rotate="auto"
            path="M249.5 97C283.738 96 263 193 283.738 202.375C304.477 211.75 384.072 163.75 394.536 202.375C405 241 310.798 247 304.899 267.5C299 288 373.376 351.75 339.137 372.875C304.899 394 277 308 249.5 307.75C222 307.5 194.101 396 159.863 372.875C125.624 349.75 204 288 194.101 267.5C184.202 247 92.9277 238.75 104.464 202.375C116 166 205 217 215.262 202.375C225.523 187.75 215.262 98 249.5 97Z"
          />
        </use>
      </svg>

      <h2>mpath</h2>

      <p>
        If you want multiple objects to move along the same path, you can use
        the mpath element to specify the path for animateMotion element (instead
        of using the path attribute). Pass the path via the href attribute.
      </p>

      <pre>
        <code>{`<mpath href="#path-id" />`}</code>
      </pre>

      <Blocks highlight="2,4,5,6">{`<svg width="500" height="500" viewBox="0 0 500 500">
  <path id="starfish" .../>
    <use href="#nice_car" x="0" y="0" fill="red">
        <animateMotion dur="8s" begin="0s" repeatCount="indefinite" rotate="auto">
            <mpath href="#starfish" />
        </animateMotion>
    </use>
</svg>`}</Blocks>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <g id="nice_car_5" transform="translate(-25 -15)">
            <path d="M0 6.0402C0 3.81542 1.81533 2.01815 4.04 2.0404L46.04 2.4604C48.2334 2.48233 50 4.26667 50 6.4602V22.5398C50 24.7333 48.2334 26.5177 46.04 26.5396L4.04 26.9596C1.81534 26.9818 0 25.1846 0 22.9598V6.0402Z" />
            <path
              d="M30.5 7.5L37.4275 4C39.7363 12.8342 39.3008 17.3136 37.4275 25L30 22C31.9406 13.9053 32.6638 15.8211 30.5 7.5Z"
              fill="black"
            />
            <path
              d="M15 20.9762L10.1794 23C8.4478 15.8485 8.7744 12.2223 10.1794 6L15 8.42857C13.5446 14.9814 13.3771 14.2401 15 20.9762Z"
              fill="black"
            />
            <path d="M12 4H34L28.28 6H16.4L12 4Z" fill="black" />
            <path d="M34 25H12L17.72 23H29.6L34 25Z" fill="black" />
            <path d="M33.5 0H32V3H34.5L33.5 0Z" />
            <path d="M33.5 29H32V26H34.5L33.5 29Z" />
            <path
              d="M48.9117 7.44174C48.963 7.18489 49.1885 7 49.4505 7C49.754 7 50 7.24602 50 7.54951V11.4505C50 11.754 49.754 12 49.4505 12C49.1885 12 48.963 11.8151 48.9117 11.5583L48.5784 9.89223C48.5267 9.63331 48.5267 9.36669 48.5784 9.10777L48.9117 7.44174Z"
              fill="#E8E6E6"
            />
            <path
              d="M48.9117 17.4417C48.963 17.1849 49.1885 17 49.4505 17C49.754 17 50 17.246 50 17.5495V21.4505C50 21.754 49.754 22 49.4505 22C49.1885 22 48.963 21.8151 48.9117 21.5583L48.5784 19.8922C48.5267 19.6333 48.5267 19.3667 48.5784 19.1078L48.9117 17.4417Z"
              fill="#E8E6E6"
            />
          </g>
        </defs>
        <path
          id="starfish"
          d="M249.5 97C283.738 96 263 193 283.738 202.375C304.477 211.75 384.072 163.75 394.536 202.375C405 241 310.798 247 304.899 267.5C299 288 373.376 351.75 339.137 372.875C304.899 394 277 308 249.5 307.75C222 307.5 194.101 396 159.863 372.875C125.624 349.75 204 288 194.101 267.5C184.202 247 92.9277 238.75 104.464 202.375C116 166 205 217 215.262 202.375C225.523 187.75 215.262 98 249.5 97Z"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        <use href="#nice_car_5" x="0" y="0" fill="red">
          <animateMotion
            dur="8s"
            begin="0s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#starfish" />
          </animateMotion>
        </use>

        <use href="#nice_car_5" x="0" y="0" fill="green">
          <animateMotion
            dur="8s"
            begin="2s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#starfish" />
          </animateMotion>
        </use>
      </svg>

      <p>
        Check out the full example on{" "}
        <a href="https://codepen.io/aokorodu/pen/OJeKNVd" target="_blank">
          codepen.
        </a>
      </p>

      <h3>animate attributes</h3>

      <ol>
        <li>
          <strong>id</strong> - needed to chain animations, i.e
          begin="first.end"
        </li>
        <li>
          <strong>href</strong> - (needed if animate element is not encapsulated
          by the element you wish to animate)
        </li>
        <li>
          <strong>attributeName</strong>=&lt;name of attribute&gt;
        </li>
        <li>
          <strong>from</strong> - &lt;value&gt;
        </li>
        <li>
          <strong>to</strong> - &lt;value&gt;
        </li>
        <li>
          <strong>begin</strong> - &lt;value&gt;
          <ul>
            <li>time in seconds - ex. from="2s"</li>
            <li>
              time based on beginning of another animation -ex.
              from="firstAnim.begin",
            </li>
            <li>
              time based on end of another animation - ex. from="firstAnim.end"
            </li>
            <li>
              time based on begin or end of another animation + time offset -
              ex. from="firstAnim.end+2s"
            </li>
            <li>click interaction - ex. begin="click"</li>
          </ul>
        </li>
        <li>
          <strong>dur</strong> - &lt;value&gt;
          <ul>
            <li>time in seconds (s) or milliseconds (ms) - dur="5s"</li>
          </ul>
        </li>
        <li>
          <strong>repeatCount</strong> - &lt;value&gt;
          <ul>
            <li>number - repeatCount="4"</li>
            <li>indefinite- ex. repeatCount="indefinite"</li>
          </ul>
        </li>
        <li>
          <strong>fill</strong>
          <ul>
            <li>freeze</li>
            <li>remove</li>
          </ul>
        </li>
        <li>
          <strong>calcMode</strong> - &lt;value&gt; - used to set pacing,
          animation curves, type of motion
          <ul>
            <li>linear</li>
            <li>discrete</li>
            <li>paced</li>
            <li>spline</li>
          </ul>
        </li>
        <li>
          <strong>values</strong>
          <ul>
            <li>
              Animation values, used with keyTimes to dictate the pace of the
              animation - ex. values="20; 50; 300"
            </li>
          </ul>
        </li>
        <li>
          <strong>keyTimes</strong>
          <ul>
            <li>
              List of values from 0 to 1 used to to dictate the pace of the
              animation - ex. keytimes="0; .3; .9; 1"
            </li>
          </ul>
        </li>
      </ol>

      <br />

      <h3>additional attributes for animateTransform:</h3>

      <ol>
        <li>
          <strong>attributeName</strong> - "transform"
        </li>
        <li>
          <strong>transform-origin</strong> - "&lt;x&gt; &lt;y&gt;" default is
          "0 0"
        </li>
        <li>
          <strong>type</strong> - "&lt;type keyword&gt;"
          <ul>
            <li>translate</li>
            <li>rotate</li>
            <li>scale</li>
            <li>skewX, skewY</li>
          </ul>
        </li>
      </ol>

      <h3>additional attributes for animateMotion:</h3>

      <ol>
        <li>
          <strong>path</strong> - "&lt;path data&gt;"
        </li>
        <li>
          <strong>mpath</strong> - &lt;mpath href="#id-of-path" /&gt;
        </li>
      </ol>
    </>
  );
};

export default SmilAnimationII;
