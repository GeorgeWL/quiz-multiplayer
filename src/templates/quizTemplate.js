import { graphql, Link } from "gatsby"
import React, { useState } from "react"
import QuizContainer from "../components/quiz/container"
import QuizQuestion from "../components/quiz/question"
import QuizAnswers from "../components/quiz/answerFieldSet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuizSolution from "../components/quiz/solution"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const mapAnswers = frontmatter.answers
    ? frontmatter.answers.map((answer, i) => {
        return {
          id: i,
          label: answer,
        }
      })
    : []
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const handleAnswerChange = id => {
    setCurrentAnswer(id)
  }
  return (
    <Layout>
      <SEO title={`Question ${frontmatter.questionNumber}`} />
      <QuizContainer>
        <h2>Question {frontmatter.questionNumber}</h2>
        <QuizQuestion>{frontmatter.question}</QuizQuestion>
        {html && (
          <div
            className="quiz-extra-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
        {frontmatter.answers && (
          <QuizAnswers
            answers={mapAnswers}
            onChange={handleAnswerChange}
            selected={currentAnswer}
            id={`question${frontmatter.questionNumber}`}
            disabled={answered}
          />
        )}
        {answered && (
          <QuizSolution
            selected={mapAnswers[currentAnswer]}
            correctAnswer={mapAnswers[frontmatter.correctAnswer]}
          />
        )}
        <button onClick={() => setAnswered(true)}>Submit Answer</button>
        {answered && (
          <Link to={`/quiz/${frontmatter.questionNumber + 1}`}>
            Next Question
          </Link>
        )}
      </QuizContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        question
        questionNumber
        answers
        correctAnswer
      }
    }
  }
`
