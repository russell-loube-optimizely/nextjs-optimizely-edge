import Image from 'next/image'
import charmander from '../../../../public/pokemon/Charmander.webp'
import classes from './pokemon.module.css';

const page = () => {
  return (
    <div>
      <Image 
      src={charmander}
      alt='a picture of Charmander'
      priority
      />
      <p>You Caught a Charmander!</p>
    </div>
  )
}

export default page