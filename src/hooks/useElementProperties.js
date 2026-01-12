import { useState } from 'react';

const useElementProperties = () => {
  const [properties, setProperties] = useState({
    width: 400,
    height: 200,
  });

  const updateProperties = (newProperties) => {
    setProperties({ ...properties, ...newProperties });
  };

  return [properties, updateProperties];
};

export default useElementProperties;
