import './index.css'
import {useState} from 'react'

const PasswordManager = () => {
  const [updatedItems, setUpdatedItems] = useState()

  const [searchText, setSearchText] = useState()
  const handletext = e => {
    const query = e.target.value
    setSearchText(query)

    if (query === '') {
      setUpdatedItems(updatedItems)
    } else {
      // Filter the items based on the search query

      const filteredItems = updatedItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
      setUpdatedItems(filteredItems)
    }
  }

  const handleDelete = item => {
    const updatedItemss = updatedItems.filter(each => each.id !== item.id)
    setUpdatedItems(updatedItemss)
  }

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="appLogo"
      />
      <div className="container1">
        <div className="containerA">
          <p className="inputHeading">Add New Password</p>
          <input type="text" placeholder="Enter Website" />
          <input type="text" placeholder="Enter UserName" />
          <input type="text" placeholder="Enter Password" />
          <button>Add</button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="app logo"
            className="contaner1Pic"
          />
        </div>
      </div>
      <div className="container2">
        <div className="containerB">
          <div className="containerC">
            <p className="inputHeading">Your passwords</p>
            <p>count</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input type="search" placeholder="Search" className="input-box" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default PasswordManager
