export default function createIteratorObject(report) {
  let answer = [];
  for (const [key, val] of Object.entries(report.allEmployees)) {
    answer = [...answer, ...val];
  }
  return answer;
}
