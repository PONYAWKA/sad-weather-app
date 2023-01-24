import { describe, expect, test } from "@jest/globals";

import { getCityCoord } from "@/api/cityCoordAPI/index";
describe("city Coord API", () => {
  test("Moscow", async () => {
    const { city } = await getCityCoord(55.75, 37.62);
    expect(city).toBe("Moscow");
  });
  test("Kirov", async () => {
    const { city } = await getCityCoord(58.6, 49.66);
    expect(city).toBe("Kirov");
  });
  test("Accra", async () => {
    const { city } = await getCityCoord(5.56, -0.2);
    expect(city).toBe("Accra");
  });
});
