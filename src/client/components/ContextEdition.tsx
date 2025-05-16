type Props = {
  editedName: string;
  onChange: (name: string) => void;
  onSave: () => void;
};

function ContextEdition({ editedName, onChange, onSave }: Props) {
  return (
    <div className="context-edition-container">
      <input
        type="text"
        value={editedName}
        onChange={(e) => onChange(e.target.value)}
        className="context-input"
      />
      <button className="save-context" onClick={onSave}>
        SAVE
      </button>
    </div>
  );
}

export default ContextEdition;
