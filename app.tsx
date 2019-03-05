import * as React from 'react'
import Hello from "./hello";

class App extends React.Component {

  render() {
    return <div>
      <Hello ref={this.createHelloRef}/>
    </div>
  }

  createHelloRef = (hello: Hello) => {
    hello.sayHello();
  }
}

export default App
