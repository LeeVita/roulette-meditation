/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from 'react';

import MeditationList from './list';
import MeditationDetail from './detail';

import './style.scss';

export default function Meditation() {
  const [meditationId, setMeditationId] = useState<number | null>(null);

  const clearDetail = useCallback(() => {
    setMeditationId(null);
  }, []);

  return (
    <div className="content-page center">
      {meditationId ? (
        <MeditationDetail meditationId={meditationId} goBack={clearDetail} />
      ) : (
        <MeditationList selectToDetail={setMeditationId} />
      )}
    </div>
  );
}
