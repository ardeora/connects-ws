export const first =  `
get node between ($START, $END) by node from interface where node like ".+"
`.trim();

export const second =  `
get intf between ($START, $END) by intf from interface where node="$node"
`.trim();

export const thirdCopyText = `
{
  "type": "query", 
  "query": "get identifier, node, intf, description between($START, $END) by identifier from interface where tag = \\"EXTERNAL\\"", 
  "text": "{{node}} - {{intf}} - {{description}}", 
  "value": "{{identifier}}"
}
`.trim();

export const third = `
{
  "type": "query", 
  "query": "get identifier, node, intf, description between($START, $END) 
            by identifier from interface where tag = \\"EXTERNAL\\"", 
  "text": "{{node}} - {{intf}} - {{description}}", 
  "value": "{{identifier}}"
}
`.trim();

export const fourth = `
{"type": "values", "measurement_type": "interface"}
`.trim();

export const fifth = `
get circuit.type between ($START, $END) by circuit.name from interface where node like ".+"
`.trim();

export const sixthCopy = `
{
  "type": "query", 
  "query": "get circuit.name, circuit.description between($START, $END) by circuit.name from interface where circuit.type like  \\"^$circuit_types$\\"", 
  "text": "{{circuit.name}} -- {{circuit.description}}", 
  "value": "{{circuit.name}}"
}`.trim();

export const sixth = `
{
  "type": "query", 
  "query": "get circuit.name, circuit.description between($START, $END) by circuit.name
            from interface where circuit.type like  \\"^$circuit_types$\\"", 
  "text": "{{circuit.name}} -- {{circuit.description}}", 
  "value": "{{circuit.name}}"
}`.trim();