import Image from "next/image";

interface ProfileProps {
  image: string;
  className?: string;
}

const Profile = ({ image, className = "" }: ProfileProps) => {
  return (
    <div className={`w-[6.25rem] h-[6.25rem] relative ${className}`}>
      <Image
        src={image}
        alt="Profile"
        width={100}
        height={100}
        className="h-full w-full object-cover rounded-full"
      />
      <div className="w-[1.25rem] h-[1.25rem] bg-green-500 border-2 border-white rounded-full absolute bottom-0 right-2"></div>
    </div>
  );
};

export default Profile;
