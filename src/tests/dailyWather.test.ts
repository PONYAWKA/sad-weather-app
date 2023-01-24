import { describe, expect, test } from "@jest/globals";

import { getDailyWeatherAPI } from "@/api/dailyWeather/index";
describe("Moscow daily weather", () => {
  test("Moscow weather", async () => {
    const { curIcon, days } = await getDailyWeatherAPI(55.75, 37.62);
    expect(curIcon).not.toBeUndefined();
    expect(days).not.toBeUndefined();
  });
});
