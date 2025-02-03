import { useRef } from "react";
import Input from "./components/Input";
import Form from "./components/From";
import Button from "./components/Button";
import { type FormHandle } from "./components/From";

// import Container from "./components/Contatiner";
// import Button from "./components/Button";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormHandle>(null);

  function handleSubmit(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    formRef.current?.clear();
  }
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

      {/* <Input id="test" label="Test" ref={inputRef}></Input> */}

      <Form onSave={handleSubmit} ref={formRef}>
        <Input type="text" label="Name" id="name"></Input>
        <Input type="number" label="Age" id="age"></Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
