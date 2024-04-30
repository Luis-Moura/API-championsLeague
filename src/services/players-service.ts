import { PlayerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"
import { deletePlayerById, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"

export const getPlayerService = async () => {

    const data = await findAllPlayers()
    let response

    if (data){
        response = await ok(data)
    }
    else{
        response = await noContent()
    }

    return response
}

export const getPlayerByIdService = async (id:number) => {

    const data = await findPlayerById(id)
    let response

    if (data){
        response = await ok(data)
    }
    else{
        response = await noContent()
    }

    return response

}

export const createPlayerSevice = async (player:PlayerModel) => {
    let response = null

    if (Object.keys(player).length !== 0){
        await insertPlayer(player)
        response = await created()
    }
    else{
        response = await badRequest()
    }

    return response
}

export const deletePlayerService = async (id : number) => {
    let response = null

    const data = await deletePlayerById(id)

    if(data){
        response = await ok({message: `Player with id: ${id} has been deleted`})
    }
    else{
        response = await badRequest()
    }

    return response
}

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
    let response = null

    const data = await findAndModifyPlayer(id, statistics)

    if (data){
        response = await ok(data)
    }
    else{
        response = await badRequest()
    }
    return response 
}
