import React from 'react'
import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import background from '../../assets/Images/background.png'
import '../../assets/Styles/login-page.scss'
import frame from '../../assets/Images/frame.svg'

const LoginPage = () => {
  return (
    <div className="login-main">
      <div className="login-background"></div>
      <img className="frame" src={frame} />
      <img className="background" src={background} />
      <LoginForm />
      <h1 className="login-title">Episodic series of digital audio. </h1>
      <Logo />
    </div>
  )
}

export default LoginPage
