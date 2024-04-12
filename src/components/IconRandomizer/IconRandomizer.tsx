import { Buttons } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import css from "./IconRandomizer.module.css";
import buttons from "../Buttons/Buttons.module.css";
import * as importedIcons from "@fortawesome/free-regular-svg-icons";

type IconRandomizerProps = Record<string, never>;

export const IconRandomizer = (): JSX.Element => {
  const [iconKey, setIconKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const icons = importedIcons as { [key: string]: any };
  const iconKeys = Object.keys(icons);
  const randomIndex = Math.floor(Math.random() * iconKeys.length);
  const randomIcon = icons[iconKey];

  useEffect(() => {
    setIconKey(iconKeys[randomIndex]);
  }, []);

  const getRandomIcon = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIconKey(iconKeys[randomIndex]);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className={css.container}>
      <FontAwesomeIcon icon={randomIcon} size="5x" color="black" />
      <Buttons
        disabled={isLoading}
        name="Show random icon"
        onClick={getRandomIcon}
        className={buttons.button}
      />
      <span>{isLoading ? "Loading..." : `Icon key: ${iconKey}`}</span>
    </div>
  );
};
