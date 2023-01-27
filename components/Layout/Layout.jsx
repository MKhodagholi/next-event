import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cyan-100 pb-4">
      <Nav />
      <main className="flex flex-col justify-center w-[80%] mt-20 mx-auto sm:w-[%75] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        {children}
      </main>
    </div>
  );
}
