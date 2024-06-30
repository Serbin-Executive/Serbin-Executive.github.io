import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import Store from "./store"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </StrictMode>
);
