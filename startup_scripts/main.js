// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

Platform.mods.kubejs.name = 'Creative Conundrums'
//setup for items
StartupEvents.registry('item', event => {
    event.create('shadow_steel_sheet').rarity('epic').displayName("Awakened Omnium Sheet").tag('c:plates')
    event.create('incomplete_shadow_steel_plate').rarity('epic').displayName("Incomplete Awakened Omnium Sheet")
    event.create('shadow_steel_blend_dust').rarity('epic').displayName("Awakened Omnium Alloy Dust").tag('c:dusts').tag('c:alloys').tag('c:alloys/shadow_steel')
    event.create('shadow_steel_dust').rarity('epic').displayName('Awakened Omnium Dust').tag('c:dusts').tag('c:dusts/shadow_steel')
})

StartupEvents.registry('fluid', event => {
    event.create('hot_shadow_steel')
    .stillTexture('kubejs:block/hot_shadow_steel_still')
    .flowingTexture('kubejs:block/hot_shadow_steel_flow')
})

StartupEvents.registry('block', event => {
    event.create('crushed_netherrack', 'falling').copyPropertiesFrom('gravel')
})

StartupEvents.modifyCreativeTab('create:base', event => {
    event.addAfter('create:brass_ingot', 'create:refined_radiance')
    event.addAfter('create:refined_radiance', 'create:shadow_steel')
    event.addAfter('create:shadow_steel', 'kubejs:shadow_steel_dust')
})