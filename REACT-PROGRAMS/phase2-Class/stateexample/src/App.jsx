import UncontrolledRegistration from "./components/UncontrolledRegistration";
import ControlledRegistration from "./components/ControlledRegistration";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full p-6">
        <UncontrolledRegistration />
        <ControlledRegistration />
      </div>
    </div>
  );
}

export default App;