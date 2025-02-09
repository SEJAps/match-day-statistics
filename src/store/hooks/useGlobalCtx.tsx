import { useContext } from "react"
import { GlobalContext } from "../context"

export const useGlobalCtx = () => {
  const ctx = useContext(GlobalContext)
  if (!ctx) throw new Error("Contexto no definido!")
  return ctx
}