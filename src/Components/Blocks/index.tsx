import React from "react";
import "./blocks.scss";

export const Block = ({
  image,
  title,
  content,
  style,
}: {
  image: any;
  title: string;
  content: string;
  style?: object;
}) => {
  return (
    <div className="Block" style={style}>
      {image}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

interface Props {
  children?: React.ReactNode;
  style?: object;
}
export const Blocks: React.FunctionComponent<Props> = (props) => {
  return (
    <div style={props.style} className="Blocks">
      {props.children}
    </div>
  );
};

export default { Blocks, Block };
