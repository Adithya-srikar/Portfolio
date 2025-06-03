import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [visibleChars, setVisibleChars] = useState(0);
  const fullText = "<Srikar.dev/>";
  const delay = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleChars(index);
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [onComplete]);

  const renderColoredText = () => {
    const currentText = fullText.substring(0, visibleChars);

    return (
      <div className="flex items-center space-x-0 text-6xl font-mono font-bold">
        {currentText.includes('<') && (
          <span className="text-purple-400">
            {currentText[0] === '<' ? '<' : ''}
          </span>
        )}
        <span className="text-black">
          {currentText
            .replace('<', '')
            .replace('/>', '')
            .replace('>', '')
            .replace('/', '')
            .substring(
              0,
              Math.min(visibleChars - 1, 'Srikar.dev'.length)
            )}
        </span>
        {currentText.includes('/') && visibleChars >= fullText.indexOf('/') && (
          <span className="text-purple-400">
            {currentText.includes('/') ? '/' : ''}
          </span>
        )}
        {currentText.endsWith('>') && (
          <span className="text-purple-400">{'>'}</span>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 text-black flex flex-col items-center justify-center bg-white">
      <div className="mb-10 flex items-center space-x-1">
        {renderColoredText()}
        <span className="text-gray-600 text-5xl mt-2 animate-pulse">_</span>
      </div>
      <div className="w-[350px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
