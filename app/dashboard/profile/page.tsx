import Image from "next/image";
import bg from "@/public/index_bg.jpg";
import { Metadata } from "next";
import clsx from "clsx";
import { lusitana } from "@/app/fonts";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  CameraIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { User } from "@/app/lib/entities/users";
import { BASE_URL } from "@/app/lib/constants";
export const metadata: Metadata = {
  title: "Profile Page | The hive",
  description: "This is Profile page for he hive",
  // other metadata
};

const Profile = async () => {
  let user: User;
  try {
    const response = await await fetch(`${BASE_URL}/users/profile`, {
      cache: "no-cache",
    });
    const responseData = await response.json();
    if (response.ok) {
      user = responseData;
    } else if (response.status === 401) {
      // Unauthorized
    } else {
      // Any other error
    }
  } catch (error) {}

  return (
    <div className="flex flex-col items-center">
      <p
        className={clsx(
          "text-2xl pb-10 text-start self-start",
          lusitana.className
        )}
      >
        Profile
      </p>
      <Card className="w-full overflow-clip">
        <CardHeader className="p-0 relative">
          <Image
            alt="Profile"
            src={bg}
            className="h-32 object-cover md:h-36 lg:h-52"
          />
          <Image
            alt="Profile"
            src={bg}
            className={clsx(
              "absolute self-center -bottom-7 md:-bottom-9 lg:-bottom-11",
              "h-24 w-24 object-cover md:h-32 md:w-32 lg:w-40 lg:h-40 rounded-full",
              "border-accent border-[5px]"
            )}
          />

          <Button className="flex space-x-2 items-center w-fit absolute right-2 bottom-2">
            <CameraIcon /> <span className=" text-lg">Edit</span>
          </Button>
        </CardHeader>
        <CardContent className="pt-10 md:pt-14 lg:pt-16">
          <p className="font-bold text-center text-2xl">Laurent Ouma</p>
          <p className="text-center text-zinc-500 p-3">
            Property manager bio goes here though i need long one to see how it
            works
          </p>
          <div className="grid grid-cols-3 p-3 bg-accent rounded-lg text-center text-zinc-400">
            <div className="space-x-2 border-r border-zinc-400">
              <span className="font-bold ">250</span>
              <span className=" text-sm">Following</span>
            </div>
            <div className="space-x-2 border-r  border-zinc-400">
              <span className="font-bold">280</span>
              <span className="text-sm">Posts</span>
            </div>
            <div className="space-x-2  border-zinc-400">
              <span className="font-bold">430</span>
              <span className="text-sm">Followers</span>
            </div>
          </div>
          <p className="font-bold text-center pt-5">About Me</p>
          <p className="text-center py-5 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque posuere fermentum urna, eu condimentum mauris tempus
            ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies.
            Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed,
            aliquam lacus.
          </p>
          <p className="text-center pb-10">Follow me on</p>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-5 w-fit gap-3 md:gap-6 lg:gap-10">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <GithubIcon />
              <InstagramIcon />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
