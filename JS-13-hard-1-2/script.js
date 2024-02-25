'use strict';

let lang = '';

const checkLang = () => {
  lang = prompt('Введи EN или ENG для английского, по умолчанию - русский: ');
  if (lang === '') {
    return window.RPS('RUS');
  } else if (lang === 'EN' || 'ENG') {
    return window.RPS('ENG');
  } else {
    checkLang();
  }
};

checkLang();

// startGame('ENG');
