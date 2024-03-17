import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroHeader: React.FC<Props> = ({
  subtitle = "The subtitle goes here",
  title = "The title goes here",
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <div className="h-[27vh] relative text-white">
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute bg-black w-full h-full bg-opacity-50 flex flex-col justify-center px-6 md:px-10">
        <p className="">{title}</p>
        <h1 className="text-2xl font-bold md:text-4xl">{subtitle}</h1>
      </div>
    </div>
  );
};

export default HeroHeader;
