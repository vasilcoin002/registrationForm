import {useEffect, useState} from 'react'
import './App.css'
import views from './Views.json'
import Context from "./Context.js";
import RegistrationForm from "./Components/RegistrationForm.jsx";

function App() {
	const [viewNumber, setViewNumber] = useState(1)
	const [allUserData, setAllUserData] = useState({})
	const [obligatoryUserData, setObligatoryUserData] = useState({})
	const [canContinue, setCanContinue] = useState(false)
	let currentView = views[`View-${viewNumber}`]
	const checkObligatoryUserData = () => {
		let haveToContinueLoop = true
		// checking out all obligatory user data of this view for filled
		currentView.items.forEach(
			item => {
				let option = item.keyName
				if (haveToContinueLoop && !obligatoryUserData[option] && item.obligatoryToFill) {
					haveToContinueLoop = false
					setCanContinue(false)
				}
			}
		)
		// if all the obligatory fields are filled
		if (haveToContinueLoop) {
			setCanContinue(true)
		}
	}
	const value = {
		views,
		viewNumber,
		setViewNumber,
		allUserData,
		setAllUserData,
		obligatoryUserData,
		setObligatoryUserData,
		currentView,
		canContinue,
		setCanContinue,
		checkObligatoryUserData,
	}
	
  return (
    <Context.Provider value={value}>
    	<div>
				<RegistrationForm/>
			</div>
    </Context.Provider>
  )
}

export default App
