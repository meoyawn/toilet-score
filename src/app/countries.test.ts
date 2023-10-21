import { writeFile } from "fs/promises"
import { test } from "vitest"
import countries1 from "./data/countries.json"

test("x", async () => {
  const s = JSON.stringify(
    Object.fromEntries(
      countries1.map(({ iso, flag, name }) => [
        iso,
        [name.trim(), flag.trim()],
      ]),
    ),
  )
  await writeFile("./countries2.json", s)
})
