export async function getCharacter(page) {
  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: ` {
        characters(page:${page}){
          results{
            image
            name
            id
            status
            species
            location {
              name
            }
            origin {
              name
              dimension
            }
            
          }
          info {
            pages
            prev
          }
        }
      }`,
    }),
  });
  const data = await response.json();
  const {
    data: { characters },
  } = data;
  return characters;
  /*     .then((response) => response.json())
    .then(({ data }) => data); */
}

//getCharacter();
