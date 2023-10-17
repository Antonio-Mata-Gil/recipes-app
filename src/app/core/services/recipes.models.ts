export interface RecipesApiResponse {
    id: number
    title: string
    img: string
    category: string
    time: number
    ingredientes: Ingrediente[]
    description: string
    steps: Step[]
    mine: boolean
  }
  
  export interface Ingrediente {
    nombre: string
    cantidad: string
  }
  
  export interface Step {
    "1"?: string
    "2"?: string
    "3"?: string
}
export interface CategoriesApiResponse{
    category: string
    img: string
    id: string
}