import React from 'react'
import SignIn from '../../../containers/pages/SignInPage/SignIn'

console.log("components/pages/SignInPage/index 1")
console.log(SignIn)
console.log("components/pages/SignInPage/index 2")

const SignInPage = () => {
  return (
    <div>
      <h>
        Sign in Page
      </h>
      <br/>
      <SignIn/>
    </div>
  )
}

export default SignInPage
