import React from "react"
import PropTypes from "prop-types"
// import "./StylesClass.scss"
const QuizAnswer = ({ children, id, selected, disabled, value, onChange }) => {
  const handleChange = () => {
    onChange(value)
  }
  return (
    <li>
      <input
        type="radio"
        id={id}
        value={value}
        checked={selected}
        onChange={handleChange}
        disabled={disabled}
        className="StylesClass"
      />
      <label htmlFor={value}>{children}</label>
    </li>
  )
}
QuizAnswer.defaultProps = { selected: false }
QuizAnswer.propTypes = {
  label: PropTypes.node,
  selected: PropTypes.bool,
}
export default QuizAnswer
