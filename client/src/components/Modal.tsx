import React from "react";

interface ModalProps {
  isLoading?: boolean;
  open?: boolean;
  onModalClose: () => void;
  onSaveBtnClick: (e: React.MouseEvent) => void;
}

const Modal: React.FC<ModalProps> = ({
  open = false,
  isLoading,
  onModalClose,
  onSaveBtnClick,
}) => {
  console.log(open);
  return (
    <dialog id="my_modal_1" className="modal" open={open}>
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <button
            className={`btn ${isLoading ? "btn-disabled" : ""}`}
            onClick={(e) => onSaveBtnClick(e)}
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Save"
            )}
          </button>
          {/* if there is a button in form, it will close the modal */}
          <button
            className={`btn ${isLoading ? "btn-disabled" : ""}`}
            onClick={onModalClose}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default Modal;
