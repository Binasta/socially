import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
   <div className="m-4">
    <h1>home page</h1>
   </div>
  );
}
