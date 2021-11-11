const checkbox = document.getElementById('checkbox');
const buttons = Array.from(document.getElementsByTagName('button'));

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  buttons.forEach((element) => {
    element.classList.toggle('dark');
  });
});
