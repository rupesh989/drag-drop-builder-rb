import { useState } from 'react';

const useElementProperties = () => {
  const [properties, setProperties] = useState({
    width: 80,
    height: 40,
  });

  const updateProperties = (newProperties) => {
    setProperties({ ...properties, ...newProperties });
  };

  return [properties, updateProperties];
};

export default useElementProperties;
