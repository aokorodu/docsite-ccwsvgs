import Blocks from "@/components/blocks";
import {
  WalkExample,
  BounceExample,
  BounceWorkingExample,
  BounceWorkingExample2,
  BounceWorkingExample3,
  BounceExample4,
} from "@/components/sprites";

const Sprites = () => {
  return (
    <>
      <h1>Sprites</h1>

      <h2>overview</h2>

      <p>
        SVG sprite animation is a bit of a departure from the other animation
        techniques described in the course. It's much more like traditional,
        frame by frame animation used by animation studios to animate cartoons.
      </p>

      <WalkExample />

      <br />

      <p>
        In this example I'll demonstrate how to create a simple animation of a
        bouncing ball. You can apply the principles I demonstrate to any time of
        sprite animation.
      </p>

      <p>First, we'll create a 350x350 frame in Figma.</p>

      <img src="/sprites_figma_1.png" alt="sprites_figma_1.png" />

      <p>Next, use the shape tool to create a 50x50 ball.</p>

      <img src="/sprites_figma_2.png" alt="sprites_figma_2.png" />
      <img src="/sprites_figma_3.png" alt="sprites_figma_3.png" />

      <p>
        Copy and paste the ball 6 times and align all the images side-by-side to
        the top of the frame.
      </p>

      <img src="/sprites_figma_4.png" alt="sprites_figma_4.png" />

      <p>
        Since the ball will be bouncing back up to the start position, we only
        need to create frames for the drop. We'll then reverse the animation to
        create the bounce effect.
      </p>

      <img src="/sprites_figma_5.png" alt="sprites_figma_5.png" />

      <p>
        We'll "squash" the last frame to give the ball a more elastic appearance
        as it hits the "floor".
      </p>

      <img src="/sprites_figma_6.png" alt="sprites_figma_6.png" />

      <p>Each ball will be used as a single frame in the bounce animation.</p>

      <img
        src="/sprite_frame_illustration.png"
        alt="sprite_frame_illustration.png"
      />

      <p>Our final Figma step is to export the frame as an svg.</p>

      <img src="/sprites_figma_7.png" alt="sprites_figma_7.png" />

      <p>
        Now let's set everything up. we'll create an inline SVG and use the{" "}
        <strong>&lt;image&gt;</strong> tag to import the bouncing ball svg.
      </p>

      <Blocks>{`<body>
    <svg width=200 height=500
        viewBox="0 0 200 500">
            <image href="/bouncing_ball.svg"
                height="350" width="350" />
    </svg>
</body>`}</Blocks>

      <BounceWorkingExample />

      <p>Let's create the animation.</p>

      <Blocks>{`<styles>
        .bounceHolder {
            animation-name: bounce;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
        }

        @keyframes bounce {
            from {
                transform: translate(0px);
            }
            to {
                transform: translateX(-350px);
            }
        }

</styles>`}</Blocks>

      <BounceWorkingExample2 />

      <p>
        We shouldn't be able to see all of the frames of the animation, so lets
        create a clip-path so we can only see one ball at a time.
      </p>

      <Blocks highlight="2,3,4,5,6,7,8,9,10,11">{`<svg width=350 height=350 viewBox="0 0 350 350">
    <defs>
        <clipPath id="frame_cp">
            <rect x="0" y="0" width="50" height="350" />
        </clipPath>
    </defs>
    <g clipPath='url(#frame_cp)'>
        <g className={styles.bounceHolder} >
            <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
        </g>
    </g>
</svg>`}</Blocks>

      <BounceWorkingExample3 />

      <p>
        Now we have to update the animation so that the animation stops
        momentarily at each frame before "skipping" to the next one. For this,
        we use the <strong>steps</strong> animation timing function. There are
        seven frames, so we'll need 7 steps. And since each "frame" is 50 units
        wide, we'll be stopping at 0, 50, 100, 150, 200, 250, and 300. We'll use{" "}
        <strong>"jump-none"</strong> as our jump term, which essentially means
        that the animation will pause at the beginning, the end, and every step
        in between.
      </p>

      <pre>
        <code>{`animation-timing-function: steps(<number>, <jumpterm>);`}</code>
      </pre>

      <Blocks highlight="6">{`<styles>
        .bounceHolder {
            animation-name: bounce;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: steps(7, jump-none);
            animation-direction: alternate-reverse;
        }

        @keyframes bounce {
            from {
                transform: translate(0px);
            }
            to {
                transform: translateX(-350px);
            }
        }

</styles>`}</Blocks>

      <BounceExample4 />

      <p>Finally we'll move the ball to the middle of the svg.</p>

      <Blocks highlight="7">{`<svg width=350 height=350 viewBox="0 0 350 350">
    <defs>
        <clipPath id="frame_cp">
            <rect x="0" y="0" width="50" height="350" />
        </clipPath>
    </defs>
    <g transform="translate(150 0)"
        clipPath='url(#frame_cp)'>
        <g className={styles.bounceHolder} >
            <image href="/sprites_bouncing_ball.svg" height="350" width="350" />
        </g></g>
</svg>`}</Blocks>

      <BounceExample />

      <p>
        We can create a visually more interesting sprite animation using the
        same techniques described above. For example, to create a walk sequence
        out of the spritesheet below, we'd just need to update the code to
        reflect the fact that each 'frame' is 200px wide, and that there are
        eight images so we'll need 8 "steps".
      </p>

      <Blocks>{`.walkHolder {
        animation-name: walk;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: steps(8, jump-none);
    }

    @keyframes walk {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(-1400px);
        }
    }`}</Blocks>

      <img
        src="/sprites-walk-sequence-spaced.png"
        alt="sprites-walk-sequence-spaced.png"
      />
    </>
  );
};

export default Sprites;
