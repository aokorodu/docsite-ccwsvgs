import Blocks from "@/components/blocks";
import { DynamicAspectRatio } from "@/components/aspectratio";

const AspectRatio = () => {
  return (
    <>
      <h1>Aspect Ratio</h1>

      <a
        className="codepenLink"
        href={"https://codepen.io/aokorodu/pen/poYwjVL"}
        target="_blank"
      >
        {"Aspect Ratio codepen practice page"}
      </a>

      <h3>note:</h3>

      <p>
        The majority of this section discusses aspec-ratio in terms of the
        entire SVG, but towards the end we'll briefly discuss how it applies to
        the <strong>image</strong> element.
      </p>

      <h2>overview</h2>

      <p>
        The aspect ratio is the ratio of an objects width to it's height. In
        this example the aspect ratio of the top box, where the width = height,
        is 1:1. The bottom box is twice as wide as it is tall, so the aspect
        ratio is 2:1
      </p>

      <img src="/aspect-ratio_example_1.png" alt="aspect ratio example 1" />

      <h2>different aspect ratios</h2>

      <p>
        Imagine that you have an svg where the aspect ratio of the viewbox and
        viewport (svg width and height) are different. For example, what if the
        viewbox is square (500 500) and the viewport is landscape rectangular
        (width=1000px height=500px). How will the svg be displayed?
      </p>

      <pre>
        <code>{`<svg width="1000px" height="500px" viewbox="0 0 500 500">...`}</code>
      </pre>

      <img src="/aspect-ratio_example_2.png" alt="aspect ratio example 2" />

      <p>
        Without any type of css the svg will occupy the center of the container,
        like this.
      </p>

      <DynamicAspectRatio width="500" height="250" viewbox="0 0 500 500" />

      <p>
        The <strong>default behavior</strong>: When the aspect ratio of the svg
        is different from that of the viewport, the image <strong>shrinks</strong>{" "}
        so that all of the image is visible This behavior can be changed with
        the <strong>preserveAspectRatio</strong> attribute.
      </p>

      <img src="/aspect-ratio_example_4.png" alt="aspect ratio example 4" />

      <h2>preserveAspectRatio</h2>

      <p>Using the preserveAspectRatio attribute, you can make the svg image</p>

      <p>(1) <strong>stretch</strong> to fill the viewport,</p>

      <p>
        (2) <strong>expand</strong> to fill the viewport without changing the
        aspect ratio, or
      </p>

      <p>
        (3) <strong>shrink</strong> down to a size where the entire image is
        visible without changing the aspect ratio,
      </p>

      <img src="/aspect-ratio_example_5.png" alt="aspect ratio example 5" />

      <p>
        The preserveAspectRatio is actually made up of three different values
      </p>

      <pre>
        <code>{`preserveAspectRatio= "<x-alignment><y-alignment>  <meet or slice>"`}</code>
      </pre>

      <p>
        <strong>x-alignment</strong> describes how the svg will align with the
        viewport on the x-axis
      </p>

      <p>
        <strong>y-alignment</strong> describes how the svg will align with the
        viewport on the y-axis
      </p>

      <p>
        <strong>meet or slice</strong> describes weather the image will scale
        down so that the entire svg is visible, or scale up so that svg covers
        the entire viewport
      </p>

      <p>
        The default value is <strong>xMidyMid meet</strong>. In other words, the
        image aligns to the middle of the viewport on the x-axis (
        <strong>xMid</strong>), it aligns to the middle of the container on the
        y-axis (<strong>yMid</strong>), and the image scales down so that it's
        entirely visible within the container (<strong>meet</strong>).
      </p>

      <pre>
        <code>{`preserveAspectRatio="xMidyMid meet"`}</code>
      </pre>

      <Blocks highlight="5">{`<svg
   width="500px"
   height="250px"
   viewbox="0 0 500"
   preserveAspectRatio="xMidYMid meet">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="500"
        height="250"
        viewbox="0 0 500 500"
        aspectRatio="xMidYMid meet"
      />

      <h2>alignment examples</h2>

      <p>
        Let's change the x-alignment to <strong>xMin</strong>, so that the image
        aligns to the minimum x position of the viewport.
      </p>

      <Blocks highlight="5">{`<svg
   width="500px"
   height="250px"
   viewbox="0 0 500"
   preserveAspectRatio="xMinYMid meet">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="500"
        height="250"
        viewbox="0 0 500 500"
        aspectRatio="xMinYMid meet"
      />

      <p>
        Now let's change the x-alignment to <strong>xMax</strong>, so that the
        image aligns to the maximum x position of the viewport.
      </p>

      <Blocks highlight="5">{`<svg
   width="500px"
   height="250px"
   viewbox="0 0 500"
   preserveAspectRatio="xMaxYMid meet">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="500"
        height="250"
        viewbox="0 0 500 500"
        aspectRatio="xMaxYMid meet"
      />

      <p>
        The y-alignment works exactly the same. This is what a yMax SVG can look
        like:
      </p>

      <Blocks highlight="5">{`<svg
   width="250px"
   height="500px"
   viewbox="0 0 500"
   preserveAspectRatio="xMidYMax meet">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="250"
        height="500"
        viewbox="0 0 500 500"
        aspectRatio="xMidYMax meet"
      />

      <h2>meet vs. slice examples</h2>

      <p>
        Now let's change the "meetOrSlice" value to slice. As you can see, the
        image scales up so that it fills the entire viewport. The the image is
        bigger vertically than the viewport, so you can only see a "slice" of
        it. Since the y-alignment is yMid the center of the image is aligned to
        the center of the viewport on the y-axis.
      </p>

      <Blocks highlight="5">{`<svg
   width="500px"
   height="250px"
   viewbox="0 0 500"
   preserveAspectRatio="xMidYMid slice">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="500"
        height="250"
        viewbox="0 0 500 500"
        aspectRatio="xMidYMid slice"
      />

      <p>
        If we change the y-alignment value to yMin, the top of the image is
        aligned to the top of the viewport
      </p>

      <Blocks highlight="5">{`<svg
   width="500px"
   height="250px"
   viewbox="0 0 500"
   preserveAspectRatio="xMidYMin slice">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="500"
        height="250"
        viewbox="0 0 500 500"
        aspectRatio="xMidYMin slice"
      />

      <p>
        Let's change the example a bit so that the container is in landscape
        mode. The principles are all the same.
      </p>

      <Blocks highlight="5">{`<svg
   width="250px"
   height="500px"
   viewbox="0 0 500"
   preserveAspectRatio="xMidYMid slice">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="250"
        height="500"
        viewbox="0 0 500 500"
        aspectRatio="xMidYMid slice"
      />

      <Blocks highlight="5">{`<svg
   width="250px"
   height="500px"
   viewbox="0 0 500"
   preserveAspectRatio="xMinYMid slice">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="250"
        height="500"
        viewbox="0 0 500 500"
        aspectRatio="xMinYMid slice"
      />

      <p>
        But what if you don't care about the aspect ratio, and you just want the
        image to fill the container? Just set preserveAspectRatio to "none".
      </p>

      <Blocks highlight="5">{`<svg
   width="250px"
   height="500px"
   viewbox="0 0 500"
   preserveAspectRatio="none">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="250"
        height="500"
        viewbox="0 0 500 500"
        aspectRatio="none"
      />

      <Blocks highlight="5">{`<svg
   width="500px"
   height="250px"
   viewbox="0 0 500"
   preserveAspectRatio="none">...
</svg>`}</Blocks>

      <DynamicAspectRatio
        width="500"
        height="250"
        viewbox="0 0 500 500"
        aspectRatio="none"
      />

      <h2>Images</h2>

      <p>
        The <strong>preserveAspectRatio</strong> attribute can also be used with
        the image element. The examples below have a rectangle the same width,
        height, and position as the image so you can see the effect of using
        preserveAspectRatio.
      </p>

      <h3>xMidYMid meet</h3>

      <pre>
        <code>{`<image
    href="https://images.unsplash.com..."
    x="100"
    y="100"
    width="300"
    height="300"
    preserveAspectRatio="xMidYMid meet"
  />`}</code>
      </pre>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <image
          href="https://images.unsplash.com/photo-1722021244430-fd99e56a6f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxMjc0NzJ8&ixlib=rb-4.0.3&q=85"
          x="100"
          y="100"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid meet"
        />
        <rect
          x="100"
          y="100"
          width="300"
          height="300"
          stroke="black"
          fill="none"
        />
      </svg>

      <h3>xMidYMid slice</h3>

      <pre>
        <code>{`<image
    href="https://images.unsplash.com..."
    x="100"
    y="100"
    width="300"
    height="300"
    preserveAspectRatio="xMidYMid slice"
  />`}</code>
      </pre>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <image
          href="https://images.unsplash.com/photo-1722021244430-fd99e56a6f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxMjc0NzJ8&ixlib=rb-4.0.3&q=85"
          x="100"
          y="100"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
        />
        <rect
          x="100"
          y="100"
          width="300"
          height="300"
          stroke="black"
          fill="none"
        />
      </svg>

      <h3>xMinYMin meet</h3>

      <pre>
        <code>{`<image
    href="https://images.unsplash.com..."
    x="100"
    y="100"
    width="300"
    height="300"
    preserveAspectRatio="xMinYMin meet"
  />`}</code>
      </pre>

      <svg width="500" height="500" viewBox="0 0 500 500">
        <image
          href="https://images.unsplash.com/photo-1722021244430-fd99e56a6f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxMjc0NzJ8&ixlib=rb-4.0.3&q=85"
          x="100"
          y="100"
          width="300"
          height="300"
          preserveAspectRatio="xMinYMin meet"
        />
        <rect
          x="100"
          y="100"
          width="300"
          height="300"
          stroke="black"
          fill="none"
        />
      </svg>
    </>
  );
};

export default AspectRatio;
