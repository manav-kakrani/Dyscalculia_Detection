import React, { useState, useEffect } from 'react';

export const OptionBtn = ({ option }) => {
  const [pad, setPad] = useState(true);

  useEffect(() => {
    if (option.length > 10) {
      setPad(false);
    }
  }, [option]);

  return (
    <button
      className={`bg-optBg border-bor border-b-2 rounded-lg text-label font-poppins ${
        pad ? 'px-20' : 'px-5'
      }  py-3 hover:shadow-lg`}
    >
      {option}
    </button>
  );
};
