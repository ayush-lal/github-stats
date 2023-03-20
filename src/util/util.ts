import axios from 'axios';

export async function getData() {
  try {
    const {data} = await axios.get('https://ayush-adhoc-api.up.railway.app/GetRepoLanguageStatistics')

    const flattenedAndReduced = data.reduce((prev: any, current: any) => {
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

    let flattenedAndReducedToArray = Object.keys(flattenedAndReduced).map(
      key => ({
        [key]: flattenedAndReduced[key],
      }),
    );

    let filteredArray = flattenedAndReducedToArray.filter((i: any) => {
      var excludedLanguages = ['Hack', 'Shell', 'Batchfile', 'Dockerfile']
      return !excludedLanguages.includes(Object.keys(i)[0]);
    })

    filteredArray.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => {
      return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
    })

    return filteredArray.map((i: any) => {
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
  '#FF0000',
  '#FFA500',
  '#ffff00',
  '#00FF00',
  '#008000',
  '#87CEEB',
  '#4169e1',
  '#ee82ee',
  '#ffc0cb',
  '#a52a2a',
  '#808080',
  '#FF6666',
  '#FFC966',
  '#FFFF7F',
  '#99FF99',
  '#7FBF7F',
  '#B7E1F3',
  '#A0B4F0',
  '#F6C0F6',
  '#FFDFE5',
  '#C97F7F',
  '#BFBFBF',
  '#000000'
];
