import Menu from './Menu.js';

const menuConfigs = {
  container: document.getElementById('menu-view'),
  button: document.getElementById('menu-button'),
  classToOpen: 'menubar-opened',
}

const menu = new Menu({menuView: menuConfigs.container});

menu.config({
  menuButton: menuConfigs.button,
  classToOpen: menuConfigs.classToOpen,
  classToCloseWhenClicked: 'menubar__item'
});