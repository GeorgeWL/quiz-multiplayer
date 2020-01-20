import React from "react"
import PropTypes from "prop-types"
// import "./StylesClass.scss"
const QuizAnswer = ({ children, id, selected, onChange }) => {
  const handleChange = evt => {
    const { value } = evt.target
    onChange(value)
  }
  return (
    <li>
      <input
        type="radio"
        name={id}
        value={selected}
        onChange={handleChange}
        className="StylesClass"
      />
      {children}
    </li>
  )
}
QuizAnswer.defaultProps = { selected: false }
QuizAnswer.propTypes = {
  label: PropTypes.node,
  selected: PropTypes.bool,
}
export default QuizAnswer
