import "../styles/ContextsList.css";

import { useContexts } from "../hooks/useContexts";

import ContextItem from "./ContextItem";
import ContextButtons from "./ContextButtons";

export default function ContextsList() {
  const {
    contexts,
    selectedContext,
    isEditing,
    editedName,
    selectContext,
    addContext,
    updateContext,
    deleteContext,
    savePages,
    setEditedName,
    setIsEditing,
  } = useContexts();

  const handleSave = () => {
    updateContext(editedName);
  };

  return (
    <div>
      <ul>
        {contexts.map((context) => (
          <ContextItem
            key={context.id}
            context={context}
            isSelected={selectedContext?.id === context.id}
            isEditing={isEditing}
            editedName={editedName}
            onSelect={() => selectContext(context)}
            onChange={setEditedName}
            onSave={handleSave}
            onSavePages={() => savePages(context)}
          />
        ))}
      </ul>

      <div className="add-context-button-container">
        <button className="add-context-button context" onClick={onAdd}>
          <h3>Add Context</h3>
        </button>
      </div>
      
    </div>
  );
}
