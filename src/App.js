import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RulesButton, CloseButton, PlayAgainButton} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    result: false,
    matchedObject: [],
    randomObject: [],
    winLoseDraw: '',
  }

  onClickFunction = clickedId => {
    // console.log(clickedId)
    const matchedObject = choicesList.filter(
      eachItem => eachItem.id === clickedId,
    )
    const randomIndexNo = Math.floor(Math.random() * 3)
    const randomId = choicesList[randomIndexNo].id
    const randomObject = choicesList.filter(
      eachItem => eachItem.id === randomId,
    )
    this.setState({result: true, matchedObject, randomObject})
    // console.log(randomId)

    if (matchedObject[0].id === randomObject[0].id) {
      this.setState({winLoseDraw: 'IT IS DRAW'})
    } else if (
      (matchedObject[0].id === 'ROCK' && randomObject[0].id === 'SCISSORS') ||
      (matchedObject[0].id === 'SCISSORS' && randomObject[0].id === 'PAPER') ||
      (matchedObject[0].id === 'PAPER' && randomObject[0].id === 'ROCK')
    ) {
      //   console.log('add 1')
      this.setState(prevState => ({
        score: prevState.score + 1,
        winLoseDraw: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        winLoseDraw: 'YOU LOSE',
      }))
    }
  }

  resultPage = () => {
    // console.log('resultPage')
    const {randomObject, matchedObject, winLoseDraw} = this.state
    // console.log(randomObject, matchedObject, winLoseDraw)

    const changeResult = () => {
      this.setState({result: false})
    }

    return (
      <div className="css-result-div">
        <div className="css-you-opponent-div">
          <div className="css-you-score-div">
            <p>YOU</p>
            <img
              src={matchedObject[0].imageUrl}
              alt="your choice"
              className="css-you-image"
            />
          </div>
          <div className="css-opponent-score-div">
            <p>OPPONENT</p>
            <img
              src={randomObject[0].imageUrl}
              alt="opponent choice"
              className="css-opponent-image"
            />
          </div>
        </div>
        <div className="css-button-playagain-div">
          <p>{winLoseDraw}</p>
          <PlayAgainButton type="button" onClick={changeResult}>
            PLAY AGAIN
          </PlayAgainButton>
        </div>
      </div>
    )
  }

  render() {
    const {score, result} = this.state

    return (
      <div className="css-bg-container">
        <div className="css-score-div">
          <div>
            <h1>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </h1>
          </div>
          <div className="css-score-display-div">
            <p>Score</p>
            <h1>{score}</h1>
          </div>
        </div>
        <div className="css-result-list-div">
          {result ? (
            this.resultPage()
          ) : (
            <ul className="css-unordered-list">
              {choicesList.map(eachItem => (
                <li key={eachItem.id} className="css-list">
                  <button
                    type="button"
                    className="css-button-list"
                    onClick={() => this.onClickFunction(eachItem.id)}
                    data-testid={`${eachItem.id.toLowerCase()}Button`}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.id}
                      className="css-list-image"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <div className="css-rules-button-div">
                <RulesButton type="button">Rules</RulesButton>
              </div>
            }
          >
            {close => (
              <>
                <div className="css-popup-image-button">
                  <div className="css-trigger-button-div">
                    <CloseButton type="button" onClick={() => close()}>
                      Close
                    </CloseButton>
                  </div>
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                      className="css-rules-image"
                    />
                  </div>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
