import Hello from "./components/Hello";
import Gig from "./components/Gig.jsx";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Gig 
        name="Blood Orange"
        image="https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg" alt="promo image for Blood Orange"
        description="Alternative R&B"
        timeAndDate={new Date("July 31, 2026 21:30:00")}
        location="London, UK"
      />
    </>
  );
}

export default App;
