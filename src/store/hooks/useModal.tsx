import { useState } from "react"

export const useModal = () => {
  const [isOpenModal, setisOpenModal] = useState<boolean>(false)
  const [isOpenAddMarkModal, setIsOpenAddMarkModal] = useState<boolean>(false)

  const toggleModal = (): void => {
    setisOpenModal(state => !state)
  }
  const toggleAddMarkModal = (): void => {
    setIsOpenAddMarkModal(state => !state)
  }
  return { isOpenModal, isOpenAddMarkModal, toggleModal, toggleAddMarkModal }
}