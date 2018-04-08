const initState = {
  currentNumber: '',
  showMe:true,
  showModal: false,
  cuentas: [
    {
      nombre: 'Interbank Soles',
      número: '0123456789'
    },
    {
      nombre: 'Scotiabank',
      número: '0123456789'
    },
    {
      nombre: 'Bcp Soles',
      número: '0123456789'
    } 
  ],
  value: 0,
  new_name: '',
  new_number: '',
  terms : false,
  checkTab: '',
  cuentaOrigen:'',
  cuentaDestino: '',
  cellphone:''
}

const calculatorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DOLAR_CHANGE':
      return {
        ...state,
        currentNumber: action.number.replace(/\D/, ''),
        value: state.showMe == true ? (action.number.replace(/\D/, '') / 3.2).toFixed(2) : (action.number.replace(/\D/, '') * 3.2).toFixed(2)
      }
    case 'EXCHANGE':
      return {
        ...state,
        showMe: state.showMe == true ? false : true,
        value: state.showMe == true ? (state.currentNumber * 3.2).toFixed(2) : (state.currentNumber / 3.2).toFixed(2)
      }
    case 'SELECT_ACCOUNTS_ORIGEN':
      return {
        ...state,
        cuentaOrigen: {nombre: action.nameOrigin, número: action.numberOrigin}
      }
    case 'SELECT_ACCOUNTS_DESTINO':
      return {
        ...state,
        cuentaDestino: { nombre: action.nameDestino, número: action.numberDestino }
      }
    case 'CELLPHONE_NUMBER':
      return {
        ...state,
        cellphone: action.number_cel
      }
    case 'NEW_ACCOUNT':
      return {
        ...state,
        cuentas: [...state.cuentas,{ nombre: action.new_name, número: action.new_number }],
        showModal: !state.showModal
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: !state.showModal,
        new_name: '',
        new_number: ''
      }
    case 'NEW_NAME':
      return {
        ...state,
        new_name: action.new_name
      }
    case 'NEW_NUMBER':
      return {
        ...state,
        new_number: action.new_number
      }
    case 'TERMS':
      return {
        ...state,
        terms: !state.terms
      }
    case 'PATH':
      return {
        ...state,
        checkTab: action.path
      }
  }
  return state
}

export default calculatorReducer