import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function IngredientModal() {
  const { ingredients } = useSelector((store) => store.ingredientsReducer)
  let { id } = useParams()
  const ingredientById = ingredients.find(item => {
    return item._id === id
  })
  console.log('IngredientModal', ingredientById)

  return (<h1>{ingredientById.name}</h1>)
}