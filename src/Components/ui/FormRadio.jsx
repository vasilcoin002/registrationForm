import React, {useContext, useEffect} from 'react';
import Context from "../../Context.js";

const FormRadio = ({formItem}) => {
	const value = useContext(Context)
	const changeUserData = (e) => {
		const newValue = {}
		newValue[formItem.keyName] = e.target.value
		value.setAllUserData({...value.allUserData, ...newValue})
		formItem.obligatoryToFill && value.setObligatoryUserData({...value.obligatoryUserData, ...newValue})
	}
	return (
		<div>
			<h4>{formItem.title}</h4>
			{
				formItem.options.map(
					option => <div>
						{option}
						<input type="radio" name={formItem.keyName} value={option} onChange={changeUserData}/>
					</div>
				)
			}
		</div>
	);
};

export default FormRadio;