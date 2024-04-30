import { findAllClubs } from "../repositories/clubs-repository"
import { ok } from "../utils/http-helper"

export const getClubService = async () => {
    let response = null

    const data = await findAllClubs()

    if(data){
        response = await ok(data)
        return response
    }
}