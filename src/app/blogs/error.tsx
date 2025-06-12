"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import Button from "../components/Button";
import {useRouter} from "next/navigation";

export default function Error() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-full grid justify-center items-center">
      <Image src="/error.png" alt="error" width={200} height={500} />
      <h2 className="text-xs">
        <span className="text-3xl">Oops </span>Something went wrong!
      </h2>
      <Button label="Try Again" handleClick={handleClick}></Button>
    </div>
  );
}
