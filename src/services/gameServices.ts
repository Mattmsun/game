import ApiClient from "./ApiClient";
import { Game } from "../entities/Game";

export const gameService =  new ApiClient<Game>("/games")
