import { twMerge } from "tailwind-merge";
import "./GlossyCard.scss";

interface Props {
  className: string;
  children: JSX.Element;
}

function GlossyCard({ className, children }: Props) {
  return <div className={twMerge("glass-card", className)}>{children}</div>;
}

export default GlossyCard;
