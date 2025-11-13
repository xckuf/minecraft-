import { DefaultEntity } from "./default.entity.js";
export class Tool extends DefaultEntity {
    craft;
    health;
    enchantment;
}
class Craft {
    id;
    input_1;
    input_2;
    input_3;
    input_4;
    input_5;
    input_6;
    input_7;
    input_8;
    input_9;
}
class Enchantment extends DefaultEntity {
    improvement;
}
class Improvement {
    id;
    name;
}
//# sourceMappingURL=tool.entity.js.map