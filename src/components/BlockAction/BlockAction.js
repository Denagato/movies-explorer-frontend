import './BlockAction.css';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const BlockAction = memo(({ isLoading }) => {
  const location = useLocation();

  return (
    <div className="block-action">
      {isLoading &&
        (location.pathname === '/signin' ||
          location.pathname === '/signup') && <Preloader />}
    </div>
  );
});

export default BlockAction;
