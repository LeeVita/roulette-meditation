import { useCallback, useState } from 'react';

import MeditationList from './list';
import MeditationDetail from './detail';
import getMeditations from '../../../database/meditation';
import { Meditation } from '../../meditations';

import './style.scss';

export default function MeditationPage() {
  const [list, setList] = useState<Meditation[]>([]);
  const [detail, setDetail] = useState<Meditation | null>(null);

  const fetch = useCallback(() => {
    const listing = async () => {
      const meditations = (await getMeditations()) as unknown as Meditation[];
      setList(meditations);
    };
    listing();
  }, [setList]);

  if (!list.length) {
    fetch();
  }

  return (
    <div className="content-page center">
      {detail ? (
        <MeditationDetail meditation={detail} goBack={() => setDetail(null)} />
      ) : (
        <MeditationList list={list} setDetail={setDetail} />
      )}
    </div>
  );
}
