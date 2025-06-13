function Ccrushingitem(item, proccessTime, result, rchance) {
    let recipe = {
        type: 'create:crushing',
        ingredients: [
            {
                item: item
            }
        ],
        processing_time: proccessTime,
        results: [
            {
                id: result,
                chance: rchance
            },
            {
                id: result,
                chance: rchance - 0.2
            },
            {
                id: 'create:experience_nugget',
                chance: 0.75
            }
        ]
    }
    return recipe
}

function Ccrushingtag(tag, proccessTime, result, rchance) {
    let recipe = {
        type: "create:crushing",
        ingredients: [
            {
                tag: tag
            }
        ],
        processing_time: proccessTime,
        results: [
            {
                id: result,
                chance: rchance
            },
            {
                id: result,
                chance: rchance - 0.2
            },
            {
                id: 'create:experience_nugget',
                chance: 0.75
            }
        ]
    }
    return recipe
}

function washingitem(item, aresult, aresultcount, bresult, bresultcount, bresultchance) {
    let recipe = {
        type: 'create:splashing',
        ingredients: [
            {
                item: item
            }
        ],
        results: [
            {
                id: aresult,
                count: aresultcount
            },
            {
                id: bresult,
                chance: bresultchance,
                count: bresultcount
            }
        ]
    }
}


ServerEvents.recipes(event => {
    event.custom(Ccrushingitem('minecraft:netherrack', 30, 'kubejs:crushed_netherrack', 1))
    event.remove({input: 'gravel', output: 'iron_nugget', type: 'create:splashing'})
    event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": "minecraft:gravel"
    }
  ],
  "results": [
    {
      "chance": 0.25,
      "id": "minecraft:flint"
    },
    {
      "chance": 0.125,
      "id": "minecraft:iron_nugget"
    },
    {
        chance: 0.125,
        id: 'create:copper_nugget'
    }
  ]
})
})