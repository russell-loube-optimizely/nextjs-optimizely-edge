import Image from 'next/image'
import squirtle from '../../../../public/pokemon/Squirtle.webp'
import classes from './pokemon.module.css';

const page = () => {
  return (
    <div>
      <Image 
      src={squirtle}
      alt='a picture of Squirtle'
      priority
      />
      <p>You Caught a Squirtle!</p>
    </div>
    
  )
}

export default page