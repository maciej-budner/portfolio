export default function Projet5(){

    return(
         <div className="flex flex-col items-start gap-2 ">
          <h1 className="text-xl font-bold text-white mb-2">
            Details du projet
          </h1>
          < a href="" className="px-4 py-2 border border-zinc-500 text-zinc-300 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-colors duration-200 text-sm font-medium">
          <h2 className="inline-block mb-3 px-3 py-1 text-zinc-300 rounded-lg hover:bg-white hover:text-black transition-all text-xs font-bold">
            nom projet</h2></a>
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-400">
            {`Développeur passionné de programmations. Ambitieux et rigoureux, 
            je suis motivé à enrichir mes expériences 
            et pouvoir apprendre toujours plus sur les métiers lier à l’informatique.`}
          </p>
        </div>
    )
}