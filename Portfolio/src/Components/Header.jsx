import zanelogo from "../assets/Zanelog.gif"

export default function Headers() {
  return (
    <div className="bg-header-yellow font-kreon block">
      <div className="flex justify-between items-center h-24 mx-5 md:mx-20 lg:mx-[15px]">
        <div className="flex space-x-4 items-center">
          {/* Flex container with alignment and spacing */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl flex items-center">
            Z
            <img
              src={zanelogo || "/placeholder.svg"}
              alt="ink"
              className="inline-block w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-2 pb-[4px]" // Adjust size and spacing
            />
            ne
          </h1>
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
  )
}
