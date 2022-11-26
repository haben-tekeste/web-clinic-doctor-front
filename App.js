import { StatusBar } from "expo-status-bar";
import Stack from "./src/Components/Navigations/Stack";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./src/Reducers";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigationRef";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor="#F7EEFF" />
        <Stack />
      </NavigationContainer>
    </Provider>
  );
}
