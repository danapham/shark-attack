import axios from 'axios';
import universal from './universal';

const baseUrl = 'https://shark-attack-2d9d6.firebaseio.com';

const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json`).then((res) => {
    const students = universal.objToArray(res.data);
    resolve(students);
  }).catch((err) => reject(err));
});

const livingStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=false`).then((res) => {
    const alives = universal.objToArray(res.data);
    resolve(alives);
  }).catch((err) => reject(err));
});

const dearlyBeloved = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=true`).then((res) => {
    const deads = universal.objToArray(res.data);
    resolve(deads);
  }).catch((err) => reject(err));
});

const followTheLight = (studentId) => axios.patch(`${baseUrl}/students/${studentId}.json`, { isDead: true });

export default {
  getStudents, livingStudents, dearlyBeloved, followTheLight,
};
