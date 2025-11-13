import type {Block} from "./block.entity.js";
import {Environment} from "./enviroment.entity.js";
import {DefaultEntity} from "./default.entity.js";

export class Flora extends DefaultEntity{
    blocks!: Block[]; //из какиз блоков состоит
    health!: number;
    environment!: Environment[];
}