export default function Experience1(){

    return(
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Details d'experience
          </h1>
          <h2 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Stage développeur web 1mois</h2>
          <p className="min-w-xl leading-6 text-zinc-600 dark:text-zinc-400">
            J'ai réaliser se stage a Avignon chez Defiez le cube.
            Une entreprise ludique, dans le but est de réaliser plusieur énigme dans un temps répartie.
            Une sorte de escape game.
            Missions principales :<br />
              -Gestion de données & Interface Admin : Création d’un système d'inscription sécurisé et d’un tableau de bord administrateur (PHP/SQL). Implémentation de filtres dynamiques pour distinguer les équipes en cours de celles ayant terminé.
<br /><br />
              -Développement Mobile (Android/Kotlin) : Conception d’une application facilitant la création d'équipes via une WebView et intégration de la gestion de QR Codes.
<br />
              -Interfaçage Python-Android : Utilisation de Chaquopy pour exécuter des scripts Python (génération de QR Codes) au sein de l'environnement Android.
<br /><br />
              -Système de Scan & Vision : Intégration de CameraX pour le scan en temps réel et synchronisation immédiate avec la base de données SQL.
<br /><br />
              -Automatisation des rapports : Développement d'un module d'envoi automatique de bilans de partie en PDF aux Game Masters via PHPMailer.
<br /><br />
              -Support R&D : Collaboration sur la logique Python d'une salle de jeu interactive (type "1, 2, 3 Soleil").
<br />
          Environnement technique : PHP, SQL, Kotlin, Python, Android Studio, CameraX, PHPMailer.
          </p>
        </div>
    )
}