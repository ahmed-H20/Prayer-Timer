/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Card from "../componants/Card";
import { useState } from "react";

const LiveTimer = ({ times, dataToParent, nextPrayer, remainingTime }) => {
  const [city, setCity] = useState({
    cityApi: "Cairo",
    cityName: "القاهرة",
    countryIso: "EG",
  });

  const handleCityChange = (event) => {
    const cityObject = availableCity.find(
      (city) => city.cityApi == event.target.value
    );
    setCity(cityObject);
    dataToParent(cityObject);
    console.log(cityObject);
  };

  const availableCity = [
    {
      cityApi: "Cairo",
      cityName: "القاهرة",
      countryIso: "EG",
    },
    {
      cityApi: "Ismaillia",
      cityName: "الاسماعيلية",
      countryIso: "EG",
    },
    {
      cityApi: "Makkah",
      cityName: "مكة المكرمة",
      country: "SAU",
    },
  ];
  return (
    <div className="py-7 flex-col">
      {/*Next Pray info */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center text-3xl Font-formal bg-[#001d43] rounded-xl"
        dir="rtl"
      >
        <div className="flex flex-col text-white  my-7 sm:w-1/2 sm:items-end items-center justify-center ">
          <p className="py-4 ">متبقى على صلاة {nextPrayer}</p>
          <h1 className="text-3xl sm:text-7xl font-bold ">{remainingTime}</h1>
        </div>
        <div className="text-white w-1/2 flex-col items-center justify-center flex pb-4 sm:pb-0">
          <div className="flex mb-3">
            <p className="mx-3 hidden sm:block">المدينة : </p>
            <h1 className="flex">{city.cityName}</h1>
          </div>
          <select
            dir="rtl"
            className="select select-bordered w-full max-w-xs text-[#001d43]"
            onChange={handleCityChange}
          >
            <option disabled selected>
              اختر المدينة !
            </option>
            {availableCity.map((city) => (
              <option key={city.cityApi} value={city.cityApi}>
                {city.cityName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* pray Cards for mobile screens */}
      <div dir="rtl" className="flex gap-3 mt-7 hidden sm:flex">
        <Card
          img="https://i.ibb.co/WW7qwv4/12780409-5053115.jpg"
          name="الفجر"
          time={times.Fajr}
        />
        <Card
          img="https://i.ibb.co/GxB1v4X/22870062-6660135.jpg"
          name="الظهر"
          time={times.Dhuhr}
        />
        <Card
          img="https://i.ibb.co/JF3VTtT/23615694-6713878.jpg"
          name="العصر"
          time={times.Asr}
        />
        <Card
          img="https://i.ibb.co/SPSwNg2/22632675-6647954.jpg"
          name="المغرب"
          time={times.Sunset}
        />
        <Card
          img="https://i.ibb.co/Bn60FWW/22870099-6705765.jpg"
          name="العشاء"
          time={times.Isha}
        />
      </div>
      {/* PRAY Cards */}
      <div className="carousel carousel-center rounded-box max-w-sm space-x-4 p-4 sm:hidden">
        <div className="carousel-item">
          <Card
            img="public/12780409_5053115.jpg"
            name="الفجر"
            time={times.Fajr}
          />
        </div>
        <div className="carousel-item">
          <Card
            img="public/22870062_6660135.jpg"
            name="الظهر"
            time={times.Dhuhr}
          />
        </div>
        <div className="carousel-item">
          <Card
            img="public/23615694_6713878.jpg"
            name="العصر"
            time={times.Asr}
          />
        </div>
        <div className="carousel-item">
          <Card
            img="public/22632675_6647954.jpg"
            name="المغرب"
            time={times.Sunset}
          />
        </div>
        <div className="carousel-item">
          <Card
            img="public/22870099_6705765.jpg"
            name="العشاء"
            time={times.Isha}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveTimer;
