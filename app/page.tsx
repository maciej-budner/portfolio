"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";



export default function Home() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const transition = (e: React.MouseEvent) =>{
     e.preventDefault();
     setClicked(true);
     setTimeout(() => {
        router.push("/info"); // navigation après l'animation
      }, 300); // durée de l'animation (ms)
  };
  return (
    <motion.div
        animate={clicked ? { scale: [1, 1.2, 0.2], rotate: [0, 20, -20, 0], y: [0, 20, 100] } : {}}
        transition={{ duration: 0.5 }}
    >
    <Link href="/info" onClick={transition}>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans azure">
      <main className="box flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Maciej Budner
          </h1>
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Étudiant en Master ILSEN</h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Développeur passionné de programmations. Ambitieux et rigoureux, 
            je suis motivé à enrichir mes expériences 
            et pouvoir apprendre toujours plus sur les métiers lier à l’informatique.
          </p>
        </div>
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            En savoir plus
                  ↓
          </p>
        </motion.div>
      </main>
      
    </div>
    </Link>
    </motion.div>
  );
}
