import picture from "../assets/profilepic.png";

export default function Introduction() {
  return (
    <div className="block">
      <div className="flex flex-col h-100 bg-body-yellow font-kreon items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl mb-4 mt-12 font-bold text-custom-red">
            Hello, I'm
          </h1>
          <p className="text-4xl mb-2 font-bold">Web Developer</p>
          <p className="text-2xl mb-6">
            I am a web developer in the Philippines
          </p>
          <button className="bg-custom-red text-white px-9 py-2 rounded border-2 border-black">
            Hire me
          </button>
        </div>
        <div className="mt-8 mb-10">
          <img
            src={picture}
            alt="Profile Pic"
            style={{ borderRadius: "185.5px" }}
          />
        </div>
      </div>
    </div>
  );
}
