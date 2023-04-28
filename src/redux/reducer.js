// import { ADD_FAVORITES } from  './actions'
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions'
/**estado incial , siempre va con nada */

const initialState = {
    myFavorites: [],
    myFavoritesOrigin: [], //solo lo cambian Add y remove
    allCharacters: []
};


const rootReducer = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_FAV: 
            let  copyAllCharacter = [state.allCharacters, action.payload];

            return {
                ...state,
                myFavorites: copyAllCharacter,
                allCharacters: [...copyAllCharacter]      
            }
        
        case FILTER: 
            let copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
            
            // const newFilter = state.myFavoritesOrigin.filter((ch) => ch.gender === action.payload);
            return {
                ...state,
                 myFavorites: copyFilter
            } 

        case ORDER: 
                const orderCharacter  = state.allCharacters.sort((a,b) => {
                        if (action.payload === 'A') {
                            if(a.id < b.id) return -1;
                            if(b.id < a.id) return 1;
                            return 0
                        }
                        else {
                            if(a.id < b.id) return 1;
                            if(b.id < a.id) return -1;
                            return 0
                        }
                });
                console.log("casoo order", orderCharacter);
        
                    return {
                        ...state,
                        myFavorites: [...orderCharacter]
                        }        

        default:
            return {
                 ...state                    
                }         
                if (action.payload === 'A')   {    
                } else {
                    if (action.payload === 'D')   {  }

                }             
 }

}

export default rootReducer;