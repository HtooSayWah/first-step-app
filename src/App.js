// import './App.css';
// import Form from "./Form"

// function App() {
// return (
// <div className="App">
// <Form />
// </div>

// );
// }

// export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./view/Layout";
import Counter  from "./view/counter";
import './css/App.css';
import SignUP from "./view/Form";
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<SignUP />} />
            <Route path="form" element={<SignUP />} />
            <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);