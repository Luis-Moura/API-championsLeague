import { PlayerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"
import { dataBase } from "./data"

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find( player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player)
}

export const deletePlayerById = async (id: number) => {
    const index = dataBase.findIndex(player => player.id === id)

    if (dataBase[index]){
        if(index !== -1){
            dataBase.splice(index, 1)
            return true
        }
    }
    else{
        return null
    }
}

export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<PlayerModel> => {
    const index = dataBase.findIndex(player => player.id === id)

    if(index !== -1){
        dataBase[index].statistics = statistics
    }

    return dataBase[index]
}
