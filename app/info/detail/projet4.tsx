export default function Projet4(){

    return(
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Details du projet
          </h1>
          < a href="https://github.com/maciej-budner/entrainement" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Market place</h2></a>
          <p className="max-w-xl text-base leading-6 text-zinc-600 dark:text-zinc-400">
            Objectif : Première immersion dans le développement Full Stack via la création d'une plateforme de commande de matériaux de construction.
<br/>
            Réalisations techniques :
<br/><br/>
                - Structure & Design : Mise en place d'une interface utilisateur en HTML5 et CSS3 pour un catalogue de produits.
<br/>
                - Dynamisation PHP : Utilisation du langage PHP pour la gestion des requêtes (méthodes GET et POST) et le traitement des données.
<br/>
                - Système de Filtrage : Implémentation d'une logique de tri côté client pour organiser les listes de produits par catégories.
<br/>
                - Communication : Intégration de PHPMailer pour générer des récapitulatifs de commande automatiques par email.
<br/><br/>
            Compétences acquises : * Maîtrise des bases du protocole HTTP.
<br/>
                - Compréhension de l'interaction client-serveur.
<br/>
                - Structuration de formulaires de commande sécurisés.
<br/><br/>
            Stack : HTML, CSS, PHP, PHPMailer.
          </p>
        </div>
    )
}