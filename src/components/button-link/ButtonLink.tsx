import Link from "next/link";

interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`${
        variant === "primary" ? "bg-black text-white" : "bg-white text-black"
      } px-[1.25rem] py-[0.825rem] rounded-[1.875rem] text-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
