export default function Projet4(){

    return(
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="text-xl font-bold text-white mb-2">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/entrainement" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            Market place</h2></a>
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`Objectif : Première immersion dans le développement Full Stack via la création d'une plateforme de commande de matériaux de construction.

            Réalisations techniques :
                - Structure & Design : Mise en place d'une interface utilisateur en HTML5 et CSS3 pour un catalogue de produits.
                - Dynamisation PHP : Utilisation du langage PHP pour la gestion des requêtes (méthodes GET et POST) et le traitement des données.
                - Système de Filtrage : Implémentation d'une logique de tri côté client pour organiser les listes de produits par catégories.
                - Communication : Intégration de PHPMailer pour générer des récapitulatifs de commande automatiques par email.

            Compétences acquises : * Maîtrise des bases du protocole HTTP.
                - Compréhension de l'interaction client-serveur.
                - Structuration de formulaires de commande sécurisés.

            Stack : HTML, CSS, PHP, PHPMailer.`}
          </p>
        </div>
    )
}