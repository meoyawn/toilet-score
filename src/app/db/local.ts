import type countries from "../data/countries2.json"

type ISO = keyof typeof countries

const key = "never been"

let cache: Set<ISO> | undefined

export const getNeverBeen = (): Set<ISO> => {
  if (!cache) {
    cache = new Set(JSON.parse(localStorage.getItem(key) || "[]") as Array<ISO>)
  }
  return cache
}

export const addNeverBeen = (iso: ISO): void => {
  const been = getNeverBeen()
  been.add(iso)
  localStorage.setItem(key, JSON.stringify(Array.from(been)))
}
