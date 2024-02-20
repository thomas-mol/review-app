import "./App.css";
import ReviewComponent from "./components/ReviewComponent";

function App() {
  return (
    <>
      <div className="container-fluid mb-4">
        <h1 className="display-4">Review App</h1>
      </div>
      <div className="container-fluid">
        <ReviewComponent />
      </div>
    </>
  );
}

export default App;
