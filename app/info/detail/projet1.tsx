export default function Projet1(){

    return(
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/application-Ent-avignon" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Application-Ent-avignon</h2></a>
          <p className="max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Objectif : Centralisation des outils personnels (emploi du temps, mails) au sein d'une interface mobile unique.<br/>
<br/>
            Réalisations techniques :
<br/><br/>
                - Architecture : Développement sous Android Studio en utilisant le langage Kotlin.
<br/><br/>
                - Intégration Web : Implémentation de composants WebView pour l'affichage fluide de services web externes.
<br/><br/>
                - Réutilisation de compétences : Adaptation et portage mobile de la logique de navigation développée lors du stage chez "Défiez le Cube".
<br/><br/>
            Analyse technique (Challenges identifiés) :
<br/><br/>
                - Gestion des flux : Identification des limitations de la WebView concernant les redirections d'URL complexes (Deep Linking).
<br/><br/>
                -Gestion des fichiers : Analyse des permissions nécessaires pour l'implémentation du DownloadListener (téléchargement de documents via l'application).
<br/>
            Compétences : Kotlin, Android SDK, WebView, Analyse de bugs.
          </p>
        </div>
    )
}