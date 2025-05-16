import "../styles/Context.css";

import points_logo from "../recources/ellipsis.png";

type Props = {
  contextName: string;
};

function Context({ contextName }: Props) {
  return (
    <div className="context-container">
      <h3>{contextName}</h3>
      <button className="context-dropdown-button">
        <img
          src={points_logo}
          alt="three dots drop-down menu"
          className="points-logo"
        />
      </button>
    </div>
  );
}

export default Context;
