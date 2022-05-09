import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Code } from './Code'
import { first, second, third, thirdCopyText} from './snippets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Grafana Workshop</h1>
      <h2>GlobalNOC Connects 2022</h2>
      <div>

      </div>
      <div className='query-container'>
        <h3>Query Snippets</h3>

        <h4>List all nodes</h4>
        <Code code={first} file='1-TSDS-Get-All-Nodes' language='sql' />
        <p className="description">TSDS query to get all nodes that are present in the <pre>interface</pre> measurement type between the time range
        <br /> of <pre>$START</pre> and <pre>$END</pre>
        </p>

        <h4>List all interfaces</h4>
        <Code code={second} file='2-TSDS-Get-All-Interfaces' language='sql' />
        <p className="description">Reference existing variables in newer queries using <pre>$VARIABLE</pre> to generate truly dynamic results!
        </p>

        <h4>Identifiers</h4>
        <Code code={third} copyText={thirdCopyText} file='2-TSDS-Get-Identifiers' language='json' />
        <p className="description">
        </p>

        
      </div>
    </div>
  )
}

export default App
