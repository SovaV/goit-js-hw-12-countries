const checkBox = document.querySelector('#theme-switch-toggle');
const changeBodyTheme = document.querySelector('body');
const STORAGE_KEY = 'theme-switch__toggle';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkBox.addEventListener('change', onChangeTheme, populateThemeLocal);
populateThemeLocal();
// змінити тему
onChangeTheme(); // light-theme зразу добавляється
function onChangeTheme() {
  if (checkBox.checked) {
    changeBodyTheme.className = Theme.DARK;
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    changeBodyTheme.className = Theme.LIGHT;
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
}
// запамятати тему
function populateThemeLocal() {
  const savedThemeLocal = localStorage.getItem(STORAGE_KEY);
  if (savedThemeLocal === Theme.DARK) {
    changeBodyTheme.classList.add(savedThemeLocal);
    checkBox.checked = true;
  } else {
    changeBodyTheme.classList.add(savedThemeLocal);
  }
}
