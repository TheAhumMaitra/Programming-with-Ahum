import { useState } from 'react';
import SplitText from '././split_txt';
import './all_main.css';
import Close_Spark from './cloase_spark';
import GradientText from './gradienttext';
import ClickSpark from './spark';
import SplashCursor from './splash_cursor';
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
import DecryptedText from './decypted_text';
import RotatingText from './creative_text';
 export default function Welcome() {
  const [showSplash, setShowSplash] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleClose = () => {
    setShowSplash(false);
    setShowButton(false);
  };

  return (
    <>
      {/* Button in top right */}
      {showButton && (
        <div style={{ position: 'absolute', top: 280, right: 16, zIndex: 1000 }}>
          <Close_Spark onClose={handleClose} />
        </div>
      )}
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <>

          <main className='w-full h-full bg-[var(--color-bg)] text-white font-[Nunito] p-50 flex flex-col justify-around items-center gap-5'>
            {showSplash && <SplashCursor/>}
            <SplitText
              text="Hello World!"
              className="text-4xl font-bold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <GradientText
              colors={["#8A2BE2", "#FF00FF", "#9932CC", "#FF69B4", "#6A0DAD", "#F06292", "#BA55D3", "#FFB6C1", "#9400D3", "#DB7093"]}
              animationSpeed={1}
              showBorder={false}
              className="text-3xl font-extrabold"
            >
              Hello everyone, I'm Ahum (who created 'Programming with Ahum'). I built my own programming channel and now I'm learning many things and now I created this website to help people. Well I loe these courses (See latest feed)
            </GradientText>
            <div id="creative_text">
              <h1 className='text-3xl text-white w-full h-full flex gap-4 font-extrabold'>I Love</h1>
            <RotatingText
  texts={['Python', 'C', 'JS', 'React','Many more things']}
  mainClassName="px-2 sm:px-2 md:px-3 p-9 bg-purple-600 text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
</div>

          </main>
        </>
      </ClickSpark>
    </>
  )
}
// export default function ConstructionError();
