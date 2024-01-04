import { atom } from "recoil";



export const userAtom = atom<{
    isLoading : boolean,
    user ?:{
        email : string
    }
}>({
    default:{
        isLoading : true,
    },
    key:'userAtom'
    
})