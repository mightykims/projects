module.exports = function html(strings, ...keys) {
  let result = ' ';

  let i = 0;

  while (true) {

    if (strings[i]) {
      result = result + strings[i];
    }
    else {
      break;
    }
    if (keys[i]) {
      result = result + keys[i];
    }
    else {
      break;
    }

    i += 1;

  }


  return result;
}
