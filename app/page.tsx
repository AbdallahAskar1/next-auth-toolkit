import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-screen flex-col  items-center justify-center p-24 gap-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-600 to-blue-700">
      <h1
        className={cn(
          "text-white  font-mono font-bold text-6xl",
          font.className
        )}
      >
        🔒next-auth-toolkit
      </h1>
      <p className="text-white text-lg">a simple auth service </p>
      <LoginButton mode="">
        <Button variant={"secondary"} size={"lg"}>
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
