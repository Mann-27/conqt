import { useState } from "react";
import { Header, Items, Suppliers, Button } from "./components";
function App() {
  return (
    <>
      <main className="">
        <Header />
        <Items />
        <Suppliers />
      </main>
    </>
  );
}

export default App;
