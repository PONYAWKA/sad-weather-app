import { useEffect, useRef, useState } from "react";

import { ClockBody, ClockContainer, Timer } from "@/components/Clock/styled";
import { getCurrentDate } from "@/utils/getCurrentData";
import { getCurrentTime } from "@/utils/getCurrentTime";

export const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());
  const timerRef = useRef(0);
  useEffect(() => {
    timerRef.current = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  });

  return (
    <ClockBody>
      <ClockContainer>
        <Timer>{time}</Timer>
        {getCurrentDate()}
      </ClockContainer>
    </ClockBody>
  );
};