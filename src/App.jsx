import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Form from "./pages/Form";
import BMI from "./pages/BMI";
import Todo from "./pages/Todo";
import Stopwatch from "./pages/Stopwatch";
import Bank from "./pages/Bank";
import Vote from "./pages/VoteMachine";
import Calculator from "./pages/Calculator";
import ColorBox from "./pages/ColorBox";
import TaskManager from "./pages/TaskManager";
import Weather from "./pages/Weather";


export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/color" element={<ColorBox />} />
      <Route path="/tasks" element={<TaskManager />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
    </BrowserRouter>
  );
}