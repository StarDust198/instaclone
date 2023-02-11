import Image from 'next/image';

type Props = {};

export const Header = (props: Props) => {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="w-24 h-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="Instagram logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-10 h-24 relative lg:hidden cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
            alt="Instagram logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="">Right side</div>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
};
