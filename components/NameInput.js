import React, { useState } from "react";
import { SubHeading, SmallButton, Heading } from "./";
import { createUser } from "./apis";
import { showToolTip } from "./utils.js";
import { FaKissWinkHeart } from "react-icons/fa";
import { useUserContext } from "../context/state";

export const NameInput = () => {
  
  const {
    userName,
    setUserName,
    saveSecretKey,
    saveUserId,
    userId,
    secretKey,
  } = useUserContext();

  const [submitting, setSubmitting] = useState(false);

  const signUp = () => {
    setSubmitting(true);
    if (!userName) {
      showToolTip();
      setSubmitting(false);
      return;
    }

    setUserName(userName);
    createUser(saveUserId, saveSecretKey, userName).then(() =>
      setSubmitting(true)
    );
  };

  if (submitting) {
    return (
      <>
        <Heading label="Creating you love calculator link" />
        <SubHeading label="Please wait" />
        <div className="mt-2 flex justify-center">
          <img src="https://i.imgur.com/fvoOJ5h.gif" alt="wait" />
        </div>
      </>
    );
  }

  return (
    <div className="mx-5 text-left">
      <SubHeading label="Your Name:" />
      <input
        type="text"
        name="fname"
        className="form-control mt-1 focus:outline-0 focus:shadow-outline h-10 border-2 border-gray-500 rounded-lg px-2 block w-full appearance-none leading-normal"
        placeholder="Full Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div className="my-4" data-tooltip="Enter valid name">
        <SmallButton
          label={
            <div className="flex justify-center items-center content-center">
              <div>
                <FaKissWinkHeart className="text-xl" />
              </div>
              <div className="mx-2 text-xl">Create Link</div>
              <div>
                <FaKissWinkHeart className="text-xl" />
              </div>
            </div>
          }
          onClick={signUp}
          color="rgb(252, 77, 33)"
        />
      </div>
    </div>
  );
};
