import Link from "next/link";
import Image from "next/image";
import classes from './about-this-demo.module.css'

const AboutOptimizelyPt2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__text}>
        <p>  
          {`After an initial fetch for the project datafile from Optimizely's CDN, we store the datafile at the edge with Vercel's edge config. 
          With the datafile stored at the edge, the datafile can be read in a matter of milliseconds (or less!) when instantiating Optimizely in the future.
          Below is a diagram of how this works.`}
        </p>
      </div>
      <div className={classes.diagram__container}>  
        <Image 
          src='/diagram-optimizely-vercel.png' 
          fill
          sizes="100vw, (max-width: 500px) 60vw"
          objectFit="contain"
          alt='A diagram of how Optimizely leverages Vercel for Feature Flagging at the Edge' 
        />
      </div>
    </div>
  );
};

export default AboutOptimizelyPt2;