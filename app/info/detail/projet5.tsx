export default function Projet5(){

    return(
         <div className="flex flex-col items-start gap-2 ">
          <h1 className="text-xl font-bold text-white mb-2">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/off_ligne_game" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            Off_Ligne_Game</h2></a>
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`Objectif : Développer des mini-jeux complexes en concevant un diagramme de classes respectant les principes SOLID.
              Compétences clés :

                - Gestion de la navigation multi-pages à l'aide de vues / fragments (FrameworkView).

                - Application stricte de la modélisation UML et des principes SOLID.

                - Développement d'interfaces adaptatives pour la gestion de l'affichage (boutons et éléments graphiques) selon la résolution des écrans.
                
              Analyse technique (Challenges identifiés) :
                - Conception d'interfaces réactives (responsive design) ajustables à la taille de chaque écran.

                - Structuration et optimisation de la conception orientée objet via des diagrammes de classes rigoureux.


            Compétences : Kotlin, Java, Android SDK, Principes SOLID, UML.
                `}
          </p>
        </div>
    )
}