import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import {ArrowLeft} from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full h-full grid gap-4 justify-center items-center">
      <Image src="/not-found.png" width={300} height={500} alt="not found" />
      <Link href="/" className="mx-auto">
        <Button label="Return Home">
          <ArrowLeft className="inline mr-0.5"></ArrowLeft>
        </Button>
      </Link>
    </div>
  );
}
