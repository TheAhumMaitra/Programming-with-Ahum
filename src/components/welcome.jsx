import './all_main.css'

export default function Welcome() {
  return(
    <>
      <main className='w-full h-full bg-purple-950 text-white font-[Nunito] p-50 flex flex-col justify-around items-center gap-2'>
        <h2 className='font-[Space Grotesk] font-bold underline text-3xl'>A feed for you!</h2>
        <p className='w-full font-medium text-2xl'>Hello everyone, I'm Ahum (who created 'Programming with Ahum'). I built my own programming channel and now I'm learning many things and now I created this website to help people. Well I loe these courses (See latest feed)</p>
      </main>
    </>
  )
}
