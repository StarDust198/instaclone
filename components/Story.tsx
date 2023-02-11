import { FakeUser } from '@/interfaces/fakeUser.interface';

export const Story = ({ img, username }: Omit<FakeUser, 'id'>) => {
  return (
    <div>
      <img src={img} alt={username} />
      <p>{username}</p>
    </div>
  );
};
