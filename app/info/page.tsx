"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import Projet1 from "./detail/projet1";
import Projet2 from "./detail/projet2";
import Projet3 from "./detail/projet3";
import Projet4 from "./detail/projet4";
import Projet5 from "./detail/projet5";
import Projet6 from "./detail/projet6";
import Experience1 from "./detail/esperience1";
import Experience6 from "./detail/experience6";
import Experience2 from "./detail/esperience2";
import Experience3 from "./detail/esperience3";
import Experience4 from "./detail/esperience4";
import Experience5 from "./detail/esperience5";
export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    
    <div className="flex min-h-screen h-auto items-center justify-center bg-zinc-50  azure p-4">
      <main className={`img1 box flex h-auto w-full max-w-6xl flex-col items-center py-4 px-6 bg-white dark:bg-black sm:items-start transition-all duration-300 ${selected ? "blur-md pointer-events-none" : ""}`}>
        <h1 className="text-xl font-bold mb-4 text-black dark:text-zinc-50">
            Projets réalisé 
        </h1>
        
        <div className="info w-full grid grid-cols-2 gap-3">  
          <motion.div 
          onClick={() => setSelected(1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Application-Ent-avignon </h1>
              <p>Une application qui me permet de consulter mon emploi du temps et mes mails</p>
          </motion.div>
          <motion.div  
          
          onClick={() => setSelected(2)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">liste-3D-dysplate </h1>
              <p>une application où je teste le Reals sur android studio</p>
          </motion.div>
          <motion.div  
          onClick={() => setSelected(3)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">gestion-des-finances </h1>
              <p>Une application Android et web qui permet de gérer les finances</p>
          </motion.div>
          <motion.div  
          onClick={() => setSelected(4)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Market place</h1>
              <p>Un site web qui permet de faire des achats de bricolage (premier projet sans expérience)</p>
          </motion.div>
        </div>
        
        <h1 className="text-xl font-bold mt-6 mb-4 text-black dark:text-zinc-50">
            Experiences profesionnel 
        </h1>
        <div className="info w-full grid grid-cols-2 gap-3">
          
          <motion.div  
          onClick={() => setSelected(7)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Stage développeur web 1mois</h1>
              <p>Un stage réalisé chez Défiez le cube</p>
          </motion.div>
          <motion.div  
          onClick={() => setSelected(8)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Poissonerie job été (total 4mois)</h1>
              <p>Service à la clientèle, entretien du rayon, gestion des stocks, ouverture et fermeture du magasin</p>
          </motion.div>
          <motion.div 
          onClick={() => setSelected(9)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Agent de production</h1>
              <p>Pose de bouchons sur des bouteilles et surveillance du bon fonctionnement des machines</p>
          </motion.div>
          <motion.div 
          onClick={() => setSelected(10)}
          whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} 
          className="box2 p-3 flex flex-col items-start gap-1 cursor-pointer">
              <h1 className=" text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Ouvrier Agricole</h1>
              <p>Contrat de travail temporaire consistant à la cueillette de cerises et d'abricots.</p>
          </motion.div>
        </div>
      </main>
      <AnimatePresence>
        {selected && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="img2 fixed top-0 right-0 w-2/4 h-screen bg-slate-800 p-6 shadow-lg z-50 "
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelected(null)}
              className="text-white text-xl font-bold mb-4"
            >
              ✕
            </button>

            {/* Détails du projet */}
            {
              {
                '1': <Projet1/>,
                '2': <Projet2/>,
                '3': <Projet3/>,
                '4': <Projet4/>,
                '5': <Projet5/>,
                '6': <Projet6/>,
                '7': <Experience1/>,
                '8': <Experience2/>,
                '9': <Experience3/>,
                '10': <Experience4/>,
                '11': <Experience5/>,
                '12': <Experience6/>,
              }[selected] || <div>Fallback (par défaut)</div>
            }
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
  );
}
