import { Buttons } from "../Buttons";
import * as importedIcons from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import css from "./IconRandomizer.module.css";
import buttons from "../Buttons/Buttons.module.css";

export const IconRandomizer = () => {
  //типизируем иконки
  const Icons: { [key: string]: any } = importedIcons;

  //получаем массив строк с именами свойств объекта с иконками
  const iconKeys = Object.keys(Icons);

  //создаем функцию генерации рандомного числа от 0 до числа равному длинне массива
  const getRandomIndex = () => {
    return Math.floor(Math.random() * iconKeys.length);
  };

  //используем хук useState для обновления состояния рандомного числа
  const [randomIndex, setRandomIndex] = useState(getRandomIndex());

  //получаем рандомный ключ для объекта с иконками, который  далее подставляем в объект с иконками
  const randomIconKey = iconKeys[randomIndex];
  const randomIcon = Icons[randomIconKey];

  //создаем функцию, которая будет отрабатывать при клике на кнопку
  const getRandomIcon = () => {
    // вешаем задержку в 3 секунды на кнопку, как написано в задании
    setTimeout(() => {
      //в состояние записываем новое рандомное число , от которого зависит индекс элемента в массиве в свою очередь от которого зависит картинка
      setRandomIndex(getRandomIndex());
    }, 3000);
  };
  return (
    <div className={css.container}>
      <FontAwesomeIcon
        icon={randomIcon}
        size="5x"
        color="black"
      ></FontAwesomeIcon>
      <Buttons
        name="Show random icon"
        onClick={() => getRandomIcon()}
        className={buttons.button}
      />
    </div>
  );
};
