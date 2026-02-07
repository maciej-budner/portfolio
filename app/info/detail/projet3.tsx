export default function Projet3(){

    return(
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="text-xl font-bold text-white mb-2">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/gestion-des-finances" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            gestion-des-finances</h2></a>
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`Concept : Migration et évolution mobile d'une application web de gestion financière (initialement conçue en mode Agile avec NextJS).
      
            Réalisations techniques :
                - Interface Dynamique : Implémentation d'une navigation fluide par gestes via ViewPager et synchronisation avec un TabLayout.
                - Data Visualization : Création de graphiques circulaires (PieChart) pour une analyse visuelle immédiate des dépenses.
                - Interopérabilité : Développement d'un module de communication avec des fichiers Excel pour l'import/export de données comptables.

            Analyses et perspectives :
                - Optimisation des flux : Identification d'une latence (environ 3s) liée aux processus de vérification de l'état des fichiers (E/S) lors du lancement.
                - Réflexion Architecture : Analyse des limites du développement natif (Android Studio) pour un déploiement multiplateforme (iOS).
                - Évolution technologique : Étude comparative des solutions (Supabase pour la BDD vs Frameworks cross-platform). Objectif fixé : apprentissage de Flutter pour unifier le développement iOS/Android.

            Compétences : Kotlin, UI/UX (Swipe navigation), Data Viz, Gestion de fichiers Excel, Veille technologique.`}
          </p>
        </div>
    )
}