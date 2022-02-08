import ProfileCard from './ProfileCard'
import { useState } from 'react'

export default function Main() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => setIsClicked(true)

  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {isClicked ? null : <ProfileCard onClick={handleClick} />}
    </main>
  )
}
