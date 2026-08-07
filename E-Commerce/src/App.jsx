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
  function toggleGreeting() {
    if (showGreeting) {
      showGreeting = false;
    } else {
      showGreeting = true;
    }
  }
  return (
    <>
      <div>
        <button onClick={toggleGreeting}>Toggle Greeting</button>
        {showGreeting && <Greeting name={"Vinith"} age={25} />}
      </div>
    </>
  );
}

export default App;
