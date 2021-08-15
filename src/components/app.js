import WritingBar from '../components/writing-bar'
import WritingBarContainer from '../components/writing-bar__container'
import WritingBarInput from '../components/writing-bar__input'
import WritingBarSendButton from './writing-bar__send-button'

export default function App () {
  return (
    <section className="app">
      <WritingBar>
        <WritingBarContainer>
          <WritingBarInput />
          <WritingBarSendButton />
        </WritingBarContainer>
      </WritingBar>
    </section>
  )
}