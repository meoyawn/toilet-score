import "./index.css"
import { Route, Router, Routes } from "@solidjs/router"
import { render } from "solid-js/web"
import { Game } from "./app/Game"
import { Score } from "./app/Score"

const root = document.getElementById("root")

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  )
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Game} />
        <Route path="/score" component={Score} />
      </Routes>
    </Router>
  ),
  root!,
)
