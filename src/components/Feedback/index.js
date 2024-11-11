import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="main-heading">
            How satisfied are you with our <br /> customer support performance?
          </h1>
          <ul className="emoji-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="btn"
                  type="button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-name"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

renderThankYouScreen = () => {
  const {resources} = this.props
  const {loveEmojiUrl} = resources

  return (
    <div className="bg-card">
    <img src={loveEmojiUrl} alt="love emoji" className="love-symbol"/>
    <h1 className="thankyou-heading">Thank You!</h1>
    <p className="description">We will use Your Feedback to improve our customer support performance. </p>
    </div>
  )
}

render() {
  const {isFeedbackSelected} = this.state

  return (
    {isFeedbackSelected ? this.renderThankYouScreen(): this.renderFeedbackQuestion()}
  )
}

export default Feedback
