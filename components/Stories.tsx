import { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

import { IFakeUser } from 'interfaces';
import { Story } from 'components';

type Props = {};

export const Stories = (props: Props) => {
  const [storyUsers, setStoryUsers] = useState<IFakeUser[]>([]);

  useEffect(() => {
    const newUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(newUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 mt-8 bg-white border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {storyUsers.map((item) => (
        <Story key={item.id} {...item} />
      ))}
    </div>
  );
};
