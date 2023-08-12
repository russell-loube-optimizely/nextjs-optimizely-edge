import Link from "next/link";
import { cookies } from 'next/headers'
import classes from './about-this-demo.module.css'

const AboutOptimizelyPt2 = () => {
  const cookieStore = cookies();
  const pokemon = cookieStore.get('pokemon')?.value || '';
  const userId = cookieStore.get('userId')?.value || '';

  return (
    <div className={classes.container}>
      <div className={classes.container__text}>
        <p>  
          {`After an initial fetch for the project datafile from Optimizely's CDN, we store the datafile at the edge with Vercel's edge config. 
          With the datafile stored at the edge, the datafile can be read in a matter of milliseconds (or less!) when instantiating Optimizely in the future.`}
        </p>
      </div>
    </div>
  );
};

export default AboutOptimizelyPt2;