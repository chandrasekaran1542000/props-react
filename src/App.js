import "./styles.css";
function Property(props) {
  return (
    <>
      <h1>hello{props.name}</h1>
      <h1>age:{props.age}</h1>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <Property name="chandra" age={21} />
    </div>
  );
}
