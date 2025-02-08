import { FC } from "react"
import imgPng from './Picture2.png'

export const StatAction: FC<{ stat: string }> = ({ stat }) => {
  return (
    <section>
      <h2>{stat}</h2>
      <article>
        <img src={imgPng} alt={'Campo selección'} />
      </article>
    </section>
  )
}