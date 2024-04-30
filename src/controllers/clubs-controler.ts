import { Request, Response } from "express"
import { getClubService } from "../services/clubs-services"

export const getClubs = async (req: Request, res: Response) => {
    const httpResponse = await getClubService()

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}