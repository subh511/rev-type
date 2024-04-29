interface Todos {
  description: string;
  title: string;
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <FinalOutput title="go to gym" description="eat food" />
    </div>
  );
}

function FinalOutput(todo: Todos) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
