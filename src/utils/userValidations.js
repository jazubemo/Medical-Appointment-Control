let validations = {
    regexs: {
        IDNumber: /[0-9]{13,}$/,
        ageNumber : /[0-9]{1,}$/,
        string : /[A-Za-zÁÉÍÓÚÑáéíóúñ +,.’'-]{2,}$/
    }
}
export default validations;