import React, {useContext, useEffect} from 'react';
import Context from "../../Context.js";

const FormSelect = ({formItem}) => {
	const value = useContext(Context)
	const changeUserData = (e) => {
		const newValue = {}
		newValue[formItem.keyName] = e.target.value === "None" ? null : e.target.value
		value.setAllUserData({...value.allUserData, ...newValue})
		formItem.obligatoryToFill && value.setObligatoryUserData({...value.obligatoryUserData, ...newValue})
	}
	return (
		<div className={"form-option"}>
			<h4 className={"form-option__title"}>{formItem.title}</h4>
			<select onChange={changeUserData}>
				<option value={null}>None</option>
				{
					formItem.options.map(
						(option, index) => <option key={`view${value.viewNumber}-${formItem.keyName}-${index}`}
																			 value={option}>{option}</option>
					)
				}
			</select>
		</div>
	);
};

export default FormSelect;