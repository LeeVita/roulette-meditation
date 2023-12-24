import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

export default function Menu() {
  const [show, setShow] = useState<boolean>(false);

  const showSwitch = useCallback(() => {
    setShow(!show);
  }, [setShow, show]);

  return (
    <>
      <button className="menu-switch" type="button" onClick={showSwitch}>
        <span role="img" aria-label="menu">
          🕯️
        </span>
      </button>

      <div className="menu" aria-hidden={!show}>
        <Link className="menu-item" to="/" onClick={showSwitch}>
          Próxima meditação
        </Link>
        <Link className="menu-item" to="/meditations" onClick={showSwitch}>
          Minhas meditações
        </Link>
      </div>
    </>
  );
}
