import { graphql } from "gatsby"
import React, { useState } from "react"
import QuizContainer from "../components/quiz/container"
import QuizQuestion from "../components/quiz/question"
import QuizAnswers from "../components/quiz/answerFieldSet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import shortid from "shortid"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const mapAnswers = frontmatter.answers
    ? frontmatter.answers.map(answer => {
        return {
          id: shortid.generate(),
          label: answer,
        }
      })
    : []
  const [currentAnswer, setCurrentAnswer] = useState(null)
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
          />
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
