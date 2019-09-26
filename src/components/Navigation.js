import React, {Component} from 'react';
import LinksGenerator from './LinksGenerator';
import HamburgerToggler from './HamburgerToggler';
import Backdrop from './Backdrop';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  clickHandler() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  closeDrawer() {
    this.setState({
      clicked: false
    });
  }

  render() {
    let classHandler = 'links';
    let backdrop;

    if (this.state.clicked) {
      classHandler = 'links'.concat(' show');
      backdrop = <Backdrop click={this.clickHandler} />;
    }

    return (
      <div className='navigation'>
        <div className='container'>
          <div className='appointment-bttn'>
            <a href='https://calendly.com/gtaccount/30min'>Appointment</a>
          </div>
          <div className='divider' />
          <div className={classHandler}>
            <LinksGenerator click={this.closeDrawer}/>
          </div>
          <div className='hamburger-toggler'>
            <HamburgerToggler click={this.clickHandler}/>
          </div>
          {backdrop}
        </div>
      </div>
    );
  }
}

export default Navigation;
