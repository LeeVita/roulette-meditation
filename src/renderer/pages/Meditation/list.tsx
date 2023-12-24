/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import meditations from '../../meditations';

export default function MeditationList({
  selectToDetail,
}: {
  selectToDetail: (id: number | null) => void;
}) {
  const editItem = useCallback(
    (id: number) => {
      selectToDetail(id);
    },
    [selectToDetail],
  );

  return (
    <>
      <h1>Minhas meditações</h1>

      <ul className="meditation-list">
        {meditations.map((meditation) => {
          return (
            <li
              className="meditation-list-item"
              key={meditation.id}
              onClick={() => editItem(meditation.id)}
            >
              {meditation.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
