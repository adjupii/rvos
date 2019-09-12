import { useState, useEffect } from 'react';

const useApi = (api, dependencies = []) => {
  const [ fetching, setFetching ] = useState(false);

  const [ data, setData ] = useState(null);

  useEffect(
    () => {
      let unmounted = false;

      if (api) {
        setFetching(true);

        api()
          .then(res => {
            if (!unmounted) {
              setData(res);

              setFetching(false);
            }
          })
          .catch(() => {
            if (!unmounted) {
              setFetching(false);
            }
          });
      }

      return () => {
        unmounted = true;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ api, ...dependencies ]
  );

  return [ fetching, data ];
};

export {
  useApi
};