import axios from 'axios';

export async function getData() {
  try {
    const { data } = await axios.get(
      'https://api.github.com/users/ayush-lal/repos',
    );

    const response = data.map((i: any) => i.languages_url);

    const repoLanguage = await getRepoLanguage(response);

    const flattenedAndReduced = repoLanguage.reduce((prev, current) => {
      Object.keys(prev).forEach((key, index) => {
        if (current[key]) {
          prev[key] += current[key];
          delete current[key];
        }
      });
      Object.keys(current).forEach(key => {
        if (!prev[key]) prev[key] = current[key];
      });
      return { ...prev };
    });

    const flattenedAndReducedToArray = Object.keys(flattenedAndReduced).map(
      key => ({
        [key]: flattenedAndReduced[key],
      }),
    );

    const test = flattenedAndReducedToArray.map((i: any) => {
      //   console.log(i[Object.keys(i)[0]]);
      //   console.log(Object.keys(i)[0]);
      //   console.log(i[Object.keys(i)[0]]);

      return {
        label: Object.keys(i)[0],
        value: i[Object.keys(i)[0]],
      };
    });

    return test;
  } catch (error) {
    throw error;
  }
}

async function getRepoLanguage(array: string[]) {
  let response = await Promise.all(
    array.map(async repo => {
      const { data } = await axios.get(repo);
      return data;
    }),
  );

  return response;
}

export const colours = ['#FF6384', '#36A2EB', '#FFCE56'];
