import { useCallback, useState } from 'react';

import MeditationList from './list';
import MeditationEdit from './edit';

type tMode = 'list' | 'edit';

export default function Meditation() {
  const [mode, setMode] = useState<tMode>('list');

  const switchMode = useCallback(() => {
    const newMode = mode === 'list' ? 'edit' : 'list';
    setMode(newMode);
  }, [setMode, mode]);

  return (
    <div className="content-page center" onClick={switchMode}>
      {mode === 'list' ? <MeditationList /> : <MeditationEdit />}
    </div>
  );
}
