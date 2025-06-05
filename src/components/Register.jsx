import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
  GoogleOneTap,
} from "@clerk/clerk-react";

export default function Register() {
  return (
    <>
      <SignedOut>
        <GoogleOneTap />
        <SignUpButton>
          <button className="bg-purple-700 font-[JetBrains Mono] font-extrabold p-3 hover:bg-blue-800 transition delay-75 ease-in-out duration-100">
            Register
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
