import axios from 'axios';

const baseUrl = 'https://shark-attack-2d9d6.firebaseio.com/';

const getData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json`).then((res) => {
    const students = [];
    Object.keys(res.data).forEach((key) => students.push(res.data[key]));
    resolve(students);
  }).catch((err) => reject(err));
});

export default { getData };
