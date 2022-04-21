import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { MyButton } from "../UI/MyButton"
import style from "./Post.module.css"

export function Post({ post, onClickDelete, showChekedMessage }) {
  const [checked, setChecked] = useState(false)
  const [textMessage, setTextMessage] = useState(post.title)

  const changeCheckbox = () => {
    setChecked(!checked)
    showMessage()
  }

  const showMessage = () => {
    if (checked) {
      setTextMessage(post.title)
    } else {
      setTextMessage("")
    }
    showChekedMessage(textMessage)
  }

  const rootClasses = [style.post]
  if (checked) {
    rootClasses.push(style.checkedPost)
  }

  return (
    <div key={post.id} className={rootClasses.join(" ")}>
      <input
        className={style.inputPost}
        type="checkbox"
        id={post.id}
        checked={checked}
        onChange={changeCheckbox}
      />

      <p>{post.title}</p>

      <Link
        style={{ textDecoration: "none", color: "red" }}
        to={`/posts/${post.id}`}
      >
        Подробнее...
      </Link>

      <MyButton id={post.id} onClick={() => onClickDelete(post.id)}>
        Удалить
      </MyButton>
    </div>
  )
}
