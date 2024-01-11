import Game from "../entities/Game";
import ApiClient from "./ApiClient";

export const gameService =  new ApiClient<Game>("/games")
