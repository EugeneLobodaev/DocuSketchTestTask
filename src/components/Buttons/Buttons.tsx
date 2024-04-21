import React from 'react';
import { ButtonHTMLAttributes } from "react";

export const Buttons = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{props.name}</button>;
};
