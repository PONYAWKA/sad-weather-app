import { describe, expect, test } from "@jest/globals";

import { getHourlyWeather } from "@/api/hourlyWeather/index";

describe("city Coord API", () => {
  test("Moscow hourly weather", async () => {
    const { days } = await getHourlyWeather(55.75, 37.62);
    expect(days).not.toBeUndefined();
  });
});
