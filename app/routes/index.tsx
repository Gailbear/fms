import ChitChat from "~/components/chitchat";
import MyButton from "~/components/button";

import { CakeIcon } from "@heroicons/react/solid";

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <ChitChat />
      <MyButton>
        <CakeIcon className="h-5 w-5 inline" /> Hello world
      </MyButton>
    </div>
  );
}
