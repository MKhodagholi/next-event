import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-end px-10 py-4 text-teal-300 bg-black-400 md:px-40">
      <Link href="/">
        <h1 className="text-4xl">NextEvents</h1>
      </Link>
      <Link href="/events">
        <h3 className="text-xl">Browse All Events</h3>
      </Link>
    </nav>
  );
}
