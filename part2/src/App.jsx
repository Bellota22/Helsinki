import Course from "./components/Course"
import {courses} from "./constants"

const App = () => {
  console.log("🚀 ~ file: App.jsx:3 ~ courses:", courses)
  
  return <Course courses={courses} />
}

export default App