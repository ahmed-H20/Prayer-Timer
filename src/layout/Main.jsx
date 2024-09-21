/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Banner from "../componants/Banner";
import LiveTimer from "../pages/LiveTimer";
import Nav from "../componants/Nav";
import PrayTimes from "../pages/PrayTimes";
import Footer from "../componants/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

/* eslint-disable react/no-unescaped-entities */
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
  const [remainingTime, setRemainingTime] = useState("00");
  const [city, setCity] = useState({
    cityApi: "Cairo",
    cityName: "القاهرة",
    countryIso: "EG",
  });

  // Get the data
  const [time, setTimes] = useState({});
  const [date, setDate] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?city=${city.cityApi}&country=${city.countryIso}`
      )
      .then((res) => {
        const times = res.data.data.timings;
        const date = res.data.data.date;
        setTimes(times);
        setDate(date);
        setupCountdownTimer();
        setLoading(false);
        console.log(city);
      });
  }, [city]);

  // detrmine next pray
 
  const prayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Sunset", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];
  const [nextPrayer, setNextPrayer] = useState(""); 

  const setupCountdownTimer = () => {
    const momentNow = moment();

    let prayerIndex = 2;

    if (
      momentNow.isAfter(moment(time.Fajr, "hh:mm")) &&
      momentNow.isBefore(moment(time.Dhuhr, "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(time.Dhuhr, "hh:mm")) &&
      momentNow.isBefore(moment(time.Asr, "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(time.Asr, "hh:mm")) &&
      momentNow.isBefore(moment(time.Sunset, "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(time.Sunset, "hh:mm")) &&
      momentNow.isBefore(moment(time.Isha, "hh:mm"))
    ) {
      prayerIndex = 4;
    } else {
      prayerIndex = 0;
    }

    setNextPrayerIndex(prayerIndex);
    // now after knowing what the next prayer is, we can setup the countdown timer by getting the prayer's time
    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = time[nextPrayerObject.key];
    setNextPrayer(nextPrayerObject.displayName);
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    if (remainingTime < 0) {
      const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
      const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
        moment("00:00:00", "hh:mm:ss")
      );

      const totalDiffernce = midnightDiff + fajrToMidnightDiff;

      remainingTime = totalDiffernce;
    }
    console.log(remainingTime);

    const durationRemainingTime = moment.duration(remainingTime);

    setRemainingTime(
      `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
    );
    console.log(
      "duration issss ",
      durationRemainingTime.hours(),
      durationRemainingTime.minutes(),
      durationRemainingTime.seconds()
    );
  };

  useEffect(() => {
    setupCountdownTimer();
    let interval = setInterval(() => {
      setupCountdownTimer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  
  console.log(remainingTime)
  return (
    <>
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="container mx-auto">
          <Nav />
          <Banner />
          <PrayTimes times={time} date={date} />
          <LiveTimer
            times={time}
            dataToParent={(data) => {
              setCity(data);
            }}
            nextPrayer = {nextPrayer}
            remainingTime = {remainingTime}
          />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
