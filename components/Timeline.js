import React, { useState, useEffect } from "react";

import { SubHeading } from "../components";
import { getCrushes } from "./apis";
import { useUserContext } from "../context/state";

export const Timeline = (props) => {
  const [crushes, setCrushes] = useState([]);
  const { userName, secretKey } = useUserContext();
  useEffect(() => {
    getCrushes(secretKey).then((data) => setCrushes(data?.friendCrushes));
  }, [secretKey]);

  // componentDidUpdate() {
  //   if (window.location.href.includes("view=friendCrush")) {
  //     setTimeout(() => {
  //       var containerDomNode = ReactDOM.findDOMNode(this);
  //       containerDomNode.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //         inline: "start",
  //       });
  //     }, 1000);
  //   }
  // }

  // render() {
  //   if (this.state.crushes === undefined) {
  //     return false;
  //   }
  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-3 p-2 my-5 bg-gray-300 border border-gray-600 rounded-xlg">
        <SubHeading label="Friends' Crushes" />
        <div className="mt-2 text-yellow-800">
          Important:- Once your Friend Enter name of Lover, Results will be
          shown here. Please reload the page to see latest results
        </div>
        <div className="w-full max-w-3xl mx-auto p-1 border-gray-600 rounded-lg">
          {crushes?.length > 0 ? (
            <ShowCrushData crushes={crushes} />
          ) : (
            <NoCrushesFound />
          )}
        </div>
      </div>
    </>
  );
};

const NoCrushesFound = () => {
  return (
    <>
      <table className="table-bordered table bg-white mt-3 rounded ">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Crush Name</th>
          </tr>
        </thead>
        <tbody />
      </table>
      <p>
        No Friend has tried the love calculator yet. Share link to receive
        updates
      </p>
    </>
  );
};

const ShowCrushData = ({ crushes }) => {
  return (
    <div className="rounded">
      <table className="table-bordered table bg-white mt-3 rounded ">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Crush Name</th>
          </tr>
        </thead>
        <tbody>
          {crushes.reverse().map((c, i) => (
            <tr key={i}>
              <td>{c.f}</td>
              <td>{c.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
