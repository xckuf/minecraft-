import {DefaultEntity} from "./default.entity.js";

export class Tool extends DefaultEntity {
    craft!: Craft[];
    health!: number;
    enchantment!: Enchantment[];
}

class Craft {
    id!: string;
    input_1?: string;
    input_2?: string;
    input_3?: string;
    input_4?: string;
    input_5?: string;
    input_6?: string;
    input_7?: string;
    input_8?: string;
    input_9?: string;
}

class Enchantment extends DefaultEntity {
    improvement!: Improvement[];
}

class Improvement {
    id!: string;
    name!: string;
}