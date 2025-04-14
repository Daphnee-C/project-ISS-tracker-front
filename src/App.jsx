import { useState } from 'react'
import APOD from "./components/APOD";
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold py-6">ISS Tracker 🛰️</h1>
      <APOD />
      <section className="flex flex-col gap-4 p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Quelles sont les missions et le rôle de l'ISS ?</h2>
          <p>
            L’ISS est un laboratoire exceptionnel pour réaliser des expériences scientifiques en impesanteur.
            L’absence des effets de la gravité permet d’observer avec une grande précision des phénomènes physiques, biologiques et le comportement de matériaux.
            Les astronautes à bord se prêtent également à des études physiologiques afin de comprendre les effets de la micropesanteur sur le corps humain, tels que la perte de masse musculaire, les troubles visuels ou la fragilisation des os.
            Ces recherches bénéficient autant à la médecine terrestre qu’à la préparation des futures missions spatiales.
            Les astronautes s’entraînent par ailleurs à vivre et travailler de manière autonome dans des conditions extrêmes.
          </p>
          <p>
            Au-delà de ces missions, la Station Spatiale Internationale joue un rôle central dans la recherche spatiale.
            Elle offre un environnement unique pour des expériences en physique, biologie et médecine, impossible à reproduire sur Terre.
            Elle permet également l’observation de notre planète et de l’espace lointain, tout en testant des technologies qui seront essentielles pour les prochaines expéditions vers la Lune ou Mars.
            L’ISS est aussi un symbole fort de coopération internationale, réunissant les principales agences spatiales du monde autour d’un objectif commun : faire avancer la science au bénéfice de l’humanité.
          </p>
      </section>
    </div>
      
      
    </>
  )
}

export default App
