'use client';

import classes from './re-roll-button.module.css';

import { useState } from "react";

const ReRollButton = () => {
  const [rolling, setRolling] = useState(false);
  const [buttonText, setButtonText] = useState('Re-Roll for another pokemon!');

  const reRoll = async () => {
    setRolling(true);
    setButtonText('Loading...');
    await fetch('/api/delete-opti-cookies');
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