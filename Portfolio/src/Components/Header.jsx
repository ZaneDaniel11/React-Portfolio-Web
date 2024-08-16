export default function Headers() {
  return (
    <div className="bg-header-yellow font-kreon block">
      <div className="flex justify-between items-center h-24 mx-5 md:mx-20h-[130px] lg:mx-28">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl">Zane</h1>
        </div>

        <div>
          <ul className="flex space-x-6 text-lg md:text-2xl lg:text-4xl">
            <li>Abouts</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
