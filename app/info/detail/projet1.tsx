export default function Projet1(){

    return(
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xl font-bold text-white mb-2">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/application-Ent-avignon" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            Application-Ent-avignon</h2></a>
            
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`Objectif : Centralisation des outils personnels (emploi du temps, mails) au sein d'une interface mobile unique.
            Réalisations techniques :
                - Architecture : Développement sous Android Studio en utilisant le langage Kotlin.

                - Intégration Web : Implémentation de composants WebView pour l'affichage fluide de services web externes.

                - Réutilisation de compétences : Adaptation et portage mobile de la logique de navigation développée lors du stage chez "Défiez le Cube".
            
            Analyse technique (Challenges identifiés) :
                - Gestion des flux : Identification des limitations de la WebView concernant les redirections d'URL complexes (Deep Linking).

                -Gestion des fichiers : Analyse des permissions nécessaires pour l'implémentation du DownloadListener (téléchargement de documents via l'application).

            Compétences : Kotlin, Android SDK, WebView, Analyse de bugs.`}
          </p>
        </div>
    )
}