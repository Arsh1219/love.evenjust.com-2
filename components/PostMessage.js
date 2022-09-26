import React from "react";
import { useState, useEffect } from "react";
import { Heading, Button, SubHeading } from "../components";
import { postMessage, getUser } from "./apis";
import { showToolTip } from "./utils";
var URL = require("url-parse");

export const PostMessage = (props) => {
  const [message, SetMessage] = useState("");
  const [processing, setProcessing] = useState(true);
  const [submitted, setSubmitted] = useState(true);
  const [processingMessage, setProcessingMessage] =
    useState("Fetching Details");

  const onClick = () => {
    const url = new URL(window.location.href);
    const userId = (url.pathname || "").replace("/", "");
    if (!userId) {
      return;
    }
    if (message) {
      showToolTip();
      return;
    }
    postMessage(userId, message).then(() => {
      setProcessing(false);
      setSubmitted(true);
    });

    setProcessing(true);
    setProcessingMessage("Submitting Message");
  };

  const handleChange = (event) => {
    SetMessage(event.target.value);
  };

  if (requestorId) {
    return;
  }
  if (submitted) {
    return (
      <>
        <Heading label="Message Sent" />
        <div className="mt-3">
          <SubHeading
            label={`Do Not tell ${props.name} that you have sent the message.`}
          />
        </div>
        <div className="w-2/3 md:w-1/3  mx-auto flex flex-col">
          <div className="mt-5 mb-3 self-center">
            <Button
              label="Register Now"
              onClick={() => (window.location.href = "/")}
            />
          </div>
          <div className="mb-3">
            <Button
              label="Send another message"
              onClick={(e) => window.location.reload()}
            />
          </div>
        </div>
        <div className="mx-4">
          <Toc />
        </div>
      </>
    );
  }
  if (processing) {
    return (
      <>
        <Heading label="Secret Message Book" />
        <SubHeading label={processingMessage} />
        <div className="mt-2 flex justify-center">
          <img src="/loading.svg" alt="wait" />
        </div>
      </>
    );
  }

  const url = new URL(window.location.href);
  const userId = (url.pathname || "").replace("/msg/", "").replace("/", "");
  if (!userId) {
    return;
  }

  return (
    <>
      <SubHeading label="Send Secret Message to" />
      <div className="mt-1">
        <Heading label={`${props.name}`} />
      </div>
      <div className="my-4 w-4/5 mx-auto text-sm text-gray-700">
        <div className="bullets">
          <ol className="text-left list-disc">
            <li>{`${props.name} will never know who sent this message`}</li>
          </ol>
        </div>
      </div>
      <div className="mx-4">
        <textarea
          value={message}
          onChange={handleChange}
          data-emojiable="true"
          className="w-full border-2 border-gray-300 rounded-lg p-3"
          rows="4"
          placeholder="Write Secret Message"
        />
        <div className="my-3">
          <Button label="Submit" onClick={onClick} />
        </div>
        <Toc />
      </div>
    </>
  );
};

const Toc = () => {
  return (
    <div className="mt-3">
      <SubHeading label="Terms of use" />
      <ul className="list-disc text-left">
        <li>Please Don't send threat or harmful messages.</li>
        <li>You can send as many messages you want, but Don't spam</li>
        <li>
          Create your account & share it with friends to get anonymous feedback
        </li>
        <li>We use Cookies in order to make user experience better.</li>
      </ul>
    </div>
  );
};
