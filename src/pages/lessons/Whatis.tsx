import Blocks from "@/components/blocks";

const Whatis = () => {
  return (
    <>
      <h1>So, what's an SVG?</h1>

      <h2>What it's NOT</h2>

      <p>
        Most of the graphics you see on web pages today are what's known as{" "}
        <strong>bitmap</strong> images - PNGs, JPEGs, and GIFs.
      </p>

      <img src="/bitmap_1.png" alt="Bitmap example" />

      <p>
        Bitmap Images are essentially a grid of pixels - lots and lots of tiny,
        colored, squarish dots - that, when combined, make up an image.
      </p>

      <img src="/bitmap_resolution.png" alt="Bitmap resolution" />

      <p>
        If you were to open up a png or jpg file with a text editor, you'd see
        something like this - rows and rows of unintelligible (to humans) text
        and numbers. All this data describes every single pixel in a bitmap
        image.
      </p>

      <img src="/bitmap_insides.png" alt="Bitmap file contents" />

      <h2>What it IS</h2>

      <p>
        SVG is a markup language used to create graphics. It's essentially a way
        to describe two-dimensional images using text that can then be rendered
        at any size by the browser.
      </p>

      <p>
        SVG stands for <strong>Scaleable Vector Graphic</strong>. A{" "}
        <em>vector graphic</em> is an image formed by mathematical paths defined
        by points, lines, curves and shapes.
      </p>

      <p>
        <strong>note:</strong> Don't worry about understanding any of the SVG
        code below. These are just examples of what SVG code actually looks
        like. We'll explain how everything works during the course!
      </p>

      <svg
        width="300"
        height="300"
        viewBox="0 0 362 362"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="181" cy="181" r="181" fill="#F3C729" />
      </svg>

      <Blocks title={"SIMPLE CIRCLE"}>{`<svg
  width="500"
  height="500"
  viewBox="0 0 362 362"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="181" cy="181" r="181" fill="#F3C729" />
</svg>`}</Blocks>

      <svg width="362" height="362" viewBox="0 0 362 362" fill="none">
        <circle cx="181" cy="181" r="181" fill="#F3C729" />
        <circle cx="118.5" cy="140.5" r="12.5" fill="black" />
        <circle cx="243.5" cy="140.5" r="12.5" fill="black" />
        <path
          d="M80 224C121 271 241 276 291 224"
          stroke="black"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <line
          x1="110.107"
          y1="111.014"
          x2="87.0145"
          y2="128.893"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="-5"
          x2="34.2046"
          y2="-5"
          transform="matrix(0.790724 0.612173 0.612173 -0.790724 244 99)"
          stroke="black"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      <Blocks title={"SMILEY FACE SVG"}>{`<svg width="362" height="362" viewBox="0 0 362 362" fill="none">
  <circle cx="181" cy="181" r="181" fill="#F3C729" />
  <circle cx="118.5" cy="140.5" r="12.5" fill="black" />
  <circle cx="243.5" cy="140.5" r="12.5" fill="black" />
  <path
    d="M80 224C121 271 241 276 291 224"
    stroke="black"
    stroke-width="13"
    stroke-linecap="round"
  />
  <line
    x1="110.107"
    y1="111.014"
    x2="87.0145"
    y2="128.893"
    stroke="black"
    stroke-width="10"
    stroke-linecap="round"
  />
  <line
    x1="5"
    y1="-5"
    x2="34.2046"
    y2="-5"
    transform="matrix(0.790724 0.612173 0.612173 -0.790724 244 99)"
    stroke="black"
    stroke-width="10"
    stroke-linecap="round"
  />
</svg>`}</Blocks>

      <h2>Infinite Scaleability</h2>

      <p>
        Since an SVG is drawn by the browser using math, it's{" "}
        <strong>infinitely scalable</strong>. No matter how big (or small) they
        get, their lines stay crisp and sharp. Bitmaps, on the other hand,
        become fuzzy and pixilated once they are scaled larger than their actual
        size.
      </p>

      <img src="/svg_png_comparison_small.png" alt="SVG PNG comparison small" />
      <img src="/svg_png_comparison_med.png" alt="SVG PNG comparison medium" />
      <img src="/svg_png_comparison_big.png" alt="SVG PNG comparison big" />

      <h2>Inline vs External SVGs</h2>

      <p>
        <strong>Inline</strong> SVGs are embedded directly within the HTML
        markup, allowing you to manipulate their elements using CSS and
        JavaScript, and making them part of the page's DOM. This enables
        advanced styling, interactivity, and accessibility features.{" "}
        <strong>External</strong> SVGs, on the other hand, are stored as
        separate files and referenced in the HTML using elements like{" "}
        <strong>&lt;img&gt;</strong>, <strong>&lt;object&gt;</strong>, or as{" "}
        <strong>CSS</strong> background images. While external SVGs are easy to
        reuse and keep your HTML cleaner, they do not provide the same level of
        direct control or interactivity as inline SVGs.
      </p>

      <h3>External</h3>

      <p>
        External SVG files that are loaded and used like any other image format.
      </p>

      <Blocks title={"HTML - img element"}>{`<img
  src="assets/smiley_face.svg"
  alt="svg smiley face"
>`}</Blocks>

      <Blocks title={"HTML - object element"}>{`<object
  id="clown-object"
  data="assets/clown.svg"
  type="image/svg+xml"
>`}</Blocks>

      <Blocks title={"CSS - background-image"}>{`.myclass {
    background-image: url(/images/smiley_face.svg);
}`}</Blocks>

      <h3>Inline</h3>

      <p>
        <em>
          In this course, we will be dealing <strong>almost entirely</strong>{" "}
          with <strong>Inline SVGs</strong>.
        </em>
      </p>

      <Blocks title={"inline svg"}>{`<body>
   <svg width="500" height="500" viewbox="0 0 500 500">
       <circle id="head" cx="250" cy="250" r="250" fill="orange"></circle>
       <circle id="lefteye" cx="150" cy="150" r="20" fill="black"></circle>
       <circle id="righteye" cx="350" cy="150" r="20" fill="black"></circle>
   </svg>
</body>`}</Blocks>

      <h2>SVG Advantages (External)</h2>

      <p>✔️ Scalability</p>

      <p>
        ✔️ File size - Generally speaking, svg images have smaller file size, as
        long as the image is not very detailed (like a photograph)
      </p>

      <h2>SVG Advantages (Inline)</h2>

      <p>✔️ Scalability</p>

      <p>✔️ File size</p>

      <p>
        ✔️ Versatility - Since inline SVGs have their own DOM, it's possible to
        do a lot more with elements of the image - creation, animation, changing
        color, adding and removing, etc. using JavaScript and CSS (inline only)
      </p>

      <p>
        ✔️ SEO - Since SVGs are text-based, Inline SVGs and elements within
        Inline SVGs can be indexed by search engines.
      </p>

      <h2>SVG Disadvantages</h2>

      <p>
        ✖️ Bitmap images can be much more detailed. SVGs are best used with
        relatively simple images.
      </p>

      <p>
        ✖️ Extremely complex SVGs with a lot of complex paths can sometimes
        affect browser performance.
      </p>

      <h1>Summary</h1>

      <p>
        SVG is a text-based image format for describing lines, curves, and
        shapes (circle, ellipse, rect, polygon, polyline, path). The browser
        takes the information and uses it to draw an image. Since the images are
        drawn using math, the they can be scaled to literally any size and not
        lose quality.
      </p>
    </>
  );
};

export default Whatis;
