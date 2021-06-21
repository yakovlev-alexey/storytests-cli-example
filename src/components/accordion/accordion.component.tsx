import React, { FC, HTMLProps } from "react";

export type TAccrodionProps = HTMLProps<HTMLDivElement>;

const Accordion: FC<TAccrodionProps> = (props) => {
  return <div {...props} />;
};

export default Accordion;
