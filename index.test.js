const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(input).not.toBe(actual)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] returns the same object, mutated in place', () => {
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(input).toBe(actual)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer:3},{integer:4},{integer:1},{integer:2}]
    const actual = utils.findLargestInteger(input)
    const expected = 4
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    
    const actual = counter.countDown()
    const expected = 3
    expect(actual).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const actual = counter.countDown()
    const expected = 2
    expect(actual).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const times = 5
    Array.from({length: times}, () => counter.countDown());
    const actual = counter.countDown()
    const expected = 0
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const times = 1
    Array.from({length: times}, () => seasons.next());
    expect(seasons.next()).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const times = 2
    Array.from({length: times}, () => seasons.next());
    expect(seasons.next()).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const times = 3
    Array.from({length: times}, () => seasons.next());
    expect(seasons.next()).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const times = 4
    Array.from({length: times}, () => seasons.next());
    expect(seasons.next()).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const times = 39
    Array.from({length: times}, () => seasons.next());
    expect(seasons.next()).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(10)
    expect(focus.odometer).toEqual(10)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(10)
    expect(focus.tank).toBeLessThan(20)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.tank = 0
    focus.refuel(20)
    expect(focus.drive(1)).toBeGreaterThan(0)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(10)).toEqual(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    expect(utils.isEvenNumberAsync(2)).toBeTruthy
    expect(utils.isEvenNumberAsync(8)).toBeTruthy
    expect(utils.isEvenNumberAsync(24)).toBeTruthy
  })
  test('[20] resolves false if passed an odd number', () => {
    expect(utils.isEvenNumberAsync(1)).toBeFalsy
    expect(utils.isEvenNumberAsync(7)).toBeFalsy
    expect(utils.isEvenNumberAsync(15)).toBeFalsy
  })
})
