/**
 * Modulo responsavel por conter uma lista 
 * de senhas invalidas, ele apenas contem 
 * uma função que retorna uma listagem de 
 * senhas que não permitimos serem salvas no banco de dados
 */
const list = {
    "passwordsInvalid": [
        "123456", "password", "123456789", 
        "12345678", "12345", "111111",
        "1234567", "sunshine", "qwerty", "iloveyou", 
        "princess", "admin", "welcome", "666666", 
        "abc123", "football", "123123", "monkey",
        "654321", "!@#$%^&*", "charlie", "aa123456",
        "donald", "password1", "qwerty123"
    ]
}

export const listInvalidPassword = () => list

