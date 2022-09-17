import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Comments from "./components/Comments/Comments";
import UploadForm from "./components/UploadForm/UploadForm";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Comments></Comments> */}
      <UploadForm></UploadForm>
    </div>
  );
}

export default App;
