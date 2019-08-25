import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Div, Span, StyledModal,StyledModal1 } from "./Style";

const quetions = [
  {
    id: 1,
    quetion: "Have you ever been convicted of a felony offense?"
  },
  {
    id: 2,
    quetion: "Have you ever been convicted of a felony offense?"
  },
  {
    id: 3,
    quetion: "Have you ever been convicted of a felony offense?"
  }
];

class MyactivModals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>     
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        
     
        <StyledModal1
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-block"
        >
          <StyledModal >
          <ModalHeader toggle={this.toggle}>
            Standing with Licensing and Professional Organization
          </ModalHeader>
          <ModalBody>
            <Div>
              <Span>Note:</Span> All survey quetions are mandatory
            </Div>

            {quetions.map(quetion => {
              return (
                <div>
                  <div id={quetion.id}>{quetion.quetion}</div>
                  <div>
                    <input type="radio" value="yes" name="answer" />
                    Yes
                    <input type="radio" value="no" nmae="answer" />
                    No
                  </div>
                  <div>
                    If yes, please explain
                    <textarea rows="2" cols="50" />
                  </div>
                </div>
              );
            })}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.toggle}>
              Save
            </Button>
          </ModalFooter>
          </StyledModal>
        </StyledModal1>
   
      </div>
    );
  }
}

export default MyactivModals;
