import "../styles/ContextButtons.css";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
  onOpen: () => void;
};

function ContextButtons({ onEdit, onDelete, onOpen }: Props) {
  return (
    <div className="component-buttons">
      <div className="action-buttons">
        <button className="component-button " onClick={onEdit}>
          EDIT
        </button>
        <button className="component-button" onClick={onOpen}>
          OPEN
        </button>
        <button className="component-button" onClick={onDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ContextButtons;
