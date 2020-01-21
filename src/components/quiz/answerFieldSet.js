import React from "react"
import PropTypes from "prop-types"
import QuizAnswer from "./answerRadio"
// import "./StylesClass.scss"
const QuizAnswers = ({ answers, id, selected, disabled, onChange }) => (
  <fieldset>
    <ul>
      {answers.map((answer, i) => (
        <QuizAnswer
          key={i + answer.id}
          id={id}
          value={answer.id}
          selected={selected === answer.id}
          onChange={onChange}
          disabled={disabled}
        >
          {answer.label}
        </QuizAnswer>
      ))}
    </ul>
  </fieldset>
)
QuizAnswers.defaultProps = { answers: [] }
QuizAnswers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.node).isRequired,
}
export default QuizAnswers
