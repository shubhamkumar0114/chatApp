import React from 'react'

const ToastMsg = (props) => {
  return (
    <div>
      <div className="toast toast-top toast-center">
        <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div>
        <div className="alert alert-success">
          <span>{props?.sucess}</span>
        </div>
      </div>
    </div>
  );
}

export default ToastMsg
