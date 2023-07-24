import React from 'react';
import { marked } from 'marked';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

// Set options https://marked.js.org/using_advanced#options
marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartypants: false,
  xhtml: false
});

const cardStyle = {
  width: "100%",
  height: "100%",
  border:"1px solid var(--color-subtext)",
  
}

const cardHeaderStyle = {
  backgroundColor:"var(--color-bg)",
  color:"var(--color-subtext)", 
};

const previewStyle = {
    backgroundColor: "#f3f3f3",
    padding: "1rem",
};

const formStyle ={
  backgroundColor: "#f3f3f3",
  width:"100%",
  height:"100%",
  padding: "1rem",

}

const MarkdownPreviewer = ({ markdown, onChange }) =>  {  
const html = marked(markdown);
 return (
    <Container fluid>
        <Row>
          <Col xs={6}>
            <Card style={cardStyle}>
            <Card.Header className="text-center" style={cardHeaderStyle}>
              <h2>Editor</h2>
            </Card.Header>
            <Card.Body>
                <Form
                id="editor" 
                as="textarea"
                value={markdown} 
                onChange={onChange}
                placeholder="Enter your text here..."
                style={formStyle}
              />
            </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card style={cardStyle}>
              <Card.Header className="text-center" style={cardHeaderStyle}>
                <h2>Preview</h2>
              </Card.Header>
              <Card.Body>
                <div id="preview" style={previewStyle} dangerouslySetInnerHTML={{__html: html}}></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
 );
}; 

export default MarkdownPreviewer;
