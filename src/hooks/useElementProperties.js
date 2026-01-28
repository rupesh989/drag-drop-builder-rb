import { useState } from 'react';

const useElementProperties = () => {
  const [properties, setProperties] = useState({
    width: 40,
    height: 20,
  });

  const updateProperties = (newProperties) => {
    setProperties({ ...properties, ...newProperties });
  };

  return [properties, updateProperties];
};

export default useElementProperties;
