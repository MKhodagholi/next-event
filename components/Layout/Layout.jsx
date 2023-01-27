import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cyan-100 pb-4">
      <Nav />
      <main className="flex justify-center w-full mt-20 mx-auto">
        {children}
      </main>
    </div>
  );
}
