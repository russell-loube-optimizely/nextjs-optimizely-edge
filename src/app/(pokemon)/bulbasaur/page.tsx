import Image from 'next/image'
import bulbasaur from '../../../../public/pokemon/Bulbasaur.png'
import classes from './pokemon.module.css';

const page = () => {
  return (
    <div>
      <Image 
      src={bulbasaur}
      alt='a picture of bulbasaur'
      priority
      />
      <p>You Caught a Bulbasaur!</p>
    </div>
  )
}

export default page