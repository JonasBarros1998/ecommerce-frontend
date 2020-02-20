export const formattingObjects = email => {

  return Object.assign({}, email, {
    "email": email
  })
}

/**
 * Função para formatar o objeto especifico para usuarios
 * que esqueceram a senha
 * 
 * @param data Um objeto javaScript completo.  
 * @param username O nome do usuario, para adicionarmos
 * dentro do objeto data.
 * @param value O valor do objeto que deverá ser adicionado.
 */
export const formattingObjectForgotPwd = (data, nameObject, value) => {
  Object.defineProperty(data, nameObject, {
    enumerable: false,
    value: value,
    writable: true
  })
  //Retirar a propriedade repeat de dentro do objeto
  delete data.repeat
}