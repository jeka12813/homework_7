import { useState } from "react"

import { MyButton } from "../UI/MyButton"
import { MyInput } from "../UI/MyInput"

export function Form({ addPost }) {
  const [title, setMessage] = useState("")

  const [validationErrorMessage, setValidationErrorMessage] = useState("true")

  const onSubmitPost = (event) => {
    event.preventDefault()
    if (validationErrorMessage === "true" && title !== "") {
      const post = {
        id: Date.now(),

        title: title,
      }

      addPost(post)

      setMessage("")
    }
  }

  const onChangeMessage = (event) => {
    const { value } = event.target
    if (value.length >= 21 || value.length === 0) {
      setValidationErrorMessage("false")
    } else if (value.length < 21) {
      setValidationErrorMessage("true")
    }
    setMessage(value)
  }

  return (
    <form>
      <h3>Создать пост</h3>
      <MyInput
        type="text"
        id="message"
        placeholder="Введите текст..."
        value={title}
        onChange={onChangeMessage}
      />
      <MyButton onClick={onSubmitPost} type="submit">
        Добавить
      </MyButton>
      <span className={validationErrorMessage}>
        Колл-во символов от 1 до 20.
      </span>
    </form>
  )
}
