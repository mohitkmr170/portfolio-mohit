import React, { JSX } from "react";
import { X } from "lucide-react";
import "./styles.css";

interface IProps {
  visible: boolean;
  onClose: () => void;
  renderContent: () => JSX.Element;
}

const OverlayModal: React.FC<IProps> = ({
  visible = false,
  onClose,
  renderContent,
}) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleChildClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  if (!visible) return null;
  return (
    <div className="overlay" onClick={handleChildClose}>
      <div className="overlay-content" onClick={handleClose}>
        <div className="top-section">
          <X onClick={handleChildClose} cursor={"pointer"} />
        </div>
        {renderContent()}
      </div>
    </div>
  );
};
export default OverlayModal;
