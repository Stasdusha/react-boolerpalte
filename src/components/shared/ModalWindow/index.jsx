import React, { Component, createElement } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import R from 'ramda'
import types from 'utils/actionTypes'

import './index.scss'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

class ModalWindow extends Component {
  closeModal = () => {
    const { dispatch } = this.props

    dispatch({ type: types.HIDE_MODAL })
  }

  render() {
    const { modal } = this.props
    const {
      heading, data, component
    } = modal


    return (
      <Modal
        isOpen={!R.isEmpty(modal)}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        <div styleName="modal">
          { heading && (
            <div>
              <h4 styleName="modal__heading">{heading}</h4>
              <span
                onClick={() => this.closeModal(modal)}
              >
                X
              </span>
            </div>
          )}
          <div styleName="modal__content">
            {component && createElement(component, { ...data })}
          </div>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal
})

Modal.setAppElement('#root')

export default connect(mapStateToProps)(ModalWindow)
