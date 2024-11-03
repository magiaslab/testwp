import fetch from 'node-fetch';

export async function getPosts() {
  const response = await fetch('https://operatori.costadeglietruschi.eu/wp-json/wp/v2/posts?_embed');
  const posts = await response.json();
  return posts;
}

export async function getCustomPosts() {
    const response = await fetch('https://operatori.costadeglietruschi.eu/wp-json/wp/v2/materiali?_embed');
    const customPosts = await response.json();
    return customPosts;
  }

  export async function getNewsOperatori() {
    const response = await fetch('https://operatori.costadeglietruschi.eu/wp-json/wp/v2/newsop?_embed');
    const newsOperatori = await response.json();
    return newsOperatori;
  }