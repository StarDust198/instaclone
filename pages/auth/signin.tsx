import { GetServerSideProps } from 'next';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

import { Layout } from 'layout/Layout';

interface SignInPageProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

export default function signInPage({ providers }: SignInPageProps) {
  console.log(providers);

  return (
    <Layout>
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://inzta.com/images/content/buy-instagram-followers.png"
          alt="Instagram Image"
        />
        <div className="">
          {Object.values(providers).map((provider, i) => (
            <div className="flex flex-col items-center" key={provider.id}>
              <img
                className="w-32 object-cover"
                src="https://www.elcedrobarcelona.com/wp-content/uploads/instagram-logo-2.png"
                alt="Instagram Logo"
              />
              <p className="text-sm italic my-10 text-center">
                The app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
