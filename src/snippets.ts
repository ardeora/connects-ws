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