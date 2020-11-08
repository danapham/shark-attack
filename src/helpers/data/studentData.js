import axios from 'axios';

const baseUrl = 'https://shark-attack-2d9d6.firebaseio.com/';

const getData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shark.json`).then((res) => {
    const students = [];
    Object.keys(res).forEach((key) => students.push(res[key]));
    resolve(res.data);
  }).catch((err) => reject(err));
});

export default { getData };
