import { useDispatch } from "react-redux";
import { setRecipeList, IListRecipeCard } from "../redux/slices/recipeListSlice";

export const recipeListURL = "https://run.mocky.io/v3/ecc11371-cf79-4f9d-8a31-d26f0feae1fa"


export const useAPI = () =>{
    const dispatch = useDispatch()

    const getRecipeList = async () => {
        fetch(recipeListURL, {
            method: "GET",
          })
        .then((response) => 
            response.json())
        .then((response:IListRecipeCard[]) => dispatch(setRecipeList(response)))
        .catch(error => console.error(error));
        }
        return{getRecipeList}
}