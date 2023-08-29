'use client';

import classes from './re-roll-button.module.css';

import { useState } from "react";

const ReRollButton = () => {
  const [rolling, setRolling] = useState(false);
  const [buttonText, setButtonText] = useState('Re-Roll for another pokemon!');

  // This function is called when the user clicks the button. 
  // It clears the cookies and reloads the page.
  // This is a hacky way to re-roll the user's pokemon :)

  const reRoll = () => {
    setRolling(true);
    setButtonText('Loading...');
    document.cookie = "optimizely_visitor_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "pokemon=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
    setRolling(false);
    setButtonText('Re-Roll for another pokemon!');
  }

  return (
    <div className={classes.container}>
      <button onClick={() => reRoll()} disabled={rolling}>
        {buttonText}
      </button>
    </div>
  )
}

export default ReRollButton