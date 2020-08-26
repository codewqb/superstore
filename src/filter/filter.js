export function dateFormat(dt) {
  const time = new Date(dt);

  function double(val) {
    if (val < 10) return '0' + val;
    return val;
  }
  let y = time.getFullYear();
  let M = time.getMonth() + 1;
  let d = time.getDate();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  return y + '-' + double(M) + '-' + double(d) + ' ' + double(h) + ':' + double(m) + ':' + double(s);
}
