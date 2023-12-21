/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
import { useCallback, useState } from 'react';
import meditations, { Meditation } from './meditations';

import './index.css';

export function Die() {
  const [gotMeditation, setMeditation] = useState<Meditation | null>(null);

  const sortMeditaions = useCallback(() => {
    const n = meditations.length;

    const index = Math.floor(Math.random() * n);

    setMeditation(meditations[index]);
  }, [setMeditation]);

  return (
    <div className="roulette">
      <h1>Próxima meditação</h1>
      <div className="center">
        <button type="button" onClick={sortMeditaions}>
          <span role="img" aria-label="folded hands">
            🎲{' '}
          </span>
          Sortear
        </button>
      </div>

      <div className="content">
        {gotMeditation ? (
          <div className="result">
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
