This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## SELF NOTE
# npm i babel-plugin-react-compiler it help in providing builtint functionality for memoising so after this and adding
# reactCompiler: true, in next config we can have all the feature of react usememo() hook


## Post endpoint curl response
curl -X POST "http://localhost:3000/api/events" \
  -F "title=bitoin event 2026" \
  -F "description=Google’s premier cloud computing event, showcasing innovations in AI, infrastructure, and enterprise solutions." \
  -F "overview=Cloud Next 2025 highlights the latest in cloud-native development, Kubernetes, AI, and enterprise scalability. Developers, architects, and executives gather to learn about new Google Cloud services, best practices, and success stories." \
  -F "venue=Moscone Center" \
  -F "location=San Francisco, CA" \
  -F "date=2025-04-10" \
  -F "time=08:30" \
  -F "mode=hybrid " \
  -F "audience=Cloud engineers, DevOps, enterprise leaders, AI researchers" \
  -F "agenda=08:30 AM - 09:30 AM | Keynote: AI-Driven Cloud Infrastructure" \
  -F "organizer=Google Cloud organizes Cloud Next..." \
  -F "tags=Cloud" \
  -F "image=@/Users/daliptandon/Downloads/assets 2/public/images/event2.png"