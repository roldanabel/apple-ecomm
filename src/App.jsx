import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido al E-commerce"/>
    </div>
  )
}

export default App