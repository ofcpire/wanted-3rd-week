import React, { useState } from 'react';

export default function useListVisible() {
  const [isFocus, setIsFocus] = useState(false);
  const makeListVisible = () => {
    setIsFocus(true);
  };

  const makeListHidden = () => {
    setTimeout(() => setIsFocus(false), 100);
  };

  return { isFocus, makeListVisible, makeListHidden };
}
