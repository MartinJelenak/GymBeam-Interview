import DarkModeToggle from "./components/DarkModeToggle";
import ContainerBox from "./components/ContainerBox";

function App() {
  return (
    <div
      className="absolute top-0 z-[-2] h-screen w-screen text-gray-800 dark:text-gray-200
        bg-white dark:bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(140,140,150,1),rgba(255,255,255,0))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <DarkModeToggle />
      <ContainerBox>test</ContainerBox>
      <div>Toto je obsah, ktorý mení farbu pozadia podľa režimu.</div>
    </div>
  );
}

export default App;
