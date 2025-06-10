// Visit the wiki for more info - https://kubejs.com/
//this is just for the endgame materials stuff
console.info('Hello, World! (Loaded server example script)')


ServerEvents.recipes(event => {
    function mechanicalCrafting(pattern, Ikey, result, countOut) {
        let recipe = {
            type: "create:mechanical_crafting",
            accept_mirrored: false,
            key: Ikey,
            pattern: pattern,
            result: {
                count: countOut,
                id: result
            },
            show_notification: false
        }
        return recipe
    }
    function Ccrushingtag(tag, proccessTime, results) {
        let recipe = {
            type: "create:crushing",
            ingredients: [
                {
                    tag: tag
                }
            ],
            processing_time: proccessTime,
            results: results
        }
        return recipe
    }
    function sequencedAssembly(inp, loops, result, sequence, transItem) {
        let recipe = {
            type: "create:sequenced_assembly",
            ingredient: {
                item: inp
            },
            loops: loops,
            results: result,
            sequence: sequence,
            transitional_item: transItem
        }
        return recipe
    }
    event.custom(mechanicalCrafting(["ABC","DEF","GHI"], {A: {item: "minecraft:iron_ingot"}, B: {item: "minecraft:copper_ingot"}, C: {item: "minecraft:diamond"},
                                                            D: {item: "minecraft:lapis_lazuli"}, E: {item: "mekanism:ingot_tin"}, F: {item: "create:brass_ingot"},
                                                            G: {item: "mekanism:ingot_uranium"}, H: {item: "mekanism:ingot_steel"}, I: {item: "mekanism:ingot_osmium"}}, "create:refined_radiance", 2))
    
    event.custom(sequencedAssembly('create:shadow_steel_dust', 5, [ { id: 'kubejs:shadow_steel_sheet' }], [
        {
            "type": "create:pressing",
            "ingredients": [
            {
              "item": "kubejs:incomplete_shadow_steel_plate"
            }
            ],
            "results": [
            {
                "id": "kubejs:incomplete_shadow_steel_plate"
            }
            ]
        }

    ], { id: "kubejs:incomplete_shadow_steel_plate" }))

    event.recipes.powah.energizing(['kubejs:shadow_steel_sheet', 'minecraft:blaze_powder', '#c:dusts/redstone'], 'kubejs:shadow_steel_dust', 500)
    
    
})

RecipeViewerEvents.addEntries('item', event => {
    event.add('create:refined_radiance');
    event.add('create:shadow_steel');
    event.add('kubejs:shadow_steel_sheet')
})

ServerEvents.recipes(event => {
    event.recipes.mekanism.combining('create:shadow_steel', 'create:refined_radiance', "minecraft:netherite_ingot")
})

ServerEvents.tags('item', event => {
    event.add('c:ingots', 'create:shadow_steel')
    event.add('c:alloys', 'create:shadow_steel')
    event.add('c:ingots/shadow_steel', 'create:shadow_steel')
    event.add('c:ingots', 'create:refined_radiance')
})


/*mechanicalCrafting(["ABC","DEF","GHI"], {A: {item: "minecraft:iron_ingot"}, B: {item: "minecraft:copper_ingot"}, C: {item: "minecraft:diamond"},
                                                            D: {item: "minecraft:lapis_lazuli"}, E: {item: "mekanism:ingot_tin"}, F: {item: "create:brass_ingot"},
                                                            G: {item: "mekanism:ingot_uranium"}, H: {item: "mekanism:ingot_steel"}, I: {item: "mekanism:ingot_osmium"}}, "create:refined_radiance", 2)*/

/*{
        type: "create:mechanical_crafting",
        acceptMirrored: false,
        key: {
            A: {item: "minecraft:iron_ingot"},
            B: {item: "minecraft:copper_ingot"}, 
            C: {item: "minecraft:diamond"},
            D: {item: "minecraft:lapis_lazuli"}, 
            E: {item: "mekanism:ingot_tin"}, 
            F: {item: "create:brass_ingot"},
            G: {item: "mekanism:ingot_uranium"}, 
            H: {item: "mekanism:ingot_steel"}, 
            I: {item: "mekanism:ingot_osmium"}
        },
        pattern: [
            "ABC",
            "DEF",
            "GHI"
        ],
        result: {
            count: 2,
            item: "create:refined_radiance"
        }
    }*/