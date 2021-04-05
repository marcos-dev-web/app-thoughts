
class Menu {
  constructor({menuView}) {
    this.menu = menuView;

    this.state = {
      opened: false,
    }

    this.config = this.config.bind(this);
    this.toggleMenuOpened = this.toggleMenuOpened.bind(this);
  }

  toggleMenuOpened({classWhenOpened, forceClose}) {
    this.state.opened = !forceClose ? !this.state.opened : false;
    this.menu.classList.toggle(classWhenOpened, this.state.opened);
  }

  config({menuButton, classToOpen, classToCloseWhenClicked}) {
    menuButton.addEventListener('click', this.toggleMenuOpened.bind(this, {classWhenOpened: classToOpen}));

    const listItemsToCloseMenuWhenClicked = [...document.getElementsByClassName(classToCloseWhenClicked)];

    listItemsToCloseMenuWhenClicked.forEach(element => {
      element.addEventListener('click', this.toggleMenuOpened.bind(this, {classWhenOpened: classToOpen, forceClose: true}))
    })
  }
}

export default Menu;