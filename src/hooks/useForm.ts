import { initialStates } from '@/models/interfaces'
import React, { useEffect, useState } from 'react'

const useForm = (initialState:any, validate: any, fn: any) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState<initialStates>({})
  const [submitForm, setSubmitForm] = useState(false)

  useEffect(() => {
    if(submitForm){
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors){
          fn();
      }
      setSubmitForm(false)
    }
  }, [errors])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | any)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const errorsValidation = validate(values)
    setErrors(errorsValidation)
    setSubmitForm(true)
      
  }
  return {values,errors,submitForm, handleChange, handleSubmit}
}

export default useForm