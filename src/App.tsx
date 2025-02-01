import { useRef } from "react";
import Input from "./components/Input";

// import Container from "./components/Contatiner";
// import Button from "./components/Button";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      {/* <Input label="Your name" id="name" />
      <Input label="Your age" id="age" /> */}
      {/* <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p> */}
      {/* <Container as={Button}>Click Me!</Container> */}

      <Input id="test" label="Test" ref={inputRef}></Input>
    </main>
  );
}

export default App;
