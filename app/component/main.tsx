import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import TechStack from './techStack'

interface Project {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  textColor: string;
}

const projects: Project[] = [
  {
    title: "A simple online store built on React",
    description: "A store with minimal UI layout and simple functionalities, built on React.js and Tailwind CSS. It uses basic concepts of context API, react routers, and some UI libraries.",
    link: "https://github.com/Ridzz110/eShop",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Anime Database",
    description: "its a bit close to my heart because i love anime. I made a database with a UI i thought would suits to viewer's preference built on jakan moe API",
    link: "https://github.com/Ridzz110/anime-databse",
    bgColor: "bg-zinc-850",
    textColor: "text-white",
  },
  {
    title: "AI FlashCard SAAS Platform",
    description: "Its a SAAS platform that uses generative ai to help students generate flashcards on anything",
    link: "https://github.com/Ridzz110/AIFlashCards",
    bgColor: "bg-gradient-to-tr from-zinc-800 via-zinc-950 to-zinc-800",
    textColor: "text-white",
  },
  {
    title: "Inventory Management System",
    description: "IMS built on Java and MySQL. It manages user roles and fetches relevant data based on them. It manages products, categories, and orders. It has a bill generation system and is capable of tracking all orders.",
    link: "https://github.com/Ridzz110/Inventory-management-system",
    bgColor: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "AI Chatbot",
    description: "its a chatbot that i built for student led society called AIC",
    link: "https://github.com/Ridzz110/chatbot",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Gemini Clone",
    description: "Google Gemini clone built on React.js, Tailwind CSS, and Google Gemini API.",
    link: "https://github.com/Ridzz110/GeminiClone",
    bgColor: "bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400",
    textColor: "text-white",
  },
  {
    title: "Pantry Tracker",
    description: "A CRUD app that is integrated with a database built on nextjs and Firestore",
    link: "https://github.com/Ridzz110/pantry-tracker",
    bgColor: "bg-zinc-850",
    textColor: "text-white",
  },
  {
    title: "Tourist Guide for Islamabad City",
    description: "A nextjs based blog post website that is SEO Optimized",
    link: "https://github.com/Ridzz110/TouristGuide",
    bgColor: "bg-yellow-200",
    textColor: "text-yellow-900",
  },
]

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Rida Batool - AI Engineer and Software Developer</title>
        <meta name="description" content="Rida Batool's portfolio - An aspiring AI Engineer and Software Development student specializing in Web Development and clean UI layouts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='h-screen w-full flex flex-col bg-black justify-center items-center'>
          <h1 className='bg-gradient-to-r from-purple-300 to-blue-200 to bg-yellow-100 inline-block text-transparent bg-clip-text lg:text-6xl text-5xl  font-semibold'>Hello! This is Rida.</h1>
          <h2 className='font-poppins text-center text-white mt-8 text-lg w-3/4 font-light tracking-wide'>
            An aspiring AI Engineer and Software Development student. I do Web Development and I love to design clean UI layouts. My projects are built on core concepts of each language I'm learning. Explore them below.
          </h2>
        </section>

        <section className='h-screen w-full flex flex-col bg-black justify-center items-center'>
          <h3 className='z-20 bg-gradient-to-r from-purple-300 to-blue-200 to bg-yellow-100 lg:h-16 h-32 mt-10 inline-block text-transparent bg-clip-text text-5xl font-semibold mb-24'>Explore my projects.</h3>
          <Carousel opts={{ align: "start", loop: true }} className="w-10/12 max-w-4xl text-poppins">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className={project.bgColor}>
                    <CardContent className="flex flex-col items-center justify-center gap-4 px-8 p-6 py-24">
                      <h3 className={`text-2xl ${project.textColor}`}>{project.title}</h3>
                      <p className={`text-lg font-thin ${project.textColor} tracking-wide text-center`}>{project.description}</p>
                      <Link href={project.link} passHref>
                        <span className={`inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium ${project.bgColor === 'bg-black' ? 'text-black' : `text-${project.bgColor.split('-')[1]}-600`} shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}>
                          View Project
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </main>
      <TechStack/>
      <footer id="contact" className="bg-black py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; 2024 Ridzz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Ridzz110" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="https://www.linkedin.com/in/rida-batool-a42438297" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </Link>
            <Link href="https://drive.google.com/file/d/1jcCp8zbEEEdnovyue8xS3uXDDNGzoFQq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}