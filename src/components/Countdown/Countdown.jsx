import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Gallery } from "../Gallery";

import "./styles.css";

const LIMIT_DATE = {
  year: 2022,
  month: 8,
  day: 30,
};

export const Countdown = ({ onReachLimitTime }) => {
  const [countdown, setCountdown] = useState(null);
  const [isLimitTime, setIsLimitTime] = useState(false);

  useEffect(() => {
    const [currentMonth, currentDay, currentYear] = new Date()
      .toLocaleDateString()
      .split("/");

    if (
      currentYear > LIMIT_DATE.year ||
      currentMonth > LIMIT_DATE.month ||
      currentDay >= LIMIT_DATE.day
    ) {
      setCountdown({ seconds: 0, minutes: 0, hours: 0, days: 0 });
      setIsLimitTime(true);
      onReachLimitTime()
      return;
    }

    const interval = setInterval(() => {
      const date = new Date();

      const [, currentDay] = date.toLocaleDateString().split("/");

      const seconds = 59 - date.getSeconds();
      const minutes = 59 - date.getMinutes();
      const hours = 23 - date.getHours();
      const days = LIMIT_DATE.day - 1 - currentDay;

      setCountdown({ seconds, minutes, hours, days });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [onReachLimitTime]);

  if (!countdown) return null;

  return (
    <>
      <section className="countdown">
        <div className="countdown-container-cell">
          <div className="countdown-time">
            <h2>Days</h2>
            <p>{countdown.days}</p>
          </div>
        </div>
        <div className="countdown-container-cell">
          <div className="countdown-time">
            <h2>Hours</h2>
            <p>{countdown.hours}</p>
          </div>
        </div>
        <div className="countdown-container-cell">
          <div className="countdown-time">
            <h2>Minutes</h2>
            <p>{countdown.minutes}</p>
          </div>
        </div>
        <div className="countdown-container-cell">
          <div className="countdown-time">
            <h2>Secs</h2>
            <p>{countdown.seconds}</p>
          </div>
        </div>
      </section>
      {isLimitTime && <Gallery />}
      {isLimitTime && <Confetti />}
    </>
  );
};
