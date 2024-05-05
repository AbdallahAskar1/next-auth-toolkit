"use client";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: Boolean;
}
import { useRouter } from "next/navigation";

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    console.log("login button clicked");
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span className="text-yellow-500">TODO:implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
