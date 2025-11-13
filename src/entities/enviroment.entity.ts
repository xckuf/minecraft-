import {DefaultEntity} from "./default.entity.js";

export class Environment extends DefaultEntity {
    mobs!: string[]; //какие существа обитают
    blocks!: string[]; //какие блоки использует для рендеринга
}