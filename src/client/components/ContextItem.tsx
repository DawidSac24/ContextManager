import "../styles/ContextItem.css";

import { ContextDTO } from "../../local-server/models/context.model";

import Context from "./Context";
import ContextEdition from "./ContextEdition";

type Props = {
  context: ContextDTO;
  isSelected: boolean;
  isEditing: boolean;
  editedName: string;
  onSelect: () => void;
  onChange: (name: string) => void;
  onSave: () => void;
  onSavePages: () => void;
};

export default function ContextItem({
  context,
  isSelected,
  isEditing,
  onSelect,
  onChange,
  onSave,
}: Props) {
  let buttonClassName: string = "";
  if (isSelected) {
    if (!isEditing) buttonClassName += " selected-context";
  }

  buttonClassName += " context";

  return (
    <li>
      <button onClick={onSelect} className={buttonClassName}>
        {isEditing ? (
          <ContextEdition
            editedName={context.name}
            onChange={onChange}
            onSave={onSave}
          />
        ) : (
          <Context contextName={context.name} />
        )}
      </button>
    </li>
  );
}
