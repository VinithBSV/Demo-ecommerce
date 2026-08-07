import "./App.css";
function Greeting({ name, age }) {
  return (
    <>
      <h1>
        Hello, I am {name}, {age} years old.
      </h1>
    </>
  );
}
function App() {
  const showGreeting = false;
  return (
    <>
      <div>
        {showGreeting ? (
          <Greeting name={"Vinith"} age={25} />
        ) : (
          <button>Click Me</button>
        )}{" "}
      </div>
    </>
  );
}

export default App;
