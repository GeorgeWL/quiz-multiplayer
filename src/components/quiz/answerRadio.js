import React from "react"
import PropTypes from "prop-types"
// import "./StylesClass.scss"
const QuizAnswer = ({ label, selected }) => (
  <input type="radio" selected={selected} className="StylesClass">
    {label}
  </input>
)
QuizAnswer.defaultProps = { selected: false }
QuizAnswer.propTypes = {
  label: PropTypes.node,
  selected: PropTypes.bool,
}
export default QuizAnswer
