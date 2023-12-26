import { useState } from 'react';
import { Meditation } from '../../meditations';

export default function MeditationDetail({
  meditation,
  goBack,
}: {
  meditation: Meditation | null;
  goBack: () => void;
}) {
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <>
      <button
        className="link"
        type="button"
        onClick={() => {
          if (typeof goBack === 'function') goBack();
        }}
      >
        Ver lista
      </button>
      <h1>Detalhes da meditação</h1>

      <div hidden={editing}>
        <div className="detail-name">{meditation?.name}</div>
        <div className="detail-type">{meditation?.type}</div>
        <div className="detail-description">{meditation?.description}</div>
        <button type="button" onClick={() => setEditing(true)}>
          Editar
        </button>
      </div>

      <div hidden={!editing}>
        <form>
          <input type="text" value={meditation?.name} />
          <input type="text" value={meditation?.type} disabled />
          <textarea value={meditation?.description} />

          <button type="submit" onClick={() => setEditing(true)}>
            Salvar
          </button>
        </form>
      </div>
    </>
  );
}
