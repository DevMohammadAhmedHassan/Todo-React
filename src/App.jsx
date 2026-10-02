import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <main>
      <div class="container">
        <h1>Make Your TODO List!</h1>
        <div class="pTag">
          <p>Add your items here 🖊️</p>
        </div>

        <div class="input">
          <input type="text" placeholder="your item" />
          <button>submit</button>
        </div>

        {/* Your Tasks */}
        <div class="items">
          <h4>Your Tasks</h4>
          <ul>
            {/* <li>
              <p>React</p>
              <div>
                <button>
                  <i class="fa-solid fa-check" style="color: rgb(0, 209, 70)"></i>
                </button>
                <button>
                  <i
                    class="fa-regular fa-trash-can"
                    style="color: rgb(211, 0, 0)"
                  ></i>
                </button>
              </div>
            </li> */}
          </ul>
        </div>

        {/* Clear All Button */}
        <button class="clearAll">Clear All</button>
      </div>

      <p class="name">Made by DevMohammadAhmedHassan</p>
    </main>
    </div>
  )
}

export default App
