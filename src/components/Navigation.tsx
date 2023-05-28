import burgerIcon from "../assets/images/hamburger.svg"
import logo from '../assets/images/logo.svg'

const Navigation = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} alt="logo" />
      <img  src={burgerIcon} alt="burger" />
    </div>
  )
}
export default Navigation