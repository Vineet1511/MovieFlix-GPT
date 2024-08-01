export const checkValidate = (email, password) =>{
    const isValidEmail = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isValidEmail) return "Enter a valid email address!"
    if(!isValidPassword) return "Password not valid!"

    return null;
}