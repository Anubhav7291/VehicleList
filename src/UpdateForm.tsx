import * as React from 'react';
import * as Modal from 'react-modal';
const UpdateForm = (props) => {
    console.log(props)
    return (
        <Modal isOpen={true}>
            <i onClick={()=>props.handle(false)} style={{float:"right",fontSize:"40px",color:"red" }} className="fas fa-window-close"></i>
            <h3>{props.val.id}</h3>
        </Modal>
    );
};

export default UpdateForm;
