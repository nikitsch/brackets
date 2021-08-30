module.exports = function check(str, bracketsConfig) {
  let text = str.split('');
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if ( text[i] == bracketsConfig[j][0] && text[i + 1] == bracketsConfig[j][1] ) {
        text.splice (i, 2);
        i = -1;
        continue; 
      }
    }
  }
  if (text.length == 0) {
    return true;
  }
  else {
    return false;
  }
};
