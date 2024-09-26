const textList = [
  "\"look ma, I don't pay for spotify\"",
  "\"to optimize or not to optimize\"",
  "\"did you follow the instructions?\"",
  "\"hacker!!!\"",
  "\"oh, there's a way\"",
  "\"what is iOS? You mean iPhone?\"",
  "\"my android has had that for years\"",
  "\"is that even legal?\"",
  "\"yes, really\"",
  "\"checks up\"",
  "\"snapchat support when?\"",
  "\"why is it called that?\"",
  "\"randomization isn't real\"",
  "\"we're so back\"",
  "\"do you even read these?\"",
  "\"end of line\"",
  "\"greetings, programs\"",
  "\"hey there john\"",
  "\"apple wouldn't like this\"",
  "\"it's not jailbreak\"",
  "\"yet another clever quote\"",
];

export default async function server(request: Request): Promise<Response> {
  // Enable CORS for Framer
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });

  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    headers.append("Access-Control-Allow-Methods", "GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    return new Response(null, { headers, status: 204 });
  }

  // Get a random text from the list
  const randomIndex = Math.floor(Math.random() * textList.length);
  const randomText = textList[randomIndex];

  // Create the response object
  const responseBody = {
    text: randomText,
  };

  return new Response(JSON.stringify(responseBody), { headers });
}
