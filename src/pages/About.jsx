export default function About() {
  return (
    <div className="bg-[var(--primary-color)] w-[50%] h-[75vh] shadow-md rounded-lg flex flex-col p-10">
      <div className=" w-full flex flex-col">
        <div className="bg-[var(--secondary-color)] w-full h-full shadow-md rounded-lg p-7 flex flex-col">
          <h1 className="font-bold text-xl">About Pro-Ject</h1>
          <p className="text-lg mt-5">
            Pro-ject is an online forum for students to collaborate through
            academic projects.
          </p>
          <h2 className="font-bold mt-5 text-lg">Developers</h2>
          <p className="mt-2"> Cumti, Jeff Rigel P. </p>
          <p>De Jesus, Andrei Zarmin D.</p>
          <p>Dizon, Rohann Gabriel D.</p>
          <p>Mendoza, Kaissehr Tyrrelle</p>
          <p>Perez, Patrick Hans A.</p>
        </div>
        <div className="flex flex-col bg-[var(--background-color)] shadow-md rounded-lg mt-10">
          <div className="p-5 font-bold text-xl ">Packages Used</div>
          <textarea
            className="p-5 overflow-y-scroll bg-[var(--background-color)] w-full h-full shadow-md rounded-lg"
            readOnly
          >
            react, react-dom, react-router-dom, react-type-animation,
            reactjs-popup, @mui/material, @emotion/react, @emotion/styled,
            bootstrap, tailwindcss, framer-motion,
            @fortawesome/fontawesome-svg-core,
            @fortawesome/free-regular-svg-icons,
            @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome,
            axios, bcryptjs, date-fns, @google/generative-ai, postcss,
            autoprefixer, vite, @vitejs/plugin-react, eslint, @eslint/js,
            eslint-plugin-react, eslint-plugin-react-hooks,
            eslint-plugin-react-refresh, @types/react, @types/react-dom, globals
          </textarea>
        </div>
      </div>
    </div>
  );
}
