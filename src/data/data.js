async function readData () {
  let dataLocation = process.env.PUBLIC_URL + '/data.json'
  const response = await fetch(dataLocation);
  const data = await response.json();
  return data;
};

const Data = await readData()

export default Data;