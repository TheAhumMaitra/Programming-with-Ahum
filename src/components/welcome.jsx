import SplitText from '././split_txt';
import './all_main.css';
import Aurora from './aurora';
import GradientText from './gradienttext';
import ClickSpark from './spark';
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

 export default function Welcome() {
  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <>

          <main className='w-full h-[30%] bg-[var(--color-primary)] text-white font-[Nunito] p-50 flex flex-col justify-around items-center gap-5'>
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
          </main>
        </>
      </ClickSpark>
    </>
  )
}
// export default function ConstructionError();
