export interface RecipesApiResponse {
    id: string
    title: string
    img: string
    category: string
    time: number
    ingredientes?: Ingrediente[]
    description: string
    steps?: Step[]
    mine?: boolean
  }
  
  export interface Ingrediente {
    nombre: string
    cantidad: string
  }
  
  export interface Step {
    number: number
    step: string
  }
export interface CategoriesApiResponse{
    category: string
    img: string
    id: string
}