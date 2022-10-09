import {GlobalState} from "./Context/GlobalState";
import {Router} from "./router/router"

function App() {
  return (
    <div>
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
