import Head from 'next/head';

import { Feed, Header } from 'components';
import { Layout } from 'layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Instaclone</title>
        <meta
          name="description"
          content="Instagram Clone. Made for learning purposes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Feed */}
      <Feed />

      {/* Modal */}
    </Layout>
  );
}
