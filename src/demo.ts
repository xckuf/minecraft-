import { Environment } from "./entities/enviroment.entity.js";
import { Block } from "./entities/block.entity.js";
import { Mob } from "./entities/mob.entity.js";
import { Tool } from "./entities/tool.entity.js";
import { Flora } from "./entities/flora.entity.js";

type BaseProps = { id: string; name: string; description: string };

function setBase<T extends BaseProps>(entity: T, base: BaseProps): void {
    entity.id = base.id;
    entity.name = base.name;
    entity.description = base.description;
}

function makeEnvironment(props: BaseProps & { mobs?: string[]; blocks?: string[] }): Environment {
    const env = new Environment();
    setBase(env as unknown as BaseProps, props);
    env.mobs = props.mobs ?? [];
    env.blocks = props.blocks ?? [];
    return env;
}

function makeBlock(base: BaseProps, extra: { image: string; health: number; environment: Environment[] }): Block {
    const b = new Block();
    setBase(b as unknown as BaseProps, base);
    b.image = extra.image;
    b.health = extra.health;
    b.environment = extra.environment;
    return b;
}

function makeFlora(base: BaseProps, extra: { blocks: Block[]; health: number; environment: Environment[] }): Flora {
    const f = new Flora();
    setBase(f as unknown as BaseProps, base);
    f.blocks = extra.blocks;
    f.health = extra.health;
    f.environment = extra.environment;
    return f;
}

function makeMob(base: BaseProps, extra: {
    health: number; damage: number; speed: number; jump: number; inventory_capacity: number; environment: Environment[];
}): Mob {
    const m = new Mob();
    setBase(m as unknown as BaseProps, base);
    m.health = extra.health;
    m.damage = extra.damage;
    m.speed = extra.speed;
    m.jump = extra.jump;
    m.inventory_capacity = extra.inventory_capacity;
    m.environment = extra.environment;
    return m;
}

function makeTool(base: BaseProps, extra: { craft: any[]; health: number; enchantment: any[] }): Tool {
    const t = new Tool();
    setBase(t as unknown as BaseProps, base);
    t.craft = extra.craft;
    t.health = extra.health;
    t.enchantment = extra.enchantment;
    return t;
}

const overworld = makeEnvironment({
    id: "env_overworld",
    name: "Верхний мир",
    description: "Базовый мир для выживания и строительства",
    mobs: ["Зомби", "Корова", "Крипер"],
    blocks: ["Трава", "Земля", "Камень", "Дуб"]
});

const stone = makeBlock(
    { id: "block_stone", name: "Камень", description: "Прочный строительный блок" },
    { image: "stone.png", health: 30, environment: [overworld] }
);
const dirt = makeBlock(
    { id: "block_dirt", name: "Земля", description: "Распространённый блок поверхности" },
    { image: "dirt.png", health: 10, environment: [overworld] }
);
const oakLog = makeBlock(
    { id: "block_oak_log", name: "Дубовое бревно", description: "Ствол дуба" },
    { image: "oak_log.png", health: 15, environment: [overworld] }
);
const oakLeaves = makeBlock(
    { id: "block_oak_leaves", name: "Листва дуба", description: "Листья дуба" },
    { image: "oak_leaves.png", health: 5, environment: [overworld] }
);

const oak = makeFlora(
    { id: "flora_oak", name: "Дуб", description: "Классическое дерево верхнего мира" },
    { blocks: [oakLog, oakLeaves], health: 20, environment: [overworld] }
);

const zombie = makeMob(
    { id: "mob_zombie", name: "Зомби", description: "Ночное враждебное существо" },
    { health: 20, damage: 3, speed: 0.23, jump: 1, inventory_capacity: 0, environment: [overworld] }
);

const woodenPickaxe = makeTool(
    { id: "tool_wooden_pickaxe", name: "Деревянная кирка", description: "Простейшая кирка из дерева" },
    {
        craft: [
            { id: "craft_wooden_pickaxe", input_1: "Доски", input_2: "Доски", input_3: "Доски", input_5: "Палка", input_8: "Палка" }
        ],
        health: 60,
        enchantment: [
            {
                id: "ench_efficiency",
                name: "Эффективность",
                description: "Ускоряет добычу блоков",
                improvement: [{ id: "eff_i", name: "I" }, { id: "eff_ii", name: "II" }, { id: "eff_iii", name: "III" }]
            }
        ]
    }
);


overworld.blocks = [stone.name, dirt.name, "Дуб"];
overworld.mobs = [zombie.name];

function printDemo(): void {
    const data = {
        environments: [overworld],
        blocks: [stone, dirt, oakLog, oakLeaves],
        flora: [oak],
        mobs: [zombie],
        tools: [woodenPickaxe]
    };
    console.log(JSON.stringify(data, null, 2));
}

printDemo();
