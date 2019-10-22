const GRAPHQL_URL = 'http://localhost:9000';

async function fetchGreeting() {
  // awaiting the response of the fetch call b/c HTTP requests are asyncronous
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `
				query {
					greeting
				}
			`
    })
  });
  // need to await the result b/c with the fetch API, parsing the json also returns a Promise
  // const responseBody = await response.json();
  // the greeting message is wrapped in the 'data' property; so we can just destructure that out
  const { data } = await response.json();
  // console.log(data) => {greeting: "Hello GraphQL World!"}
  return data;
}

// we can chain .then b/c fetchGreeting is an async function and returns a Promise
// can just destructure greeting and change the text
fetchGreeting().then(({ greeting }) => {
  const title = document.getElementsByTagName('h1')[0];
  title.textContent = greeting;
});
