import React from "react"
import Projects from "../../components/project-page/project.container.js"
import { simpleTodoApp_withReactHooks } from "../../components/project-page/project-information"
import SEO from "../../components/common/seo"

const SimpleTodoApp_withReact = () => {
  return (
    <>
      <SEO
        title="React Todo App"
        description="React todo app web application's page"
      />
      <Projects details={simpleTodoApp_withReactHooks} />
    </>
  )
}

export default SimpleTodoApp_withReact
