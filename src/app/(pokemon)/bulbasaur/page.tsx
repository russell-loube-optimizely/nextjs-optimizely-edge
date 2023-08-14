import Image from 'next/image'
import bulbasaur from '../../../../public/pokemon/Bulbasaur.png'

const page = () => {
  return (
    <div>
      <Image 
      src={bulbasaur}
      alt='a picture of bulbasaur'
      width={200}
      height={200}
      priority
      />
      <p>You Caught a Bulbasaur! </p>
      <p>Last updated: {new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</p>
    </div>
  )
}

export default page