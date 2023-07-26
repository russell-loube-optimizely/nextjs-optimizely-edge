import Image from 'next/image'
import charmander from '../../../../public/pokemon/Charmander.webp'

const page = () => {
  return (
    <div>
      <Image 
      src={charmander}
      alt='a picture of Charmander'
      priority
      />
    </div>
  )
}

export default page