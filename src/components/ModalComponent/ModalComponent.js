/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Vill du gå till Köping Basket? Du lämnar nu Oscars Sida
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Ja! Ta mig till Köping Basket!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Nej</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
