import React, { useState, useEffect, useMemo } from 'react';
import { Buttons } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./IconRandomizer.module.css";
import buttons from "../Buttons/Buttons.module.css";
import * as importedIcons from "@fortawesome/free-regular-svg-icons";

export const IconRandomizer = (): JSX.Element => {
    const [iconKey, setIconKey] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const icons = importedIcons as { [key: string]: any };
    const iconKeys = useMemo(() => Object.keys(icons), []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * iconKeys.length);
        setIconKey(iconKeys[randomIndex]);

    }, [iconKeys]);

    const getRandomIcon = (): void => {
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * iconKeys.length);
            setIconKey(iconKeys[randomIndex]);
            setIsLoading(false);
        }, 3000);
    };

    return (
        <div className={css.container}>
            {iconKey && <FontAwesomeIcon icon={icons[iconKey]} size="5x" color="black"  data-testid="random-icon" />}
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
