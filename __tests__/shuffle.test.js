const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("return an array", () => {
    const input = [1,2,3,4,5]
    const output = shuffle(input)
    expected(Array.isArray(output)).toBe(true)
  })

  test("return an array of the same length as the argument", () => {
    const input = [1,2,3,4,5]
    const output = shuffle(input)
    expect(output.length).toBe(input.length)
  })

  test("contain all the same items as the argument", () => {
    const input = [1, 2, 3, 4, 5]
    const output = shuffle(input)
    expect(output).toEqual(expect.arrayContaining(input))
  })

  test("shuffle the items in the array", () => {
    const input = [1, 2, 3, 4, 5]
    const output = shuffle(input)
    expect(output).not.toEqual(input)
  })
});

/*describe("calculateTotalHealth should...", () => { 
  test("return 0 for an empty array of robots", () => { 
    const robots = [] 
    const totalHealth = calculateTotalHealth(robots); 
    expect(totalHealth).toBe(0)
   })
  test("return the correct sum of health values for an array of robots", () => { 
    const robots = [ { name: "Robot 1", health: 100 }, { name: "Robot 2", health: 150 }, { name: "Robot 3", health: 75 }, ] 
    const totalHealth = calculateTotalHealth(robots)
    expect(totalHealth).toBe(325)
  })
});

describe("calculateTotalAttack should...", () => { 
  test("return 0 for an empty array of robots", () => { 
    const robots = []; 
    const totalAttack = calculateTotalAttack(robots); 
    expect(totalAttack).toBe(0); 
  })
  test("return the correct sum of attack damage values for an array of robots", () => { 
    const robots = [ { name: "Robot 1", attacks: [{ name: "Attack 1", damage: 50 }, { name: "Attack 2", damage: 20 }], }, { name: "Robot 2", attacks: [{ name: "Attack 1", damage: 30 }, { name: "Attack 2", damage: 40 }], }, ]
    const totalAttack = calculateTotalAttack(robots)
    expect(totalAttack).toBe(140)
  }) 
});
*/