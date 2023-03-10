import { useEffect, useState } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';

import { ISuggestion } from 'interfaces';

type Props = {};

export const Suggestions = (props: Props) => {
  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);

  useEffect(() => {
    const newSuggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setSuggestions(newSuggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          className="flex items-center justify-between mt-3"
          key={suggestion.username}
        >
          <img
            className="h-10 rounded-full p-[2px]"
            src={suggestion.img}
            alt={suggestion.username}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestion.username}</h2>
            <h3 className="text-gray-400 text-sm truncate w-[230px]">
              {suggestion.jobTitle}
            </h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};
