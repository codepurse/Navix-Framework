import { Header, Paragraph } from "@codepurse/navix";
import { Col, Row } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function Hooks() {
  return (
    <Row className="rowComponents">
      <Col lg={12}>
        <Header type={4}>useDebounce</Header>
        <Paragraph style={{ color: "#757575" }}>
          This hooks allows you to delay functions depends on what value you
          set. This is mostly usable in searching like in textbox.
        </Paragraph>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`import {useDebounce, Button} from "@codepurse/navix" 
          
function Example() {   
    return (
        <Fragment>
            <Button type="primary" onClick={useDebounce((e) => alert("Test Debounce"),4000)}>
                Click Me
            </Button>
        </Fragment>
    )
}`}
        </SyntaxHighlighter>
        <Paragraph style={{ color: "#757575" }}>
          The output about will alert the user after 4 seconds.
        </Paragraph>
      </Col>
    </Row>
  );
}
