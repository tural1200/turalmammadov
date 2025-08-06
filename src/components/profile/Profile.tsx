import Image from "next/image";

interface ProfileProps {
  image: string;
  className?: string;
}

const Profile = ({ image, className = "" }: ProfileProps) => {
  return (
    <div
      className={`w-[6.25rem] h-[6.25rem] rounded-full overflow-hidden ${className}`}
    >
      <Image src={image} alt="Profile" width={100} height={100} />
    </div>
  );
};

export default Profile;
