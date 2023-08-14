import Image from 'next/image'
import charmander from '../../../../public/pokemon/Charmander.webp'
import classes from './pokemon.module.css';

const page = () => {
  return (
    <div>
      <Image 
      src={charmander}
      alt='a picture of Charmander'
      width={200}
      height={200}
      priority
      />
      <p>You Caught a Charmander! </p>
      <p>Last updated: {new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</p>
    </div>
  )
}

export default page