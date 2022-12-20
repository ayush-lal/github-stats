import axios from 'axios';

export async function getData() {
  try {
    const {data} = await axios.get('http://localhost:8000/GetRepoLanguageStatistics')

    const flattenedAndReduced = data.reduce((prev, current) => {
      Object.keys(prev).forEach(key => {
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

    return flattenedAndReducedToArray.map((i: any) => {
      return {
        label: Object.keys(i)[0],
        value: i[Object.keys(i)[0]],
      };
    });
  } catch (error) {
    console.log(error);
  }
}

async function getRepoLanguage(array: string[]) {
  let response = await Promise.all(
    array.map(async repo => {
      const { data } = await axios.get(repo, {
        headers: {
          Authorization: `${import.meta.env.VITE_GH_APIKEY}`,
        },
      });
      return data;
    }),
  );

  return response;
}

export const colours = [
  '#a5c9ff',
  '#f8b380',
  '#d692ce',
  '#b7fcae',
  '#8efabb',
  '#808de6',
  '#f895bf',
  '#9caac8',
  '#9bddff',
  '#8cc69e',
  '#a195aa',
  '#93fffd',
  '#e3d5dd',
  '#ff8cf0',
  '#cff280',
  '#87adc0',
  '#899880',
  '#f7fd80',
  '#eca087',
  '#b78aff',
];
