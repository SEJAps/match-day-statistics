import i18n from '../../features/i18n';
import selecLngCSS from './select-language.module.css'
import { FC, FormEvent } from 'react'

export const SelectLanguage: FC = () => {

  const handlerInput = (event: FormEvent<HTMLSelectElement>) => {
    const value: string = (event.target as HTMLSelectElement).value;
    const formData = new FormData()
    formData.set("lang", value)

    i18n.changeLanguage(`${formData.get("lang")}`)
  }
  return (<div className={selecLngCSS.lang}>
    <label className={selecLngCSS.label} htmlFor="lang">
      <select className={selecLngCSS.select} id="lang" name="lang" onInput={handlerInput}>
        <option value="es">ES</option>
        <option value="ca">CAT</option>
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>

    </label>
  </div>)
}