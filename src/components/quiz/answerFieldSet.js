import React from "react"
import PropTypes from "prop-types"
import QuizAnswer from "./answerRadio"
// import "./StylesClass.scss"
const QuizAnswers = ({ answers, onChange }) => (
  <fieldset>
    {answers.map((answer, i) => (
      <QuizAnswer
        key={i + answer.id}
        selected={answer.selected}
        onChange={onChange}
      >
        {answer.label}
      </QuizAnswer>
    ))}
  </fieldset>
)
QuizAnswers.defaultProps = {}
QuizAnswers.propTypes = {}
export default QuizAnswers
