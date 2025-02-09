import { useState } from "react"

export const useModal = () => {
  const [isOpenModal, setisOpenModal] = useState<boolean>(false)
  const toggleModal = (): void => {
    setisOpenModal(state => !state)
  }
  return { isOpenModal, toggleModal }
}