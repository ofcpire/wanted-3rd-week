import React, { useState } from 'react';

export default function useListVisible() {
  const [isFocus, setIsFocus] = useState(false);
  const makeListVisible = () => {
    setIsFocus(true);
  };

  const makeListHidden = () => {
    setIsFocus(false);
  };

  return { isFocus, makeListVisible, makeListHidden };
}
