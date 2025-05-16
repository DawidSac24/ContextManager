import "../styles/ContextItem.css";

import { ContextDTO } from "../../local-server/models/context.model";

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
  editedName,
  onSelect,
  onChange,
  onSave,
  onSavePages,
}: Props) {
  let buttonClassName: string = "";
  if (isSelected) {
    if (!isEditing) buttonClassName += " selected-context";
  }

  buttonClassName += " context";

  return (
    <li>
      <button onClick={onSelect} className={buttonClassName}>
        { isEditing ? (
          <div className="context-edition-container">
            <input
              type="text"
              value={editedName}
              onChange={(e) => onChange(e.target.value)}
              className="context-input"
            />
            <button
              className="save-context"
              onClick={onSave}
            >
              SAVE
            </button>
          </div>
        ) : (
          <h3>{context.name}</h3>
        )}
      </button>
    </li>
  );
}
