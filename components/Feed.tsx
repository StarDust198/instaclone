import { Posts } from './Posts';
import { Stories } from './Stories';

type Props = {};
export const Feed = (props: Props) => {
  return (
    <main>
      <section>
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>
      <section>
        {/* Mini profile */}

        {/* Suggestions */}
      </section>
    </main>
  );
};
