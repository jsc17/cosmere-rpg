export enum AttributeGroup {
    Physical = 'phy',
    Cognitive = 'cog',
    Spiritual = 'spi'
}

export enum Attribute {
    Strength = 'str',
    Speed = 'spd',
    Intellect = 'int',
    Willpower = 'wil',
    Awareness = 'awa',
    Presence = 'pre'
}

export enum Resource {
    Health = 'hea',
    Focus = 'foc',
    Investiture = 'inv'
}

export enum Skill {
    Agility = 'agi',
    Athletics = 'ath',
    HeavyWeapons = 'hwp',
    LightWeapons = 'lwp',
    Stealth = 'stl',
    Thievery = 'thv',

    Crafting = 'cra',
    Deduction = 'ded',
    Discipline = 'dis',
    Intimidation = 'inm',
    Lore = 'lor',
    Medicine = 'med',

    Deception = 'dec',
    Insight = 'ins',
    Leadership = 'lea',
    Perception = 'prc',
    Persuasion = 'prs',
    Survival = 'sur',

    // Surge skills
    Adhesion = 'adh',
    Gravitation = 'gra',
    Illumination = 'ill',
    Transformation = 'tra'
}

export enum DerivedStatistic {
    MovementRate = 'mvr',
    LiftingCapactiy = 'lif',
    RecoveryDie = 'rcd',
}

/**
 * The categories of weapon available
 */
export enum WeaponType {
    Light = 'light_wpn',
    Heavy = 'heavy_wpn',
    Special = 'special_wpn'
}

/**
 * The ids of all default system weapons.  
 * This is not an exhaustive list of all possible weapons,
 * but is used to populate the `CONFIG.COSMERE.weaponIds` property.
 */
export enum WeaponId {
    // Light weapons
    Javelin = 'javelin',
    Knife = 'knife',
    Mace = 'mace',
    Rapier = 'rapier',
    Shortspear = 'shortspear',
    Sidesword = 'sidesword',
    Staff = 'staff',
    Shortbow = 'shortbow',
    Sling = 'sling',

    // Heavy weapons
    Axe = 'axe',
    Greatsword = 'greatsword',
    Hammer = 'hammer',
    Longspear = 'longspear',
    Longsword = 'longsword',
    Poleaxe = 'poleaxe',
    Shield = 'shield',
    Crossbow = 'crossbow',
    Longbow = 'longbow',

    // Special
    Improvised = 'improvised',
    Unarmed = 'unarmed',
    Shardblade = 'shardblade'
}

/**
 * The ids of all default system armors.
 * This is not an exhaustive list of all possible weapons,
 * but is used to populate the `CONFIG.COSMERE.armorIds` property.
 */
export enum ArmorId {
    Uniform = 'uniform',
    Leather = 'leather',
    Chain = 'chain',
    Breastplate = 'breastplate',
    HalfPlate = 'half_plate',
    FullPlate = 'plate',
    Shardplate = 'shardplate'
}

export enum ExpertiseType {
    Armor = 'armor',
    Cultural = 'cultural',
    Specialist = 'specialist',
    Utility = 'utility',
    Weapon = 'weapon'
}

export enum ActionCostType {
    Action = 'act',
    Reaction = 'rea',
    FreeAction = 'fre'
}

export enum DamageType {
    Energy = 'energy',
    Impact = 'impact',
    Keen = 'keen',
    Spirit = 'spirit',
    Vital = 'vital',
}

/* --- System --- */

export enum ActorType {
    Character = 'character',
    Adversary = 'adversary'
}

export enum ItemType {
    Weapon = 'weapon',
    Armor = 'armor',
    Equipment = 'equipment',
    Fabrial = 'fabrial',

    Ancestry = 'ancestry',
    Path = 'path',
    Talent = 'talent',

    Action = 'action'
}