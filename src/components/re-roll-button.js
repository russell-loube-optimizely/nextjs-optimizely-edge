'use client';

const ReRollButton = () => {
  const reRoll = async () => {
    await fetch('/api/delete-opti-cookies');
    window.location.reload();
  }

  return (
    <button onClick={() => reRoll()}>
      Re-Roll for another pokemon!
    </button>
  )
}

export default ReRollButton