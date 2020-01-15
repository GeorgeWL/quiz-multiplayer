import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import QuizQuestion from "../components/quiz/question"
import QuizContainer from "../components/quiz/container"
import QuizAnswerInput from "../components/quiz/answerInput"

const IndexPage = () => {
  const [userName, setUserName] = useState("")
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <QuizContainer>
        <QuizQuestion>What shall we call you?</QuizQuestion>
        <QuizAnswerInput onChange={setUserName} value={userName} />
      </QuizContainer>
      {userName && <Link to="/page-2/">Next Question</Link>}
    </Layout>
  )
}

export default IndexPage
