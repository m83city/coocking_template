import { createSlice } from "@reduxjs/toolkit";
import { ImagesType } from "../../hook/useImages";

export interface IListRecipeCard {
    recipeId?: string;
    title?: string;
    favorite?: boolean;
    typeFood?: string;
    imageFood: ImagesType;
}
export interface recipeMock {
    recipeId?: string;
    recipeName?: string;
    favorite?: boolean;
    typeFood?: string;
    imageFood: ImagesType;
    details:{
        createDate:Date,
        authonName:string,
        prepTime:number,
        cookTime:number,
        mainDish:string,
        nutrition:{
            calories:number,
            totalFat:number,
            protein:number,
            carbohydrate:number
            cholesterol:number
        }
        ingredients:{
            mainDish:string[],
            sauce:string[]
        }
        directions:{
            title:string,
            description:string 
        }[]
    }
}
const initialState:IListRecipeCard[] = []
export const recipeListSlice = createSlice({
    name:"recipeListSlice",
    initialState,
    reducers:{
        updateFavorite: (state, payload:{type:string, payload: string}) =>{
            const recipeList = state.map((recipe) =>{
                if (recipe.recipeId === payload.payload){
                    return{...recipe, favorite:!recipe.favorite }
                }else{
                    return {...recipe}
                }
            })
            return recipeList
        },
        setRecipeList: (state, payload:{type:string, payload:IListRecipeCard[]}) =>{
            return payload.payload
        },
    }
});
export const {updateFavorite, setRecipeList} = recipeListSlice.actions;