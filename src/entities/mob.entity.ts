import {Environment} from "./enviroment.entity.js";
import {DefaultEntity} from "./default.entity.js";

export class Mob extends DefaultEntity {
    health!: number;
    damage!: number;
    speed!: number; //скорость передвижения
    jump!: number; //высота прыжка
    inventory_capacity!: number; //вместительность инвентаря
    environment!: Environment[];
}