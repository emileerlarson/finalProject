import React from 'react';


const EventModal = (props) => (

<div id="exampleModalLive" className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style={{display: "block", paddingRight: "17px"}}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLiveLabel">{props.title}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <p>{props.info}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Meh</button>
        <button type="button" className="btn btn-primary">Add to calendar</button>
      </div>
    </div>
  </div>
</div>

)
export default EventModal;