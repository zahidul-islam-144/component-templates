type props = {
  open: boolean;
  handeClose: (args: boolean) => void;
};

const Modal2 = ({ open, handeClose }: props) => {
  return (
    <div className={`modal_main ${open ? "" : "hidden"}`}>
      <div className="modal_container">
        {/* modal-header */}
        <div className="modal_header">
          <div className="header_contents">
            <span className="header_title">Header</span>
            <span className="header_description">
              Header Description starts here...
            </span>
          </div>
          <div className="close_btn" onClick={() => handeClose(false)}>
            <span>&#215;</span>
          </div>
        </div>

        {/* modal-body */}
        <div className="modal_body">
          {[...Array(15)].map(() => (
            <p className="mb-2">
              modal body starts here... modal body starts here... modal body
              starts here... modal body starts here...modal body starts
              here...modal body starts here...end
            </p>
          ))}
        </div>

        {/* modal-footer */}
        <div className="modal_footer">
          <div className="accept_btn">Accept</div>
          <div className="close_btn2" onClick={() => handeClose(false)}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
