// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    inLightMode: false,
  }

  getMode = () => {
    this.setState(prevState => ({inLightMode: !prevState.inLightMode}))
  }

  render() {
    const {inLightMode} = this.state
    const containerClass = inLightMode ? 'light-mode' : 'dark-mode'
    const headingClass = inLightMode ? 'light-heading' : 'dark-heading'
    const buttonText = inLightMode ? 'Dark Mode' : 'Light-mode'

    return (
      <div className={containerClass}>
        <h1 className={headingClass}>Click to change Mode</h1>
        <button onClick={this.getMode} type="submit">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
