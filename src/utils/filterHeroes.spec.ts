import { getFlyingSuperHeroes } from "./filterHeroes";

describe("getFlyingSuperHeroes", () => {
  it("should be get flying super heroes", () => {
    const flyingSuperHeroes = getFlyingSuperHeroes();
    // console.log(flyingSuperHeroes);
    // expect(flyingSuperHeroes).toEqual([
    //   { name: "Dynaguy", powers: ["fly", "disintegration ray"] },
    //   { name: "Apogee", powers: ["fly", "gravity control"] },
    //   { name: "Jack", powers: ["shapeshifting", "fly"] },
    // ]);
    expect(flyingSuperHeroes).toMatchSnapshot();
  });

  it("should be get flying super heroes", () => {
    const flyingSuperHeroes = getFlyingSuperHeroes();
    // console.log(flyingSuperHeroes);
    // expect(flyingSuperHeroes).toEqual([
    //   { name: "Dynaguy", powers: ["fly", "disintegration ray"] },
    //   { name: "Apogee", powers: ["fly", "gravity control"] },
    //   { name: "Jack", powers: ["shapeshifting", "fly"] },
    // ]);
    expect(flyingSuperHeroes).toMatchInlineSnapshot(`
[
  {
    "name": "Jack",
    "powers": [
      "shapeshifting",
      "fly",
    ],
  },
]
`);
  });
});
