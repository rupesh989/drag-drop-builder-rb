import { useState } from 'react';

const useElementProperties = () => {
  const [properties, setProperties] = useState({
    width: 120,
    height: 80,
  });

  const updateProperties = (newProperties) => {
    setProperties({ ...properties, ...newProperties });
  };

  return [properties, updateProperties];
};

export default useElementProperties;
