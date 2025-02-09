import { createRoot } from "react-dom/client"

const $ID = (id: string) => document.getElementById(id) as HTMLElement
const $ = (selector: string) => document.querySelector(selector) as HTMLElement
const $All = (selector: string) => [...document.querySelectorAll(selector)] as HTMLElement[]
const root = createRoot

export {
  $, $ID, $All, root
}