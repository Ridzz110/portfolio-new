import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';
import { StaticImageData } from 'next/image';

// Import images
import nextjsLogo from './assests/nextjs.png';
import reactjsLogo from './assests/reactjs.png';
import javascriptLogo from './assests/javascript.png';
import javaLogo from './assests/java.png';
import mySqlLogo from './assests/mySql.png';
import pythonLogo from './assests/python.png';
import cppLogo from './assests/cpp.png';

interface TechStackItem {
  name: string;
  logo: StaticImageData; // Use StaticImageData type for imported images
}

const techStack: TechStackItem[] = [
  { name: "Next.js", logo: nextjsLogo },
  { name: "React.js", logo: reactjsLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "Java", logo: javaLogo },
  { name: "MySQL", logo: mySqlLogo },
  { name: "Python", logo: pythonLogo },
  { name: "C++", logo: cppLogo },
];

const TechCard: React.FC<TechStackItem> = ({ name, logo }) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Image className="w-16 h-16 object-contain" width={50} height={50} alt={`${name} logo`} src={logo} />
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export const TechStackMarquee: React.FC = () => {
  return (
    <div className="relative flex h-32 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {techStack.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-zinc-900 to-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-zinc-900 to-black dark:from-background"></div>
    </div>
  );
};
