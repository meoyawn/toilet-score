import { createMemo, createSignal, type Component } from "solid-js"
import countries from "./data/countries2.json"
import { addNeverBeen, getNeverBeen } from "./db/local"
import { pickTwoRandomElements } from "./random"

type ISO = keyof typeof countries

const calcAvailableCountries = (): ReadonlyArray<ISO> => {
  const neverBeen = getNeverBeen()
  return (Object.keys(countries) as ISO[]).filter(x => !neverBeen.has(x))
}

const [availableCountries, setAvailableCountries] = createSignal(
  calcAvailableCountries(),
)

const [seed, setSeed] = createSignal(Math.random())

const Country: Component<{ iso: ISO; other: ISO }> = props => (
  <div class="relative flex-1 transform transition-all duration-200 ease-in-out hover:scale-105">
    <button
      class="absolute inset-0"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={async () => {
        const r = await fetch("/vote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(props),
        })
        setSeed(Math.random())
      }}
    />

    <div class="rounded-lg bg-white p-4 shadow-lg">
      <p class="mx-auto flex h-32 w-full items-center justify-center text-8xl">
        {countries[props.iso][1]}
      </p>

      <h2 class="text-center text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {countries[props.iso][0]}
      </h2>
    </div>
  </div>
)

export const Game: Component = () => {
  const pair = createMemo(() =>
    pickTwoRandomElements(availableCountries(), seed()),
  )

  return (
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 class="text-center text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
          Which one has cleaner toilets?
        </h1>

        <div class="mt-12 flex flex-row gap-8">
          <Country iso={pair()[0]} other={pair()[1]} />
          <button>Not sure</button>
          <Country iso={pair()[1]} other={pair()[0]} />
        </div>
        <div class="mt-12 flex justify-center" />
      </div>
    </div>
  )
}
