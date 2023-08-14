import React, {useContext, useEffect} from 'react';
import Context from "../../Context.js";

const FormCheckbox = ({formItem}) => {
	const value = useContext(Context)
	const changeUserData = (e) => {
		const newValue = {}
		newValue[formItem.keyName] = e.target.checked
		value.setAllUserData({...value.allUserData, ...newValue})
		formItem.obligatoryToFill && value.setObligatoryUserData({...value.obligatoryUserData, ...newValue})
	}
	return (
		<div className={"form-option form-option-checkbox"}>
			<input type="checkbox" name={formItem.keyName} onChange={changeUserData}/>
			<h4 className={"form-option__title"}>{formItem.title}</h4>
		</div>
	);
};

export default FormCheckbox;