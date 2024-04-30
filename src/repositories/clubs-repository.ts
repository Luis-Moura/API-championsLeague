import { dataBase } from "./data";

export const findAllClubs = async () =>{

    return dataBase.map((player) => player.club)
    
}