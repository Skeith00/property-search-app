// auth.context.js
import { createContext, useContext } from 'react';

const RegisterContext = createContext('register')

export function RegisterProvider({ children }) {

    const [formData, setFormData] = useState({
        name: '',
        surename: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const register = () => {
    }

    return (
        <RegisterContext.Provider value={{ formData, setFormData, step, nextStep, prevStep }}>
            {children}
        </RegisterContext.Provider>
    )
}