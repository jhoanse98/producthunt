import Image from "next/image";
import firebase, { FirebaseContext } from "./firebase";

export default function Home({children,}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h1>inicio</h1>
  );
}
