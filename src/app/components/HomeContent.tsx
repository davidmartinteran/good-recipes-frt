import { Recipe } from "../types"
import Carrousel from "./Carrousel"

async function getRecipes() {
    const res = await fetch(`${process.env.BASE_URL}/api/recipes`)
    return res.json()
}

async function HomeContent() {
  const recipes: Recipe[] = await getRecipes()
  

  return (
    <div className="col-span-3 flex flex-col">
        {/* Home content
        {recipes.map((recipe: Recipe) => (
            <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <h2>{recipe.description}</h2>
            </div>
        ))} */}
        <Carrousel />
        
    </div>
  )
}

export default HomeContent
