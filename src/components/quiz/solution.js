import React from "react"
import PropTypes from "prop-types"
// import "./StylesClass.scss"
import classNames from "classnames"
const QuizSolution = ({ correctAnswer, selected }) => {
  const correct = selected.id === correctAnswer.id
  return (
    <p className={classNames("StylesClass", correct ? "correct" : "incorrect")}>
      {correct ? (
        <>✔ You got it right!</>
      ) : (
        <>❌ Wrong! The correct answer was {correctAnswer.label}</>
      )}
    </p>
  )
}
QuizSolution.defaultProps = {}
QuizSolution.propTypes = {
  correctAnswer: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.node,
  }),
}
export default QuizSolution
