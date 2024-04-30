import { Request, Response } from "express"
import { createPlayerSevice, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/players-service"
import { statisticsModel } from "../models/statistics-model"

export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const httpResponse = await getPlayerByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body

    const httpResponse = await createPlayerSevice(bodyValue)

    if (httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const httpResponse = await deletePlayerService(id)

    if (httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const bodyValue: statisticsModel = req.body

    const httpResponse = await updatePlayerService(id, bodyValue)

    if(httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}