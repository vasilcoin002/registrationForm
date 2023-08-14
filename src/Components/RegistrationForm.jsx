import React, {useContext, useEffect} from 'react';
import Context from "../Context.js";
import FormInput from "./ui/FormInput.jsx";
import FormSelect from "./ui/FormSelect.jsx";
import FormCheckbox from "./ui/FormCheckbox.jsx";
import FormRadio from "./ui/FormRadio.jsx";
import FormPassword from "./ui/FormPassword.jsx";
const RegistrationForm = () => {
	const value = useContext(Context)
	useEffect(value.checkObligatoryUserData, [value.allUserData])
	return (
		<div className={'form'}>
			<div className={"form__header"}></div>
			<h2 className={"form__title"}>{value.currentView.title}</h2>
			<div className={"form__options"}>
				{
					value.currentView.items.map(
						item =>
							<>{
								{
									input: <FormInput formItem={item} key={`view${value.viewNumber}-${item.id}`}/>,
									password: <FormPassword formItem={item} key={`view${value.viewNumber}-${item.id}`}/>,
									select: <FormSelect formItem={item} key={`view${value.viewNumber}-${item.id}`}/>,
									checkbox: <FormCheckbox formItem={item} key={`view${value.viewNumber}-${item.id}`}/>,
									// radio: <FormRadio formItem={item}/>,
								}[item.optionType]
							}</>
					)
				}
			</div>
			<input className={"form__continue-button"} type="button" disabled={!value.canContinue} value="Continue"
						 onClick={() => {
							 value.setViewNumber(value.viewNumber + 1)
							 value.setCanContinue(false)
						 }
			}/>
		</div>
	);
};

export default RegistrationForm;