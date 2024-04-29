"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function App() {
    //const [count, setCount] = useState(0)
    return (<div>
      <FinalOutput title="go to gym" description="eat food"/>
    </div>);
}
function FinalOutput(todo) {
    return (<div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>);
}
exports.default = App;
