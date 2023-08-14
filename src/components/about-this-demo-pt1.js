import Link from "next/link";
import { cookies } from 'next/headers'
import classes from './about-this-demo.module.css'

const AboutOptimizelyPt1 = () => {
  const cookieStore = cookies();
  const pokemon = cookieStore.get('pokemon')?.value || '';
  const userId = cookieStore.get('userId')?.value || '';

  return (
    <div className={classes.container}>
      <div className={classes.container__text}>
        <h1>
          Optimizely + Vercel
        </h1>
        <h2>
          Feature Flagging at the Edge
        </h2>
        <p>
          {`This demo shows how to use Optimizely's JavaScript SDK to run experiments on a Vercel-hosted Next.js app.
          This instance takes advantage of Vercel's Edge Network to run feature flagging at the edge.`} 
        </p>
        <p>
        <Link href='https://vercel.com/docs/storage/edge-config' style={{color: 'lightblue'}}> 
          {`Learn more about Vercel's edge config here.`}
        </Link>
        </p>
        <p>
          {`In this example, decisioning is executed in middleware to re-write the value of the URL. 
          Based on the decision, you're seeing a specific pokemon below.`}
        </p>
      </div>
    </div>
  );
};

export default AboutOptimizelyPt1;
