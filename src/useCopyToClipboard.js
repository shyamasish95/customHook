import { useState, useCallback, useEffect } from 'react';

export default function useCopyToClipboard(interval = null) {
  const [isCopied, setIsCopied] = useState();

  const handleCopy = useCallback((text) => {
    if (typeof text === 'string' || typeof text == 'number') {
      //copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }, []);
  useEffect(() => {
    let timer;
    if (isCopied && interval) {
      timer = setTimeout(() => setIsCopied(false), interval);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [interval, isCopied]);

  return [isCopied, handleCopy];
}
