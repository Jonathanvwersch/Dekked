import React from "react";
import Block from "../Block/Block";
import "./Scroller.css";

interface ScrollerProps {
  Data: any;
}

export const Scroller: React.FC<ScrollerProps> = ({ Data }) => {
  return (
    <div className="scroller">
      {Data.map((item: any, index: number) => {
        return <Block item={item} key={item.id} />;
      })}
    </div>
  );
};
