import { TechStackMarquee } from "./cards";

export default function TechStack(){
    return(
        <>
        <main>
        <section className='h-screen w-full flex flex-col bg-black justify-center items-center'>
          <h1 className='bg-gradient-to-r from-purple-300 to-blue-200 to bg-yellow-100 inline-block text-transparent bg-clip-text lg:text-6xl text-5xl  font-semibold'>Tech Stack</h1>
          <h2 className='font-poppins text-center text-white mt-8 text-lg w-3/4 font-light tracking-wide'>
          <TechStackMarquee/>
          </h2>
        </section>
        </main>
        </>
    )
}