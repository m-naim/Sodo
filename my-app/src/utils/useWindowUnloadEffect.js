import { useEffect, useRef } from 'react';

const useWindowUnloadEffect = (handler, callOnCleanup) => {
  const cb = useRef();

  cb.current = handler;

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const handler = () => cb.current();

    window.addEventListener('beforeunload', handler);

    return () => {
      if (callOnCleanup) handler();

      window.removeEventListener('beforeunload', handler);
    };
  }, [cb]);
};

export default useWindowUnloadEffect;
