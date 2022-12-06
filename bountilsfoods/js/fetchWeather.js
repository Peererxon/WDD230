const url = `https://api.openweathermap.org/data/2.5/weather?q=Barquisimeto&units=imperial&appid=9292920acb5554113149ccdebbf09d8b`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
