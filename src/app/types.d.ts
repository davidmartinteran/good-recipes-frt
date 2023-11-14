export type User = {
    id: number
    name: string
    email: string
    recipes: Recipe[]
}

export type Recipe = {
    id: number
    date: string
    userId: number
    ingredients: string[]
    name: string
    execTime: number
    caloriesPerHundredGrams: number
    description: string
    kindOfDish: KindOfDish[]
    eatingTime: EatingTime[]
    appliance: Appliance[]
    imgages?: string
}

