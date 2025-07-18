import React from 'react';

const MealsContext = React.createContext();
const todaysMeal = ["BakedBeans", "Baked Sweet Potatoes","Baked Potatoes"]
const MealsProvider = ({children})=> {
    const[meals, setMealsList] = React.useState(todaysMeal);

    return(
        <MealsContext.Provider value = {{meals}}>
            {children}
        </MealsContext.Provider>

    );
}

export const useMealsListContext = ()=>React.useContext(MealsContext);
export default MealsProvider;