import './index.css'
import {useState} from 'react'

const PasswordManager = () => {
  //   const [updatedItems, setUpdatedItems] = useState()

  const [searchText, setSearchText] = useState()
  const [websiteText, setWebsitetext] = useState()
  const [usernameText, setUsernametext] = useState()
  const [passwordText, setpasswordtext] = useState()
  const [idCounter, setIdCounter] = useState(1)

  const [credentials, setCredentials] = useState([])

  const handleAddButton = e => {
    e.preventDefault()
    // console.log('websiteText', websiteText)
    if (usernameText && passwordText && websiteText) {
      // Create a new object with the entered credentials
      const newCredential = {
        id: idCounter,
        usernameText,
        passwordText,
        websiteText,
      }

      // Update the state by adding the new credential to the array
      setCredentials([...credentials, newCredential])
      setIdCounter(idCounter + 1)
      // Clear the input fields
      setWebsitetext('')
      setUsernametext('')
      setpasswordtext('')
    } else {
      alert('Please fill in all fields')
    }
  }

  console.log('credentials', credentials)

  const handletext = e => {
    const query = e.target.value
    setSearchText(query)
    if (query === '') {
      setCredentials(credentials)
    } else {
      // Filter the items based on the search query

      const filteredItems = credentials.filter(item =>
        item.usernameText.toLowerCase().includes(query.toLowerCase()),
      )
      setCredentials(filteredItems)
    }
  }

  const handleDelete = item => {
    const updatedItemss = credentials.filter(each => each.id !== item.id)
    setCredentials(updatedItemss)
  }

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
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
          <h1 className="inputHeading">Add New Password</h1>
          <form onSubmit={handleAddButton}>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="textpics"
              />
              <input
                type="text"
                placeholder="Enter Website"
                value={websiteText}
                onChange={e => setWebsitetext(e.target.value)}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="textpics"
              />
              <input
                type="text"
                placeholder="Enter UserName"
                value={usernameText}
                onChange={e => setUsernametext(e.target.value)}
              />
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="textpics"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={passwordText}
                onChange={e => setpasswordtext(e.target.value)}
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="contaner1Pic"
          />
        </div>
      </div>
      <div className="container2">
        <div className="containerB">
          <div className="containerC">
            <h1 className="inputHeading">Your passwords</h1>
            <p className="count">{credentials?.length}</p>
          </div>

          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              placeholder="Search"
              className="input-box"
              onChange={e => handletext(e)}
            />
          </div>
        </div>
        <hr />
        <label className="checkcontainer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Show passwords
        </label>
        {credentials?.length > 0 ? (
          <ul className="kkok">
            {credentials.map((cred, index) => (
              <li className="countcred">
                <div className="iconurl">{cred.websiteText[0]}</div>
                <div>
                  <p>{cred.websiteText}</p>
                  <p>Username: {cred.usernameText}</p>
                  <p>Password: </p>
                  {isChecked ? (
                    <p> {cred.passwordText}</p>
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      alt="stars"
                      className="search"
                    />
                  )}
                </div>
                <button onClick={() => handleDelete(cred)}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                    alt="delete"
                    className="search"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="container2b">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="contaner2Pic"
            />
            <p>No Passwords</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PasswordManager
