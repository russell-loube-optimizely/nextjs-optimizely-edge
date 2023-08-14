import Image from 'next/image'
import squirtle from '../../../../public/pokemon/Squirtle.webp'
import classes from './pokemon.module.css';

const page = () => {
  return (
    <div>
      <Image 
      src={squirtle}
      alt='a picture of Squirtle'
      width={200}
      height={200}
      priority
      />
      <p>You Caught a Squirtle! </p>
      <p>Last updated: {new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</p>
    </div>
    
  )
}

export default page