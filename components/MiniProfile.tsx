type Props = {};

export const MiniProfile = (props: Props) => {
  const user = {
    username: 'Serg198x',
    userImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png',
  };

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {/* Image */}
      <img
        src={user.userImg}
        alt={user.username}
        className="h-16 rounded-full object-cover border p-[2px]"
      />

      {/* Title */}
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      {/* Sign out */}
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
};
