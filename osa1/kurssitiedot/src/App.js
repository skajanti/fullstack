const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name}, {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.content.parts.map(item => (
        <Part part={item}/>
      ))}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.total.parts.forEach(element => {
    sum += element.exercises
  });
  return (
    <div>
      <p>Number of excercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content content={course}/>
      <Total total={course} />
    </div>
  )
}

export default App