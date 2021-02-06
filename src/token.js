import jwtDecode from "jwt-decode";
import  SecureLS  from 'secure-ls';

let ls = new SecureLS({encodingType: 'aes'});
let encodedToken = ls.get("currentUser");
let decodedToken = jwtDecode(encodedToken);


export default decodedToken;