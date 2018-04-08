export function convertDolar(number) {
  return {
    type: 'DOLAR_CHANGE',
    number
  }
}
export function exchange() {
  return {
    type: 'EXCHANGE'
  }
}
export function selectOrigin(nameOrigin, numberOrigin) {
  return {
    type: 'SELECT_ACCOUNTS_ORIGEN',
    nameOrigin,
    numberOrigin
  }
}
export function selectDestino(nameDestino, numberDestino) {
  return {
    type: 'SELECT_ACCOUNTS_DESTINO',
    nameDestino,
    numberDestino
  }
}
export function changeCel(number_cel) {
  return {
    type: 'CELLPHONE_NUMBER',
    number_cel
  }
}
export function addNew(new_name,new_number) {
  return {
    type: 'NEW_ACCOUNT',
    new_name,
    new_number
  }
}
export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}
export function newName(new_name) {
  return {
    type: 'NEW_NAME',
    new_name
  }
}
export function newNumber(new_number) {
  return {
    type: 'NEW_NUMBER',
    new_number
  }
}
export function acceptTerms() {
  return {
    type: 'TERMS'
  }
}
export function changePath(path) {
  return {
    type: 'PATH',
    path
  }
}