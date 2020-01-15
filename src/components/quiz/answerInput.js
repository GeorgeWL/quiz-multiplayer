import React from "react"
import PropTypes from "prop-types"
// import "./StylesClass.scss"
const QuizAnswerInput = ({ onChange, value, type }) => {
  const handleChange = evt => {
    onChange(evt.target.value)
  }
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className="StylesClass"
    ></input>
  )
}
QuizAnswerInput.defaultProps = {
  type: "text",
}
QuizAnswerInput.propTypes = {
  type: PropTypes.oneOf("text", "number"),
}
export default QuizAnswerInput
