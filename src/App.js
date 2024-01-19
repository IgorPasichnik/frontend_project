import { Provider } from "react-redux";
import { store } from "./store/index";
import { MainPage } from "./components/pages/MainPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <MainPage></MainPage>
    </Provider>
  );
}

export default App;
