function WritingBarInput (props) {
  return (
    <input
      className="writing-bar__input"
      type='text' name='message'
      placeholder='Release your emotion via a message...'
      defaultValue=''
      spellCheck="false"
    />
  )
}

export default WritingBarInput;