import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((Noteterm) => (
        <Note
          key={Noteterm.key}
          title={Noteterm.title}
          content={Noteterm.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
