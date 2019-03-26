import React, {Component} from 'react'

class PromotionCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  AccordionToggle = () => {
    const accordionHeader = document.querySelector(".accordion__header")
    const accordionPanel = document.querySelector(".accordion__panel")

    this.setState({
      active: !this.state.active,
    });

    if(this.state.active) {
      accordionHeader.setAttribute("aria-expanded", 'false')
      accordionPanel.setAttribute("aria-hidden", 'true')
    } else {
      accordionHeader.setAttribute("aria-expanded", 'true')
      accordionPanel.setAttribute("aria-hidden", 'false')
    }
  }


  render() {
    const activeClass = this.state.active ? "" : "accordion--hidden";

    return (
      <div className='promotionCode'>
        <div className={`accordion ${activeClass}`}>
          <div
            className='accordion__header'
            id='accordion-button-1'
            aria-expanded="false"
            aria-controls="accordion-panel-1"
            onClick={this.AccordionToggle}>
            <span className='accordion__header__icon' />
            <h3> Promotion and Student Code </h3>
          </div>

          <div
            id="accordion-panel-1"
            className={"accordion__panel"}
            aria-hidden="true"
            role="article"
            tabIndex="-1"
            aria-labelledby='accordion-button-1'>
            <form action="#">
              <input type="text" placeholder='Enter your code' className='input-field'/>
              <button className='Button--default Button__submit'>Apply</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PromotionCode