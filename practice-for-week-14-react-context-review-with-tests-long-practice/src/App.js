import coffeeBeans from "./mockData/coffeeBeans.json";
import SetCoffeeBean from "./components/SetCoffeeBean";
import { CoffeeContext, useCoffeeContext } from "./context/CoffeeContext";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";

function App() {
  // const {coffeeBean, setCoffeeBean} = useCoffeeContext();

  return (
    <>
    <div>
      <h1>Welcome to Coffee App</h1>

      <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      <SelectedCoffeeBean></SelectedCoffeeBean>
    </div>
    </>
  );
}

export default App;