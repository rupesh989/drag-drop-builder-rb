import { useState } from 'react';

const useElementProperties = () => {
  const [properties, setProperties] = useState({
    width: 200,
    height: 100,
  });

  const updateProperties = (newProperties) => {
    setProperties({ ...properties, ...newProperties });
  };

  return [properties, updateProperties];
};

export default useElementProperties;
