/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const Card = ({ img, time, name }) => {
  // Determine AM or PM
  const calculateAmORPm = (time) => {
    const timeInt = parseInt(time[0] + time[1] + time[3] + time[4]);
    if (timeInt < 1200 || timeInt > 2400) {
      return " AM";
    }
    return " PM";
  };

  // Convert 24h to 12h time
  const convertTo12h = (time) => {
    const timeInt = parseInt(time[0] + time[1]);
    if (timeInt > 12) {
      return `${timeInt - 12}:${time[3]}${time[4]}`;
    }
    return time;
  };
  return (
    <div className="card bg-base-100 w-64 sm:w-96 shadow-xl text-4xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title reem-kufi-nav text-4xl mb-2">{name}</h2>
        <p dir="ltr" className="font-bold">
          {convertTo12h(time)} {calculateAmORPm(time)}
        </p>
      </div>
    </div>
  );
};

export default Card;
