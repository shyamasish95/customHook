import React from 'react';
import useCopyToClipboard from './useCopyToClipboard';
import './style.css';

export default function App() {
  const text = 'Start editing to see some magic happen :)';
  const [isCopied, handleCopy] = useCopyToClipboard(3000);
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => handleCopy(text)}>copy</button>
      {isCopied ? <p>yes</p> : <p>No</p>}
    </div>
  );
}
