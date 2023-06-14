// const utils = require("./utils").default;
import utils from "./utils";

// test("Irsyaad must be winners", () => {
//   const originalGetWinner = utils.getWinner;
//   // utils.getWinner = (p1, p2) => p1;
//   utils.getWinner = jest.fn().mockImplementation(
//     () =>
//       new Promise((resolve, reject) => {
//         reject();
//       })
//   );

//   const winners = utils.getWinner("Irsyaad");
//   expect(winners).toBe("Irsyaad");

//   console.log(utils.getWinner.mock);

//   expect(utils.getWinner).toHaveBeenCalledWith("Irsyaad", "Fulan");

//   // cleanup
//   utils.getWinner = originalGetWinner;
// });

// test("get winner", () => {
//   utils.getWinner = jest.fn((p1, p2) => p1);
//   const winner = warRagnarok("Irsyaad", "Fulan");

//   expect(winner).toBe("Irsyaad");
// });

test("show the winner", () => {
  // utils.showTheWinner()
  window.alert = jest.fn();
  utils.getWinner = jest.fn((p1, _p2) => p1);
  // utils.showTheWinner("Irsyaad", "Fulan");
  // expect(window.alert).toHaveBeenCalledWith("Irsyaad");
});
