/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import { Meditation } from '../../meditations';

export default function MeditationList({
  setDetail: selectToDetail,
  list: meditations,
}: {
  setDetail: (meditation: Meditation | null) => void;
  list: Meditation[];
}) {
  const editItem = useCallback(
    (meditation: Meditation) => {
      selectToDetail(meditation);
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
              onClick={() => editItem(meditation)}
            >
              {meditation.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
