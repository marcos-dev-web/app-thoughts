
class Menu {
  constructor({menuView}) {
    this.menu = menuView;

    this.state = {
      opened: false,
    }

    this.config = this.config.bind(this);
    this.toggleMenuOpened = this.toggleMenuOpened.bind(this);
    this.toggleMenuOpenedEnter = this.toggleMenuOpenedEnter.bind(this);
  }

  toggleMenuOpenedEnter(event, {classWhenOpened, forceClose}) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleMenuOpened({classWhenOpened, forceClose});
    }
  }

  toggleMenuOpened({classWhenOpened, forceClose}) {
    this.state.opened = !forceClose ? !this.state.opened : false;
    this.menu.classList.toggle(classWhenOpened, this.state.opened);
  }

  config({menuButton, classToOpen, classToCloseWhenClicked}) {
    menuButton.addEventListener('click', this.toggleMenuOpened.bind(this, {classWhenOpened: classToOpen}));
    menuButton.addEventListener('keyup', (e) => this.toggleMenuOpenedEnter(e, {classWhenOpened: classToOpen}));

    const listItemsToCloseMenuWhenClicked = [...document.getElementsByClassName(classToCloseWhenClicked)];

    listItemsToCloseMenuWhenClicked.forEach(element => {
      element.addEventListener('click', this.toggleMenuOpened.bind(this, {classWhenOpened: classToOpen, forceClose: true}))
      element.addEventListener('keyup', (e) => this.toggleMenuOpenedEnter(e, {classWhenOpened: classToOpen, forceClose: true}))
    })
  }
}

export default Menu;