import "./App.css";
import { Listas } from "./componentes/Listas";
import Profile from "./componentes/Profile";
import { Recetas, TeaGathering } from "./componentes/Recetas";
import PackingList from "./componentes/taskList";


function App() {
  return (
    <>
    <Profile/>
    <PackingList/>
    <Listas/>
    <Recetas/>
    <TeaGathering/>
    </>
  );
}

export default App;
