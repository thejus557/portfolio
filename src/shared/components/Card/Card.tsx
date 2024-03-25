import { twMerge } from "tailwind-merge";
import "./Card.scss";
interface Props {
  className: string;
  children: JSX.Element;
}

function Card({ className, children }: Props) {
  return <div className={twMerge("glass-card", className)}>{children}</div>;
}

export default Card;
