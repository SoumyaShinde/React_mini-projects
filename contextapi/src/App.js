import MealsProvider from "./providers/MealsProvider";
import Counter from "./components/Counter";
import MealsList from "./components/MealsList";

function App() {
  return (
    <div className="App">
      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>
    </div>
  );
}

export default App;
