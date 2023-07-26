import Image from 'next/image'
import bulbasaur from '../../../../public/pokemon/Bulbasaur.png'

const page = () => {
  return (
    <div>
      <Image 
      src={bulbasaur}
      alt='a picture of bulbasaur'
      priority
      />
    </div>
  )
}

export default page