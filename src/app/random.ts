const seededRandom = (seed: number): number => {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export const pickTwoRandomElements = <T>(
  arr: ReadonlyArray<T>,
  seed: number,
): readonly [T, T] => {
  if (arr.length < 2) throw new Error("Array must have at least two elements")

  const i1 = Math.floor(seededRandom(seed) * arr.length)
  let i2

  do {
    i2 = Math.floor(seededRandom(seed + 1) * arr.length)
  } while (i1 === i2)

  return [arr[i1], arr[i2]]
}
