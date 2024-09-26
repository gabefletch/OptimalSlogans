# OptimalSlogans
Code for the text slogans that appear beneath the Optimal logo on the Optimal site.<br>

OptimalSlogans is a simple JavaScript codepoint hosted over HTTPS via [Val Town](https://val.town) which is then intercepted by a [Fetch](https://fetch.tools) component within [Framer](https://framer.com) where the [Optimal project](https://github.com/gabefletch/optimal-v11) is hosted. <br>

### Code Process Overview
1 - A simple text list created with `const textlist`:
```
const textlist = [
  "\"example-text-1\"",
  "\"example-text-2\"",
  "\"example-text-3\"",
];
```
2 - Next, CORS is enabled for Framer export:
```
export default async function server(request: Request): Promise<Response> {
  // Enable CORS for Framer
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });
```
3 - Paramaters are set for OPTIONS request in CORS preflight:
```
// Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    headers.append("Access-Control-Allow-Methods", "GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    return new Response(null, { headers, status: 204 });
```
4 - Text is randomly pulled from the list:
```
// Get a random text from the list
  const randomIndex = Math.floor(Math.random() * textList.length);
  const randomText = textList[randomIndex];
```
5 - A response object is created to be rendered by Framer:
```
// Create the response object
  const responseBody = {
    text: randomText,
  };

  return new Response(JSON.stringify(responseBody), { headers });
}
```
