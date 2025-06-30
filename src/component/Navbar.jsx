export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-500 shadow">
      <h1 className="text-2xl font-serif text-sheaGold">Hans Organic Shea Butter </h1>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/about">Product</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
