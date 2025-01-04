import { useEffect } from "react";

export default function useCountdown(endtime: Date, elementId: string) {
  useEffect(() => {
    function getTimeRemaining(endtime: Date) {
      const t = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
      return {
        total: t,
        days: Math.floor(t / (1000 * 60 * 60 * 24)),
        hours: Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((t / 1000 / 60) % 60),
        seconds: Math.floor((t / 1000) % 60),
      };
    }

    function initializeClock(endtime: Date) {
      const clock = document.getElementById(elementId);
      if (!clock) return;

      const daysSpan = clock.querySelector(".days");
      const hoursSpan = clock.querySelector(".hours");
      const minutesSpan = clock.querySelector(".minutes");
      const secondsSpan = clock.querySelector(".seconds");

      function updateClock() {
        const t = getTimeRemaining(endtime);

        if (daysSpan) daysSpan.innerHTML = t.days.toString();
        if (hoursSpan) hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        if (minutesSpan) minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        if (secondsSpan) secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }

    initializeClock(endtime);
  }, [endtime, elementId]);
}