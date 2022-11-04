/**
 * It takes a string and returns a hash of that string
 * @param data - The data to be hashed.
 * @returns A hash of the data
 */
import { const_beings } from "./contants"
import bcrypt from "bcryptjs";
const generateHash = (data) =>{
    return bcrypt.hashSync(data, const_beings)
}

export default generateHash;