import { describe, expect, test } from "@jest/globals";

import { getBackgroundImageUrLv1 } from "@/utils/getBackgroundImageUrl";
import { getCityName } from "@/utils/getCityName";
import { getCurrentDate } from "@/utils/getCurrentData";
import { getCurrentTime } from "@/utils/getCurrentTime";
import { getCurrentWeekDay } from "@/utils/getCurrentWeekDay";
describe("Utils Test", () => {
  test("Background image", () => {
    expect(getBackgroundImageUrLv1("snow")).toBe(
      "https://source.unsplash.com/1920x1080/?snow"
    );
  });
  test("getCityName", () => {
    expect(getCityName("Vitebsk, Belarus")).toBe("Vitebsk");
  });
  test("getCurrentData", () => {
    expect(getCurrentDate()).not.toBeUndefined();
  });
  test("getCurrentTime", () => {
    expect(getCurrentTime()).not.toBeUndefined();
  });
  test("curPos test", () => {
    expect(getCurrentWeekDay("2023-01-24")).toBe("Tue");
  });
});
