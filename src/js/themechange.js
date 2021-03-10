const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const themeStorageStatus = localStorage.getItem('theme');
themeStorage();

themeSwitchToggleRef.addEventListener('change', themeControler);

function themeControler() {
  themeSwitchToggleRef.checked ? darkTheme() : lightTheme();
}

function themeStorage() {
  themeStorageStatus === Theme.DARK ? darkTheme() : lightTheme();
}

function darkTheme() {
  console.log(themeSwitchToggleRef.checked);
  themeSwitchToggleRef.checked = true;
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}

function lightTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}
