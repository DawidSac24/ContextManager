import "../styles/ContextsList.css";

import { useContexts } from "../hooks/useContexts";

import ContextItem from "./ContextItem";

function ContextsList() {
  const {
    contexts,
    selectedContext,
    isEditing,
    editedName,
    selectContext,
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
    </div>
  );
}

export default ContextsList;
