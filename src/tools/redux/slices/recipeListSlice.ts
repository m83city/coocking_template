import { createSlice } from "@reduxjs/toolkit";
import { ImagesType } from "../../hook/useImages";

export interface IListRecipeCard {
    recipeId?: string;
    title?: string;
    favorite?: boolean;
    typeFood?: string;
    imageFood: ImagesType;
}
const initialState:IListRecipeCard[] = []
export const recipeListSlice = createSlice({
    name:"recipeListSlice",
    initialState,
    reducers:{
        updateFavorite: (state, payload:{type:string, payload: string}) =>{
            return state.map((recipeObject:IListRecipeCard) => {
                return recipeObject.recipeId ===payload.payload ?
                {...recipeObject, favorite:recipeObject.favorite!}: 
                {...recipeObject}
            })
        },
        setRecipeList: (state, payload:{type:string, payload:IListRecipeCard[]}) =>{
            console.log(payload.payload)
            return payload.payload
        },
    }
});
export const {updateFavorite, setRecipeList} = recipeListSlice.actions;