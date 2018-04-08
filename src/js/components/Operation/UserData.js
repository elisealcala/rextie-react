import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectOrigin, selectDestino, changeCel, addNew, closeModal, newName, newNumber, acceptTerms, changePath } from '../../actions/actions';

@connect(
  state => ({
    input: state.value,
    currentNumber: state.currentNumber,
    exchange: state.showMe,
    cuentas: state.cuentas,
    modal: state.showModal,
    new_name: state.new_name,
    new_number: state.new_number,
    checkTab: state.checkTab,
    cuentaOrigen: state.cuentaOrigen,
    cuentaDestino:state.cuentaDestino,
    terms: state.terms,
    cellphone:state.cellphone
  }),
  dispatch => ({
    handleClick: (e) => {
      const nombre = e.target.value
      const número = e.target.value
      dispatch(selectOrigin(nombre,número))
    },
    handleClickDestino: (e) => {
      const nombre1 = e.target.value
      const número2 = e.target.value
      dispatch(selectDestino(nombre1, número2))
    },
    handleChangeCel: (e) => {
      dispatch(changeCel(e.target.value))
    },
    addNew: () => {
      const newName = document.getElementById('new-name')
      const newNumber = document.getElementById('new-number')
      dispatch(addNew(newName.value, newNumber.value))
      newName.value = ''
    },
    handleClickModal: () => {
      dispatch(closeModal())
    },
    handleChangeName: (e) => {
      dispatch(newName(e.target.value))
    },
    handleChangeNumber: (e) => {
      dispatch(newNumber(e.target.value))
    },
    acceptTerms : () => {
      dispatch(acceptTerms())
    },
    changePath: (path) => {
      dispatch(changePath(path))
    }
  })
)
export class UserData extends Component {

  componentDidMount = () => {
    this.props.changePath(this.props.location.pathname)
  }
  
  render() {
    return (
      <div className="content-operation row">
        <div className="table-envio my-4">
          <div className="row">
            <div className="col-md-3 col-12 border-t">
              <div className="row">
                <div className="col-md-12 col-6 bg-color-light-blue">
                  <p className="th-class">Tipo de Operación</p>
                </div>
                <div className="col-md-12 col-6 bg-color-white">
                  <p className="td-class">{this.props.exchange == true ? 'Compra' : 'Venta'}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 border-t">
              <div className="row">
                <div className="col-md-12 col-6 bg-color-light-blue">
                  <p className="th-class">Yo envío</p>
                </div>
                <div className="col-md-12 col-6 bg-color-white">
                  <p className="td-class">{this.props.currentNumber}.00 {this.props.exchange == true ? 'Soles' : 'Dólares'}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 border-t">
              <div className="row">
                <div className="col-md-12 col-6 bg-color-light-blue">
                  <p className="th-class">Yo recibo</p>
                </div>
                <div className="col-md-12 col-6 bg-color-white">
                  <p className="td-class">{this.props.input} {this.props.exchange == true ? 'Dólares' : 'Soles'}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="row">
                <div className="col-md-12 col-6 bg-color-light-blue">
                  <p className="th-class">Tipo de Cambio</p>
                </div>
                <div className="col-md-12 col-6 bg-color-white">
                  <p className="td-class">3.246</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="change-main w-100 text-center py-4">
          <h4 className="mb-4">Selecciona tus cuentas de origen y destino</h4>
          <div className="container">
            <div className="row align-items-center">
              <div className="exchange col-md-6 col-12">
                <div className="box-exchange">
                  <FormGroup className="text-left">
                    <Label className="mb-0" for="exampleSelect">Envío desde:</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={this.props.handleClick} >
                      <option value="" disabled selected>Selecciona una cuenta</option>
                      {this.props.cuentas.map((item, i) => <option data-nombre={item.nombre} data-number={item.número} key={i} onClick={this.props.handleClick} >{item.nombre}</option>)}
                    </Input>
                    <i className="material-icons">expand_more</i>
                  </FormGroup>
                </div>
              </div>
              <div className="exchange col-md-6 col-12">
                <div className="box-exchange">
                  <FormGroup className="text-left">
                    <Label className="mb-0" for="exampleSelect"> Recibo en:</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={this.props.handleClickDestino}>
                      <option value="" disabled selected>Selecciona una cuenta</option>
                      {this.props.cuentas.map((item, i) => <option data-nombre={item.nombre} data-number={item.número} key={i} onClick={this.props.handleClickDestino} >{item.nombre}</option>)}
                    </Input>
                    <i className="material-icons">expand_more</i>
                  </FormGroup>
                </div>
              </div>
              <p className="w-100 d-flex justify-content-center"><span>Agregar otra cuenta bancaria</span> <span className="circle-green" onClick={this.props.handleClickModal}><i className="material-icons"> add </i> </span></p>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 pl-4 text-left col-12">
                <FormGroup>
                  <Label className="mb-0" for="exampleEmail">Celular</Label>
                  {this.props.cellphone != '' ? <Input type="text" name="email" id="exampleEmail" onChange={this.props.handleChangeCel} valid /> : <Input type="text" name="email" id="exampleEmail" onChange={this.props.handleChangeCel} invalid /> } 
                </FormGroup>
              </div>
              <div className="col-md-7 col-12">
                <FormGroup check>
                  <Label check>
                    {this.props.terms != false ? <Input type="checkbox" onClick={this.props.acceptTerms} valid /> : <Input type="checkbox" onClick={this.props.acceptTerms} invalid/>}
                    Acepto los Términos y Condiciones
                  </Label>
                </FormGroup>
              </div>
            </div>
          </div>
          <p>Tipo de cambio vence en: <span>01:40</span></p>
          <Link className="btn-white-rounded mr-3" to="/operation/start">Regresar</Link>
          <Button className="btn-green-rounded ml-3" href="/#/es/operation/transfer" disabled={!this.props.cuentaDestino.nombre || !this.props.cuentaOrigen.nombre || !this.props.cellphone || !this.props.terms}>Continuar</Button>
        </div>
        <Modal isOpen={this.props.modal} toggle={this.props.handleClickModal} className={this.props.className}>
          <ModalHeader toggle={this.props.handleClickModal}>Agregar cuenta bancaria</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label className="mb-0" for="name">Nombre de la Cuenta</Label>
              <Input type="text" name="name" id="new-name" onChange={this.props.handleChangeName}/>
            </FormGroup>
            <FormGroup>
              <Label className="mb-0" for="number">Número de la Cuenta</Label>
              <Input type="text" name="number" id="new-number" onChange={this.props.handleChangeNumber}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button className="btn-green-rounded ml-3" onClick={this.props.addNew} disabled={!this.props.new_name || !this.props.new_number}> Agregar</Button>{' '}
            <Button className="btn-white-rounded mr-3" onClick={this.props.handleClickModal}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default UserData
