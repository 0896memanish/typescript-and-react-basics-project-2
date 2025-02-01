// import Input from "./components/Input";

import Container from "./components/Contatiner";
import Button from "./components/Button";

function App() {
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
      <Container as={Button}>Click Me!</Container>
    </main>
  );
}

export default App;
