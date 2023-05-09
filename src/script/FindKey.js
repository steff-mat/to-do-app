export default function FindKey(obj, val) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obk[key] === val) {
      console.log(key);
      return key;
    }
  }
  return 'Error! Key not found';
}
