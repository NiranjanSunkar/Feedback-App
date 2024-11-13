import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="main-heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="btn"
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

export default Feedback
