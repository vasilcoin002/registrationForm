import React, {useContext, useEffect} from 'react';
import Context from "../../Context.js";

const FormPassword = ({formItem}) => {
	const value = useContext(Context)
	const changeUserData = (e) => {
		const newValue = {}
		newValue[formItem.keyName] = e.target.value
		value.setAllUserData({...value.allUserData, ...newValue})
		formItem.obligatoryToFill && value.setObligatoryUserData({...value.obligatoryUserData, ...newValue})
	}
	return (
		<div className={"form-option"}>
			<h4 className={"form-option__title"}>{formItem.title}</h4>
			<input type="password" placeholder={formItem.options[0]} onChange={changeUserData}/>
		</div>
	);
};

export default FormPassword;