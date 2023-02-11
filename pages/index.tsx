import Head from 'next/head';

import { Header } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Instaclone</title>
        <meta
          name="description"
          content="Instagram Clone. Made for learning purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </>
  );
}
