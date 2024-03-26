import { twMerge } from "tailwind-merge";
import GlossyCard from "../Card/GlossyCard";
interface Props {
  className?: string;
}

function Header({ className }: Props) {
  return (
    <header className="glossy-card absolute left-0 m-auto block h-[70%] w-16 rounded-full">
      <div
        className={twMerge(
          "flex h-full flex-col justify-between p-3",
          className,
        )}
      >
        <div>
          <span className="icon material-symbols-outlined">menu</span>
        </div>
        <ul>
          <li>
            <span className="icon material-symbols-outlined">
              account_circle
            </span>
          </li>
          <li>
            <span className="icon material-symbols-outlined">article</span>
          </li>
        </ul>
        <div>
          <span className="icon material-symbols-outlined">light_mode</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
