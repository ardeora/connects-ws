import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Code } from './Code'
import { first, second, third, thirdCopyText, fourth, fifth, sixth, sixthCopy} from './snippets'

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

        <h4>Get Identifiers</h4>
        <Code code={third} copyText={thirdCopyText} file='3-TSDS-Get-Identifiers' language='json' />
        <p className="description">
        - The <pre>type</pre> property tells TSDS this query will be a query type. Other types include search for text based <br /> search , values to retrieve values from a TSDS Measurement type
        </p>
        <p className="description">
        - The <pre>query</pre>  is the actual query we will send TSDS to filter data for us. It has a field called identifier.<br />
        Identifier is a unique id that is created for a combination of core metadata of a measurment type. <br />
        It can be compared to a primary key in a relational database.
        </p>
        <p className="description">
        - An identifier value is a hash string that looks like gibberish so it makes more sense to add a label to<br /> our variable using the <pre>text</pre> field. The text field can use metadata fields described in the first part <br /> of the query as variables. You can reference them using the handlebars syntax
        </p>
        <p className="description">
        - The <pre>value</pre> field will contain the actual value of the variable.
        </p>

        <h4>Get Measurement Metrics</h4>
        <Code code={fourth} file='4-TSDS-Get-Measurement-Values' language='json' />
        <p className="description">Get all metrics for the interface measurement type
        </p>

        <h4>Get Circuit Types</h4>
        <Code code={fifth} file='5-TSDS-Get-Circuit-Type' language='sql' />
        <p className="description">Get all circuit types present in the interface measurement table
        </p>

        <h4>Get Circuits</h4>
        <Code copyText={sixthCopy} code={sixth} file='6-TSDS-Get-Circuits' language='sql' />
        <p className="description">Get all circuits of the selected circuit type
        </p>

        <div style={{marginTop: '200px'}}></div>

      </div>
    </div>
  )
}

export default App
