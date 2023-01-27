import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cyan-100 pb-4">
      <Nav />
      <main className="flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
}
