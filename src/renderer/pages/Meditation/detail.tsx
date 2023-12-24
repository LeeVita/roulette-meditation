import { useMemo } from 'react';
import meditations from '../../meditations';

export default function MeditationDetail({
  meditationId,
  goBack,
}: {
  meditationId: number | null;
  goBack: () => void;
}) {
  const meditation = useMemo(
    () => meditations.find((m) => m.id === meditationId),
    [meditationId],
  );

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

      <div>
        <div className="detail-name">{meditation?.name}</div>
        <div className="detail-type">{meditation?.type}</div>
        <div className="detail-description">{meditation?.description}</div>
      </div>
    </>
  );
}
