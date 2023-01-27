import { useEffect, useState } from "react";

import {
  ClockBody,
  ClockContainer,
  Timer as ClockTimer,
} from "@/components/Clock/styled";
import { getCurrentDate } from "@/utils/getCurrentData";
import { getCurrentTime } from "@/utils/getCurrentTime";

export const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());
  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ClockBody>
      <ClockContainer>
        <ClockTimer>{time}</ClockTimer>
        {getCurrentDate()}
      </ClockContainer>
    </ClockBody>
  );
};
