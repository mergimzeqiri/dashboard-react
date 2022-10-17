import React from "react";
import { PlayCircleFilled, LeftCircleOutlined } from "@ant-design/icons";
import "./Button.scss";

interface Props {
  leftIcon?: boolean;
  onClick?: (id?: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ leftIcon, onClick }: Props) {
  return (
    <div className="Button">
      {leftIcon ? (
        <button type="button" onClick={onClick}>
          <LeftCircleOutlined />
          Exit
        </button>
      ) : (
        <button onClick={onClick} type="button">
          Details
          <PlayCircleFilled />
        </button>
      )}
    </div>
  );
}
