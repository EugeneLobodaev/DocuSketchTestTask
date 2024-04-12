import { Buttons } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import css from "./IconRandomizer.module.css";
import buttons from "../Buttons/Buttons.module.css";
import * as importedIcons from "@fortawesome/free-regular-svg-icons";

type IconRandomizerProps = Record<string, never>;

export const IconRandomizer = ({}: IconRandomizerProps) => {
  const icons = importedIcons as { [key: string]: any };
  const [iconKey, setIconKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const iconKeys = Object.keys(icons);
    setIconKey(iconKeys[Math.floor(Math.random() * iconKeys.length)]);
  }, []);

  const getRandomIcon = (): void => {
    setLoading(true);
    setTimeout(() => {
      const iconKeys = Object.keys(icons);
      setIconKey(iconKeys[Math.floor(Math.random() * iconKeys.length)]);
      setLoading(false);
    }, 3000);
  };

  const randomIcon = icons[iconKey];

  return (
    <div className={css.container}>
      <FontAwesomeIcon icon={randomIcon} size="5x" color="black" />
      <Buttons
        disabled={loading}
        name="Show random icon"
        onClick={getRandomIcon}
        className={buttons.button}
      />
      <span>{loading ? "Loading..." : `Icon key: ${iconKey}`}</span>
    </div>
  );
};
