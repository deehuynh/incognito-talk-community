import WritingBar from '../components/writing-bar'
import WritingBarContainer from '../components/writing-bar__container'
import WritingBarInput from '../components/writing-bar__input'

export default function App () {
  return (
    <section className="app">
      <WritingBar>
        <WritingBarContainer>
          <WritingBarInput />
        </WritingBarContainer>
      </WritingBar>
    </section>
  )
}