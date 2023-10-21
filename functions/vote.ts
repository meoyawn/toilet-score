import { type Env } from "./types"

// noinspection JSUnusedGlobalSymbols
export const onRequestPost: PagesFunction<Env> = async ({ env, request }) => {
  console.log(request.url)
  return new Response("Yo")
}
