import React from "react";
import { FaMask } from "react-icons/fa";

export const Heading = ({ label }) => {
  return <h3 className="text-xl font-semibold">{label}</h3>;
};

export const SubHeading = ({ label }) => {
  return <h4 className="text-xl font-medium text-center">{label}</h4>;
};

export const ButtonBase = ({ label, onClick }) => {
  return (
    <button
      className="w-full p-2 focus:outline-0 hover:outline-0 font-semibold tracking-wide text-white text-center rounded-lg bg-red-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const Button = (props) => {
  return (
    <span className="text-lg">
      <ButtonBase {...props} />
    </span>
  );
};

export const SmallButton = (props) => (
  <span className="text-md">
    <ButtonBase {...props} />
  </span>
);

export const ButtonMask = () => (
  <span className="mx-2 md:mx-4 text-gray-500 text-xl">
    <FaMask />
  </span>
);
