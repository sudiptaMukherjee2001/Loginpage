import React from 'react'
import { Button, Flex, FormContainer, FormContainerFooter, FormInput, Image, Input } from './Styled/Flex.styled'
import img1 from "./images/image1.png"
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";
function Maincontent() {
    return (
        <Flex>

            <Image src={img1} alt="image not present" srcset="" />
            <FormContainer>

                <h2>Login</h2>
                <FormInput>
                    <span>Login ID</span>
                    <Input type="text" placeholder='Enter Login ID' />
                    <span>Password</span>
                    <div>
                        <Input type="password" placeholder='Enter Your password' />
                        <AiOutlineEyeInvisible className='icons' /> {/* Insert the EyeInvisible icon */}
                    </div>
                </FormInput>
                <FormContainerFooter>
                    <div className='leftSection'>
                        <h5>

                            <BiCheckbox />Remember Me
                        </h5>
                        <h5>

                            <BiCheckbox />Agree to
                            <span>Terms & Conditions</span>
                        </h5>
                    </div>
                    <div className='righttSection'>
                        Change Password
                    </div>

                </FormContainerFooter>
                <Button>
                    Login
                </Button>
                <p>
                    Don’t have an account?
                    <span>
                        Register Here
                    </span>
                </p>
            </FormContainer>
        </Flex>
    )
}

export default Maincontent