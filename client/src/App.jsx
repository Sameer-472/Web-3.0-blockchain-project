import { Loader , Navbar , Footer , Services , Welcome , Transection } from "./components";

const App = () => {

  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
    </div>
        <Services/>
        <Transection/>
        <Footer/>
      </div>
  )
}

export default App;
