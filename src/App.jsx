
import { useState } from 'react'
import notificationData from './notifications.js'
import './App.css'

function Notification(props) {
  return (
    <div className="notification">
      {props.children}
      <button onClick={props.onClear}>Clear</button>
    </div>
  )
}

function App() {
  const [notifications, setNotifications] = useState(notificationData)

  function clearNotification(id) {
    const updatedNotifications = notifications.filter(
      notification => notification.id !== id
    )
    setNotifications(updatedNotifications)
  }

  function clearAll() {
    setNotifications([])
  }

  return (
    <main>
      <h1>Notifications</h1>
      <p>You have {notifications.length} notifications</p>

      <button onClick={clearAll}>Clear All</button>

      {notifications.map(notification => (
        <Notification
          key={notification.id}
          onClear={() => clearNotification(notification.id)}
        >
          <h2>{notification.name}</h2>
          <p>{notification.message}</p>
        </Notification>
      ))}
    </main>
  )
}

export default App
