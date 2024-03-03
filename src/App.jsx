import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import Social from "./components/Social";

function App() {
  return (
    <div
      className="
          bg-gradient-to-r 
        from-green-500
        via-cyan-500
        to-blue-500
          items-center 
          justify-center
          flex
          h-screen
          bg-clip-text
          animate-gradient
          select-none
          "
    >
      <div className="flex-col">
        <h1
          className="
            text-7xl
            md:text-9xl
            font-extrabold
            text-transparent
            "
        >
          Luck9r
        </h1>
        <div className="flex flex-row justify-center space-x-10 mt-6">
          <Social url="https://github.com/Luck9r">
            <BsGithub className="fill-inherit" />
          </Social>
          <Social url="https://www.linkedin.com/in/mykyta-shemechko-a5b232245/">
            <BsLinkedin className="fill-inherit" />
          </Social>
          <Social url="mailto:ms@luck9r.com">
            <BsEnvelopeFill className="fill-inherit" />
          </Social>
        </div>
      </div>
    </div>
  );
}

export default App;
