import { convertFeetToAcres } from "../functions.js";
import { cutlawn } from "../functions.js";
import { airquality } from "../functions.js";
import { yeehaw } from "../functions.js";
import { slope } from "../functions.js";

//question 1
describe("converting feet to acres:", function() {
    it(" tesing 43560 feet  ", function () {
        let feet = 43560;
        let acres = convertFeetToAcres(feet);
        expect(acres).toBe(1);
    });
    it(" testing 87120 feet ", function () {
      let feet = 87120;
      let acres = convertFeetToAcres(feet);
      expect(acres).toBe(2);
  });
  it(" testing 130680 feet ", function () {
    let feet = 130680;
    let acres = convertFeetToAcres(feet);
    expect(acres).toBe(3);
});
});

//question 2
describe("cutting the lawn:", function() {
  it(" a 2x2 lawn, cut at 2/min ", function () {
      let width = 2;
      let length = 2;
      let cutrate = 2;
      let minutes = cutlawn(width,length,cutrate);
      expect(minutes).toBe(2);
  });
  it(" a 16x16 lawn, cut at 3/min ", function () {
    let width = 16;
    let length = 16;
    let cutrate = 4;
    let minutes = cutlawn(width,length,cutrate);
    expect(minutes).toBe(64);
});
it(" a 10x20 lawn, cut at 0.5/min ", function () {
  let width = 10;
  let length = 20;
  let cutrate = 0.5;
  let minutes = cutlawn(width,length,cutrate);
  expect(minutes).toBe(400);
});
});

//question 3
describe("air quality:", function() {
  it(" if the air quality is 5 ", function () {
    let quality = 5;
    let description = airquality(quality);
    expect(description).toBe("good");
  });
  it(" if the air quality is 75 ", function () {
      let quality = 75;
      let description = airquality(quality);
      expect(description).toBe("moderate");
  });
  it(" if the air quality is 143 ", function () {
    let quality = 143;
    let description = airquality(quality);
    expect(description).toBe("unhealthy for sensitive groups");
  });
  it(" if the air quality is 173 ", function () {
    let quality = 173;
    let description = airquality(quality);
    expect(description).toBe("unhealthy");
  });
  it(" if the air quality is 233 ", function () {
    let quality = 233;
    let description = airquality(quality);
    expect(description).toBe("very unhealthy");
  });
  it(" if the air quality is 302 ", function () {
    let quality = 302;
    let description = airquality(quality);
    expect(description).toBe("hazardous");
  });
});

//question 4
describe("yeehaw:", function() {
  it(" number is /3 & /7 ", function () {
    let number = 21;
    let answer = yeehaw(number);
    expect(answer).toBe("Yee Ha");
  });
  it(" number is /3 ", function () {
    let number = 9;
    let answer = yeehaw(number);
    expect(answer).toBe("Yee");
  });
  it(" number is /7 ", function () {
    let number = 14;
    let answer = yeehaw(number);
    expect(answer).toBe("Ha");
  });
  it(" number is not /3 or /7 ", function () {
    let number = 5;
    let answer = yeehaw(number);
    expect(answer).toBe("Nada");
  });
});

//question 5
describe("slope:", function() {
  it(" (1,1) and (7,4) ", function () {
    let x1 = 1;
    let y1 = 1;
    let x2 = 7;
    let y2 = 4;
    let slp = slope(x1,y1,x2,y2);
    expect(slp).toBe(0.5);
  });
  it(" (1,4) and (3,12)", function () {
    let x1 = 1;
    let y1 = 4;
    let x2 = 3;
    let y2 = 12;
    let slp = slope(x1,y1,x2,y2);
    expect(slp).toBe(4);
  });
  it(" (4,69) and (1,48)) ", function () {
    let x1 = 4;
    let y1 = 69;
    let x2 = 1;
    let y2 = 48;
    let slp = slope(x1,y1,x2,y2);
    expect(slp).toBe(7);
  });
});