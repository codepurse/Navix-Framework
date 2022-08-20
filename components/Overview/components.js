import {
  Accordion,
  AccordionContent,
  AccordionItem,
  Alert,
  AlertContainer,
  Avatar,
  AvatarBatch,
  Badge,
  Box,
  Button,
  Checkbox,
  CircularLoader,
  Header,
  List,
  ListItem,
  Paragraph,
  Radio,
  RadioGroup,
  SegmentedButton,
  Switch,
  TabContent,
  TabHeader,
  Tabs,
  Textbox,
  useDebounce,
} from "@codepurse/navix";
import { Col, Row } from "react-bootstrap";
export default function components() {
  const notify = () => Alert.success("Sample Alert! Letss goo!");
  const segmentedArray = [
    {
      id: "one",
      label: "Button One",
    },
    {
      id: "two",
      label: "Button Two",
    },
  ];
  return (
    <Row className="rowComponents">
      <AlertContainer />
      <Col lg={12}>
        <p className="pHeader">Components</p>
        <p className="pHeaderSub">
          This component are dedicated for Navix Health Hub. It's a collection
          of interface elements that can be reused across the system. If you
          find any bugs please contact the developer.
        </p>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Button type="primary">Button</Button>
        </div>
        <div className="divName">
          <Header type={4}>Button</Header>
          <Paragraph style={{ color: "#757575" }}>
            With our design system you can add a button with single line of code
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <div>
            <AvatarBatch max="3">
              <Avatar
                label="Seulgi labadan"
                src="https://i.pinimg.com/originals/7d/3b/9d/7d3b9da836ea9044474eeb5d5971bf85.jpg"
              ></Avatar>
              <Avatar src="https://www.pinkvilla.com/files/when-red-velvets-seulgi-opened-up-about-her-thoughts-on-debuting-sub-unit.jpg"></Avatar>
              <Avatar src="http://pm1.narvii.com/6989/1aa8099ea958d8f9feead69ec561f43c0708c4f0r1-638-957v2_uhq.jpg"></Avatar>
              <Avatar src="https://www.pinkvilla.com/files/when-red-velvets-seulgi-opened-up-about-her-thoughts-on-debuting-sub-unit.jpg"></Avatar>
            </AvatarBatch>
          </div>
        </div>
        <div className="divName">
          <Header type={4}>Avatar</Header>
          <Paragraph style={{ color: "#757575" }}>
            Used to display an avatar or brand
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Tabs defaultKey="3">
            <TabHeader label="Tab One" id="3"></TabHeader>
            <TabHeader label="Tab Two" id="4"></TabHeader>
            <TabContent id="3">
              <Paragraph style={{ marginLeft: "25px" }}>🤩</Paragraph>
            </TabContent>
            <TabContent id="4">
              <Paragraph style={{ marginLeft: "25px" }}>😁</Paragraph>
            </TabContent>
          </Tabs>
        </div>
        <div className="divName">
          <Header type={4}>Tabs</Header>
          <Paragraph style={{ color: "#757575" }}>
            Tabs make it easy to switch between different views
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <RadioGroup defaultCheck="1" onChange={(e) => {}}>
            <Radio value="1" label=""></Radio>
            <Radio value="2" label=""></Radio>
          </RadioGroup>
        </div>
        <div className="divName">
          <Header type={4}>Radio</Header>
          <Paragraph style={{ color: "#757575" }}>
            Radio buttons allow the user to select one option from a set
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Textbox />
        </div>
        <div className="divName">
          <Header type={4}>Textbox</Header>
          <Paragraph style={{ color: "#757575" }}>
            Instead of HTML native controls, input, textarea
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <CircularLoader size="lg" />
        </div>
        <div className="divName">
          <Header type={4}>Circular progressbar</Header>
          <Paragraph style={{ color: "#757575" }}>
            A circular progress for displaying loading state of a page or a
            section
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Checkbox />
          <Checkbox />
        </div>
        <div className="divName">
          <Header type={4}>Checkbox</Header>
          <Paragraph style={{ color: "#757575" }}>
            Used for multiple data selection, support grouping
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Header type={2} style={{ textAlign: "center" }}>
            Navix Hub
          </Header>
        </div>
        <div className="divName">
          <Header type={4}>Header</Header>
          <Paragraph style={{ color: "#757575" }}>
            Header component with multiple design built in.
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Paragraph style={{ textAlign: "center" }}>
            Using this component, you can render any element like sub, sup ,
            header and etc..
          </Paragraph>
        </div>
        <div className="divName">
          <Header type={4}>Paragraph</Header>
          <Paragraph style={{ color: "#757575" }}>
            A text which you can render a another text element.
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Accordion>
            <AccordionItem title="Accordion One">
              <AccordionContent>
                <p>Test One</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem title="Accordion Two">
              <AccordionContent>
                <p>Test Two</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="divName">
          <Header type={4}>Accordion</Header>
          <Paragraph style={{ color: "#757575" }}>
            A content panel that supports folding panels
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Button type="sucess" onClick={useDebounce((e) => notify(), 50)}>
            Click me 👈
          </Button>
        </div>
        <div className="divName">
          <Header type={4}>Alert / Toast</Header>
          <Paragraph style={{ color: "#757575" }}>
            Alert box that are stackable with multiple designs
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Switch />
        </div>
        <div className="divName">
          <Header type={4}>Switch</Header>
          <Paragraph style={{ color: "#757575" }}>
            Used to select between two values
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <SegmentedButton
            value={segmentedArray}
            selected={2}
            onSelect={(e) => {
              console.log(e);
            }}
          />
        </div>
        <div className="divName">
          <Header type={4}>Segmented button</Header>
          <Paragraph style={{ color: "#757575" }}>
            A component to group multple buttons
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <div style={{ marginLeft: "10px" }}>
            <List>
              <ListItem
                label="Landing page design"
                subLabel="This is a sample sub header"
              ></ListItem>
            </List>
          </div>
        </div>
        <div className="divName">
          <Header type={4}>List</Header>
          <Paragraph style={{ color: "#757575" }}>
            A list can be used to display content related to a single subject
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Badge type="primary">Primary</Badge>
        </div>
        <div className="divName">
          <Header type={4}>Badge</Header>
          <Paragraph style={{ color: "#757575" }}>
            Used for buttons, numbers or status markers next to icons.
          </Paragraph>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Box
            width="100%"
            height="100%"
            borderRadius="5px"
            style={{
              background: "linear-gradient(to right, #00416a, #e4e5e6)",
            }}
          >
            <Paragraph color="white">Sample Paragraph</Paragraph>
          </Box>
        </div>
        <div className="divName">
          <Header type={4}>Box</Header>
          <Paragraph style={{ color: "#757575" }}>
            Box is like wrapper of your elements.
          </Paragraph>
        </div>
      </Col>
    </Row>
  );
}
