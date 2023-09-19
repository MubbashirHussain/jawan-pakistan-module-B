import { CS_Input } from "../../Components";
import React from "react"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FirebaseSignup } from "../../config/Firebase/firebaseMethords";
import { useNavigate } from "react-router-dom";


function Signup() {
    const [inpVal, setinpVal] = React.useState<any>({ Email: "", Password: "" })
    const [FormError, setFormError] = React.useState<null | string>(null)
    const [passwordError, setPasswordError] = React.useState<boolean>(false)
    const [EmailError, setEmailError] = React.useState<boolean>(false)
    let Navigate = useNavigate()
    const inputEvent = (e: any) => {
        if (e.target.value.length > 0 && e.target.name === "Password") setPasswordError(false)
        if (e.target.value.length > 0 && e.target.name === "Email") setEmailError(false)
        setinpVal({ ...inpVal, [e.target.name]: e.target.value })
    }
    let clickHandler = () => {
        if (inpVal.Email === "") { setEmailError(true) }
        else if (!inpVal.Email.includes("@")) { setEmailError(true) }
        else if (inpVal.Email.includes(" ")) { setEmailError(true) }
        else if (inpVal.Password === "") { setPasswordError(true) }
        else FirebaseSignup(inpVal).then((res) => {
            console.log(res)
            alert("You'er Sign up Successfully")
            Navigate("/login")
            setinpVal({ Email: "", Password: "" });
        }).catch((er) => {
            console.log(er)
            setEmailError(true);
            setPasswordError(true);
            setFormError(er.code.split("/")[1].split("-").join(" "))
        })
    }
    return (
        <>
            <div className="bg-gradient-radial from-transparent from-0% via-gray-50 via-50% to-transparent to-100% min-h-screen flex items-center  justify-center">
                <Container maxWidth="sm" className="flex rounded flex-column drop-shadow-md p-5 py-7 bg-white justify-center items-between" >
                    <div className="">

                        <h1 className="text-5xl my-3 text-center">Signup</h1>
                        <CS_Input
                            Required={true}
                            sx={{ margin: "20px 0" }}
                            label="Email"
                            Name="Email"
                            Error={EmailError}
                            Margin="dense" type="email" fullWidth={true}
                            onChangeEvt={(e: any) => inputEvent(e)}
                        />

                        <CS_Input
                            Required={true}
                            sx={{ margin: "20px 0" }}
                            ClassName="my-3"
                            Margin="dense"
                            label="Password"
                            Name="Password"
                            type="password"
                            fullWidth={true}
                            Error={passwordError}
                            onChangeEvt={(e: any) => inputEvent(e)}
                        />
                        <div>
                            {FormError && <Typography variant="body2" className="text-center capitalize my-5" sx={{ my: 3 }} color="error">{FormError}</Typography>}
                            <Button variant="contained" onClick={clickHandler}>Sign up</Button>
                        </div>
                    </div>
                </Container>

            </div>

        </>
    )
}
export default Signup;