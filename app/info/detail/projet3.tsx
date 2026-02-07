export default function Projet3(){

    return(
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/gestion-des-finances" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            gestion-des-finances</h2></a>
          <p className="max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Concept : Migration et évolution mobile d'une application web de gestion financière (initialement conçue en mode Agile avec NextJS).
      <br/>
            Réalisations techniques :
<br/><br/>
                - Interface Dynamique : Implémentation d'une navigation fluide par gestes via ViewPager et synchronisation avec un TabLayout.
<br/>
                - Data Visualization : Création de graphiques circulaires (PieChart) pour une analyse visuelle immédiate des dépenses.
<br/>
                - Interopérabilité : Développement d'un module de communication avec des fichiers Excel pour l'import/export de données comptables.
<br/><br/>
            Analyses et perspectives :
<br/>
                - Optimisation des flux : Identification d'une latence (environ 3s) liée aux processus de vérification de l'état des fichiers (E/S) lors du lancement.
<br/><br/>
                - Réflexion Architecture : Analyse des limites du développement natif (Android Studio) pour un déploiement multiplateforme (iOS).
<br/><br/>
                - Évolution technologique : Étude comparative des solutions (Supabase pour la BDD vs Frameworks cross-platform). Objectif fixé : apprentissage de Flutter pour unifier le développement iOS/Android.
<br/>
            Compétences : Kotlin, UI/UX (Swipe navigation), Data Viz, Gestion de fichiers Excel, Veille technologique.
          </p>
        </div>
    )
}