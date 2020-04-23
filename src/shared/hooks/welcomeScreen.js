import React from 'react';

/** @description
 *
 *  This effect turn off the welcome component after pointed delay
 *
 * **/

export const useWelcomeEffect = (setShowWelcomeScreen, delay) => {
  React.useEffect(() => {
    setTimeout(() => {
      setShowWelcomeScreen(false);
    }, delay);
  }, [setShowWelcomeScreen, delay]);
};
