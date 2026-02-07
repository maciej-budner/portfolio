import Link from "next/link";

export default function Projet2(){

    return(
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="text-xl font-bold text-white mb-2">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/liste-3D-dysplate" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            liste-3D-dysplate</h2></a>
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`Objectif : Étude des limites et du comportement de la base de données NoSQL Realm sur Android (Kotlin) à travers la création d'une marketplace fictive (avec les image de Displate). 
  
  Réalisations :
  - Catalogue & Panier : Gestion de +100 références persistantes (Kotlin/Realm).
  - Tests : Analyse de performance lors d'insertions massives (aucune latence).
  - Data Lifecycle : Automatisation de scripts "Clear Database" pour la migration de schémas.
  
  Analyses & Debugging :
  - Accès Data : Diagnostic des pertes de ressources au "Cold Start" (instabilité d'instance).
  - Unicité : Gestion des Primary Keys lors d'ajouts multiples au panier.
  - UI Sync : Résolution des bugs de rafraîchissement lors de suppressions en série.
  - Stabilité : Correction de corruptions d'index via une procédure "Clean Install".
  
  Stack : Kotlin, Realm, NoSQL, Debugging avancé.`}
</p>
        </div>
    )
}