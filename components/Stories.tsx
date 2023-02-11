import { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { FakeUser } from '@/interfaces/fakeUser.interface';
import { Story } from './Story';

type Props = {};

export const Stories = (props: Props) => {
  const [storyUsers, setStoryUsers] = useState<FakeUser[]>([]);

  useEffect(() => {
    const newUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(newUsers);
    console.log(newUsers);
  }, []);

  return (
    <div>
      {storyUsers.map((item) => (
        <Story key={item.id} {...item} />
      ))}
    </div>
  );
};
