import React from "react";

import { 
  TopNavbar,
  Header,
  MarkdownPreviewer,
  Footer, 
  defaultMd,
} from "./components";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: defaultMd,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value,
    })
  }

  render() {
      const { markdown } = this.state;
      return (
        <div className="App">
          <TopNavbar />
          <Header />
          <MarkdownPreviewer markdown={markdown} onChange={this.handleChange} />
          <Footer />
        </div>
    );
  }
}

export default App;
