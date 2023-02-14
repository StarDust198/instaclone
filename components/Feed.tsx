import { MiniProfile, Posts, Stories, Suggestions } from 'components';

type Props = {};
export const Feed = (props: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:cols-span-1">
        <div className="fixed w-[380px]">
          {/* Mini profile */}
          <MiniProfile />

          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};
