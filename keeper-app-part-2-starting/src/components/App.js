import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
  return (
    <div>
      <Header />
      {notes.map(obj =>
        <Note
          key={obj.key}
          title={obj.title}
          note={obj.content}
        />)}
      <Footer />
    </div>
  );
}

export default App;
