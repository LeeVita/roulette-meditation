/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import React, { useCallback, useState } from 'react';

export function Die() {
  const [gotMeditation, setMeditation] = useState<Meditation | null>(null);

  const sortMeditaions = useCallback(() => {
    const n = meditations.length;

    const index = Math.floor(Math.random() * n);

    setMeditation(meditations[index]);
  }, [setMeditation]);

  return (
    <div>
      <h1>Próxima meditação</h1>
      <div className="Hello">
        <button type="button" onClick={sortMeditaions}>
          <span role="img" aria-label="folded hands">
            🎲
          </span>
          Sortear
        </button>
      </div>
      <div className="Hello">
        {gotMeditation ? (
          <div className="Result">
            <div className="name">{gotMeditation.name}</div>
            <div className="description">{gotMeditation.description}</div>
          </div>
        ) : (
          ``
        )}
      </div>
    </div>
  );
}

const meditations: Meditation[] = [
  {
    type: 'visualization',
    name: 'Pulsar frontal',
    description: (
      <>
        Imagine um ponto de luz branca no centro de sua cabeça, na altura de
        suas sobrancelhas.
        <br />
        Esse ponto vai pulsando e ficando cada vez mais intenso. Tão intenso que
        você consegue sentir a força da pulsação no teu crânio.
      </>
    ),
  },
  {
    type: 'visualization',
    name: 'Respiração pelos 3 dedos',
    description: (
      <>
        Junte os dedos indicador e polegar de ambas as mãos, esticando de forma
        relaxada os outros 3 dedos.
        <br />
        Quando respirar, imagine que está inspirando atravez dos 3 dedos de uma
        das mãos, absorvendo energia universal, e quando exalar, solte pelos 3
        dedos da outra mão.
      </>
    ),
  },
  {
    type: 'visualization',
    name: '5 esferas verdes',
    description: (
      <>
        Imagine uma esfera verde em frente a tua cabeça, coloque movimento nela.
        <br />
        Quando conseguir sentir essa esfera, traga-a para tua cabeça de forma
        que envolva-a toda.
        <br />
        Replique essa esfera e traga mais uma em cada mão e pés.
      </>
    ),
  },
  {
    type: 'visualization',
    name: 'Esfera luminosa',
    description: (
      <>
        1. Sentado confortavelmente, visualize uma bola de luz flutuando sobre
        sua cabeça. <br />
        2. Lentamente, faça-a descer e interpenetrar o alto da cabeça. <br />
        3. Faça-a descer lentamente por dentro da cabeça e, ao mesmo tempo,
        diminua seu tamanho gradativamente. <br />
        4. Leve-a por dentro do rosto, do pescoço e do peito (gradativamente
        diminuindo seu tamanho), até que ela alcance seu tamanho mínimo no
        centro da coração. <br />
        5. Mantenha essa visualização por uns três minutos. A seguir, deite-se
        tranqüilamente e preste atenção no ponto luminoso dentro do coração.
        <br />
        6. Faça tudo com muita paciência. 7. Seja sereno em seus propósitos.
        <br />
        8. Amor, Amor, Amor... dentro do pontinho luminoso do coração.
      </>
    ),
  },
  {
    type: 'visualization',
    name: 'Descarregar energias pesadas do corpo',
    description: (
      <>
        Visualize dois triângulos luminosos nas plantas dos pés (um para cada pé
        – o vértice apontando para os dedos e a base para os calcanhares).
        <br />
        Permaneça concentrado neles por cerca de cinco minutos. <br />
        Essa visualização descarrega energias pesadas pelos chacras das plantas
        dos pés e desintoxica o sistema. É comum ocorrerem diversos arrepios ou
        vibrações pelo corpo, além de bocejos e lacrimejamentos enquanto a
        pessoa pratica esse exercício. Também é comum sentir-se leve após a
        prática e com vontade de movimentar-se sadiamente.
      </>
    ),
  },
  {
    type: 'audio',
    name: 'Frequencia Vishudha',
    description: (
      <>
        <a href="https://youtu.be/ejY9B86M4Ps?si=qc0DFSVya_L5Q7Rd">
          Vishuddha - 741 Hz
        </a>
        Concentre-se no chakra larígeo enquanto ouve essa música.
      </>
    ),
  },
];

type Meditation = {
  type: 'visualization' | 'audio';
  name: string;
  description: React.JSX.Element | string;
};
