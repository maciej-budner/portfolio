export default function Experience1(){

    return(
        <div className="flex flex-col items-start gap-2 ">
          <h1 className="text-xl font-bold text-white mb-2">
            Details d'experience
          </h1>
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            Stage développeur web 1mois</h2>
           <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`J'ai réaliser se stage a Avignon chez Defiez le cube.
            Une entreprise ludique, dans le but est de réaliser plusieur énigme dans un temps répartie.
            Une sorte de escape game.
            Missions principales :
              -Gestion de données & Interface Admin : Création d’un système d'inscription sécurisé et d’un tableau de bord administrateur (PHP/SQL). Implémentation de filtres dynamiques pour distinguer les équipes en cours de celles ayant terminé.
              -Développement Mobile (Android/Kotlin) : Conception d’une application facilitant la création d'équipes via une WebView et intégration de la gestion de QR Codes.
              -Interfaçage Python-Android : Utilisation de Chaquopy pour exécuter des scripts Python (génération de QR Codes) au sein de l'environnement Android.
              -Système de Scan & Vision : Intégration de CameraX pour le scan en temps réel et synchronisation immédiate avec la base de données SQL.
              -Automatisation des rapports : Développement d'un module d'envoi automatique de bilans de partie en PDF aux Game Masters via PHPMailer.
              -Support R&D : Collaboration sur la logique Python d'une salle de jeu interactive (type "1, 2, 3 Soleil").

          Environnement technique : PHP, SQL, Kotlin, Python, Android Studio, CameraX, PHPMailer.`}
          </p>
        </div>
    )
}