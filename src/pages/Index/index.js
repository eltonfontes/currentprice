import Aside from "../../components/Aside";
import Preview from "../../components/Preview";
import { Row, Col, Card } from "./styles";

function App() {
  return (
    <Row>
      <Col>
        <Card>
          <Aside />
        </Card>
      </Col>
      <Col>
        <Card>
          <Preview />
        </Card>
      </Col>
    </Row>
  );
}

export default App;
