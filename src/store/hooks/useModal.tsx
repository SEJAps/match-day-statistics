import { useState } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [isOpenAddMarkModal, setIsOpenAddMarkModal] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsOpenModal((state) => !state);
  };
  const toggleAddMarkModal = (): void => {
    setIsOpenAddMarkModal((state) => !state);
  };
  const openModal = () => {
    setIsOpenModal(() => true);
  };
  const closeModal = () => {
    setIsOpenModal(() => false);
  };
  return {
    isOpenModal,
    isOpenAddMarkModal,
    openModal,
    closeModal,
    toggleModal,
    toggleAddMarkModal,
  };
};
