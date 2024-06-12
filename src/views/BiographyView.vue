<template>
  <div class="biography">
    <h1 class="title">Biography</h1>
    <div class="container">
      <div class="summary">
        <img src="/src/assets/logo.svg" />
        <div class="text-container">
          <p>En un rincón oculto del espacio-tiempo, nació una banda mítica y enigmática: "The Time Travelers". Su música
            trascendió épocas y estilos, llevando a los oyentes en un viaje alucinante a través del tiempo y la
            imaginación.
            La historia de "The Time Travelers" se remonta a la década de 1960, cuando cinco prodigiosos músicos se
            encontraron en un extraño y misterioso festival en una dimensión paralela.</p>
          <p> Cada miembro provenía de una época diferente, y al unirse, descubrieron que tenían la capacidad de viajar a
            través del tiempo a voluntad, lo que les permitía explorar y fusionar diferentes géneros musicales de
            distintas épocas.
            En un acto de valentía, decidieron embarcarse en una odisea musical única, viajando a través de los siglos y
            absorbiendo la esencia de cada época que visitaban. Así, "The Time Travelers" se convirtió en una banda
            verdaderamente ecléctica,
            capaz de combinar el poder del rock and roll de los años 60, la sensualidad del funk de los 70, la rebeldía
            del punk de los 80, la melancolía del grunge de los 90 y la innovación del futuro aún por venir.</p>
          <p>

            Cada uno de los miembros de la banda aportó su propia historia fascinante al grupo. El líder, Aiden "El
            Crononauta", era un guitarrista visionario que se rebeló contra la rigidez de la academia musical en la Viena
            del siglo XIX, desarrollando una técnica única con su guitarra eléctrica de aspecto futurista. Junto a él,
            estaba "Electra", una poderosa cantante cuya voz era capaz de evocar emociones de cualquier época, gracias a
            su pasado como una talentosa opera diva de la Italia renacentista.

            El bajo profundo y pulsante de "Dr. Groove" provenía directamente de la Nueva Orleans de los años 30, donde
            fue un virtuoso del jazz durante la época de la prohibición. "Beatmaster", el baterista incansable, había
            viajado desde los vibrantes clubes de música disco de la Nueva York de los 80. Finalmente, "Synthia", la
            tecladista maestra, había sido una ingeniera de sonido pionera en la Alemania de los 60, responsable de
            inventar sintetizadores únicos que ampliaron las fronteras de la música.

            Con su estética futurista y atemporal, "The Time Travelers" se presentaron en los escenarios de todo el mundo,
            sorprendiendo y deleitando a las audiencias con sus vibrantes actuaciones.</p>
          <p> Cada concierto se convirtió en un evento épico, ya que la banda tocaba clásicos reinventados de diferentes
            décadas, fusionando estilos y dejando a los espectadores con la sensación de haber viajado en el tiempo a
            través de la música.

            Sin embargo, la travesía de "The Time Travelers" no estuvo exenta de desafíos. Las fuerzas del tiempo y el
            destino parecían conspirar en su contra, y en cada concierto, debían superar obstáculos cósmicos para mantener
            su capacidad de viajar a través de las épocas. Pero el poder de su música y la unidad inquebrantable del grupo
            los mantuvieron firmes en su misión.

            A medida que su leyenda creció, también lo hizo la misteriosa naturaleza de su existencia. Algunos afirmaban
            que "The Time Travelers" no eran simplemente músicos, sino entidades interdimensionales que habían encontrado
            una forma de manifestarse a través del arte. Las teorías y rumores se multiplicaron, pero la verdad detrás de
            la banda siguió siendo un enigma.</p>
          <p>
                                                                                                    
            Hoy, "The Time Travelers" continúan viajando a través del tiempo y la música, llevando su legado de innovación
            y enigma a las generaciones futuras. Su música ha dejado una marca imborrable en la historia de la música,
            inspirando a músicos y oyentes por igual a explorar nuevos horizontes y fusionar estilos sin miedo.

            En un mundo donde el tiempo y el espacio se entrelazan, "The Time Travelers" siguen siendo una fuerza
            trascendental que demuestra que la música puede ser el puente que conecta los corazones y las almas a través
            de los siglos. Su música vive en el pasado, el presente y el futuro, y su legado nunca será olvidado, ya que
            continúan su alucinante y eterno viaje a través del tiempo y la música.
          </p>

          <p class="author">Autor: Dylan Hurtado López</p>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.biography {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  padding-top: 5rem;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.summary {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 70%;
  background-color: gray;
}

img {
  max-height: 400px;
  width: 100%;
  background-color: aliceblue;
  background-size: contain;

}

.text-container {
  border-top: 4px solid var(--color-border);
  padding: 2em;
}

.author {
  font-weight: 300;
  text-align: end;
}

@media only screen and (max-width: 900px) {
  .summary {
    width: 100%;
  }
}</style>
