This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About This Project

You can visit a demo of the site here: https://nextjs-optimizely-edge-self.vercel.app/

This is a demo showcasing how Optimizely Feature Experimentation can be used with an application deployed on Vercel. We're using the Optimizely Node SDK in the middleware.ts file to make decisions at the edge. Please visit the demo site to learn more about how decisions are being made. 

## Requirements

For this site to work, you'll need an Optimizely account with an SDK key. 

You can create a free account here: https://www.optimizely.com/free-feature-flagging/

You'll also need an account with Vercel. This project uses Vercel Edge Config as well as the Vercel REST API. For read operations (reading datafile from edge Config), we're using the Vercel SDK. For write operations (writing to edge config), we'll be using the Vercel REST API. 

Vercel Edge Config SDK: https://vercel.com/docs/storage/edge-config/edge-config-sdk

Vercel REST API: https://vercel.com/docs/storage/edge-config/vercel-api

You have the option to set up a webhook with Optimizely to update the edge config whenever you update your project. 
Learn more here: https://docs.developers.optimizely.com/full-stack-experimentation/docs/configure-webhooks

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
