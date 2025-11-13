import {DefaultEntity} from "./default.entity.js";
import {Environment} from "./enviroment.entity.js";

export class Block extends DefaultEntity {
    image!: string;
    health!: number;
    environment!: Environment[];
}