import {
  Accordion,
  AccordionContent,
  AccordionItem,
  Alert,
  AlertContainer,
  Avatar,
  AvatarBatch,
  Button,
  Checkbox,
  CircularLoader,
  Header,
  Paragraph,
  Radio,
  RadioGroup,
  Textbox,
} from "@codepurse/navix";
import { Col, Row } from "react-bootstrap";
export default function components() {
  const notify = () => Alert.success("Sample Alert! Letss goo!");
  return (
    <Row className="rowComponents">
      <AlertContainer />
      <Col lg={12}>
        <p className="pHeader">Get Started</p>
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
          <p></p>
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
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <RadioGroup defaultCheck="1" onChange={(e) => {}}>
            <Radio value="1" label=""></Radio>
            <Radio value="2" label=""></Radio>
          </RadioGroup>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Textbox />
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <CircularLoader size="lg" />
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Checkbox />
          <Checkbox />
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Header type={2} style={{ textAlign: "center" }}>
            Navix Hub
          </Header>
        </div>
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Paragraph style={{ textAlign: "center" }}>
            Using this component, you can render any element like sub, sup ,
            header and etc..
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
      </Col>
      <Col lg={4}>
        <div className="box align-items-center justify-content-center d-flex">
          <Button type="sucess" onClick={notify}>
            Click me 👈
          </Button>
        </div>
        <div className="divName">
          <p></p>
        </div>
      </Col>
    </Row>
  );
}
