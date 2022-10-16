function getCharacter() {
  fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ` {
                characters{
                  results{
                    image
                    name
                    id
                    status
                    episode {
                      id
                      name
                      
                    }
                  }
                }
            }`,
    }),
  })
    .then((response) => response.json())
    .then(({ data }) => console.log(data));
}

getCharacter();
