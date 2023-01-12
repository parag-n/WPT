import { AddComponent } from "./myComponents/AddComponent";
import MathsComponent from "./myComponents/MathsComponent";
import MyInput from "./myComponents/MyInput";
import MyJSXTest from "./myComponents/MyJSX";
import Show from "./myComponents/Show";
import Welcome from "./myComponents/Welcome";

function App() {
  return (
    <>
      <h1>Hello World!</h1><AddComponent />
      <Show/>
      <MyInput/>
      <button>Addition</button>
      <MyJSXTest/>
      <Welcome name="India"/>
      <MathsComponent num1="40" num2="3" op="+"/>
    </>

  );
}

export default App;
