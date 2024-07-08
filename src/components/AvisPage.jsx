import React, { useState } from 'react';
import AvisComponent from './AvisComponent';
import FeedbackComponent from './FeedbackComponent';

const AvisPage = () => {
  const [avis, setAvis] = useState([]);

  const handleNewAvis = (newAvis) => {
    setAvis([newAvis, ...avis]);
  };

  return (
    <div>
      <AvisComponent onNewAvis={handleNewAvis} />
      <FeedbackComponent avis={avis} />
    </div>
  );
};

export default AvisPage;
