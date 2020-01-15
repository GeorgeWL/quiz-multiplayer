import React from "react"
import PropTypes from "prop-types"

// import "./StylesClass.scss"
const QuizContainer = ({ children }) => (
  <section className="StylesClass">{children}</section>
)
QuizContainer.defaultProps = {}
QuizContainer.propTypes = {}
export default QuizContainer
