import Link from "next/link";

export default function Projet2(){

    return(
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/liste-3D-dysplate" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            liste-3D-dysplate</h2></a>
          <p className="max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
  Objectif : Étude des limites et du comportement de la base de données NoSQL Realm sur Android (Kotlin) à travers la création d'une marketplace fictive (avec les image de Displate).<br/> 
  <br/>
  Réalisations :<br/>
  - Catalogue & Panier : Gestion de +100 références persistantes (Kotlin/Realm).<br/>
  - Tests : Analyse de performance lors d'insertions massives (aucune latence).<br/>
  - Data Lifecycle : Automatisation de scripts "Clear Database" pour la migration de schémas.<br/>
  <br/>
  Analyses & Debugging :<br/>
  - Accès Data : Diagnostic des pertes de ressources au "Cold Start" (instabilité d'instance).<br/>
  - Unicité : Gestion des Primary Keys lors d'ajouts multiples au panier.<br/>
  - UI Sync : Résolution des bugs de rafraîchissement lors de suppressions en série.<br/>
  - Stabilité : Correction de corruptions d'index via une procédure "Clean Install".<br/>
  <br/>
  Stack : Kotlin, Realm, NoSQL, Debugging avancé.
</p>
        </div>
    )
}