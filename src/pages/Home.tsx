import { useEffect, useRef, useState } from 'react';
import BGAnimation from '@/components/bganimation';
import styles from './Home.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const anims = ["waterFlow", "float", "sine", "orbit", "spin", "swim"];

function Selector({ onClick }: { onClick: (index: number) => void }) {
  const [selectedAnim, setSelectedAnim] = useState(0);
  return (
    <>

      <div className={styles.changeAnimation}>
        {anims.map((anim, index) => (
          <>
            <div key={anim} className={index === selectedAnim ? styles.animationName + " " + styles.selected : styles.animationName} onClick={() => { setSelectedAnim(index); onClick(index); }}><span>{anim}</span></div>
            <span className={styles.animationName}>{index < anims.length - 1 ? "~" : ""}</span>
          </>
        ))}
      </div></>

  )
}

export default function Home() {
  const anim = useRef<BGAnimation>(null);

  let animIndex = 0;
  const animLength = anims.length;

  // const chooseRandomFlow = (isRandom: boolean) => {
  //   if (!anim.current) return;
  //   if (isRandom) {
  //     animIndex = Math.floor(Math.random() * animLength);

  //   } else {

  //     animIndex = (animIndex + 1) % animLength;
  //   }
  //   anim.current.changeFlow(anims[animIndex]);
  // };

  const chooseSpecificFlow = (index: number) => {
    if (!anim.current) return;
    animIndex = index % animLength;
    let animName = anims[animIndex];
    if (animName === "sine") animName = "sin"
    anim.current.changeFlow(animName);
  };

  // const chooseNextFlow = () => {
  //   if (!anim.current) return;
  //   animIndex = (animIndex + 1) % animLength;
  //   anim.current.changeFlow(anims[animIndex]);
  // };

  useEffect(() => {
    if (anim.current) {
      anim.current.start();
      chooseSpecificFlow(0);
    }
  }, []);



  return (
    <>

      <div className={styles.particleHolder} >
        <BGAnimation ref={anim} />
      </div>

      <div className={styles.holder}>
        <div style={{ color: "white" }} className={styles.title}>Creative Coding with SVGs</div>

        <div style={{ color: "white" }} className={styles.subheading}>
          Welcome to the world of SVGs - one of the most powerful, versatile and dynamic visual formats available today. SVGs allow you to create all kinds of interesting visualizations - from simple images to interactive infographics, animations, and even games.
        </div>
        <div style={{ color: "white" }} className={styles.subheading}>
          In this beginners course, we'll teach you all about the SVG and the unique creative possibilities it offers.
        </div>
        <div className={styles.buttonHolder}>
          <Link to="/intro">
            <Button variant="contained" color="secondary">
              Let's Begin!
            </Button>
          </Link>
        </div>
        <Selector onClick={chooseSpecificFlow} />
      </div>
    </>
  );
}
