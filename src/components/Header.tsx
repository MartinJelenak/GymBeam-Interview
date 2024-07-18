import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8 bg-white/5 border-b border-l border-r border-white/10 backdrop-blur-sm rounded-b-3xl shadow-lg"
        aria-label="Global"
      >
        <div className="flex justify-end w-full">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
