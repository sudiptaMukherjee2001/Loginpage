import { styled } from "styled-components"

export const Flex = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-block:10px;
padding-inline:7px;
p{
    margin:0px;
    span{
color:#F78719;
    }
}
@media (min-width: 700px) and (max-width: 1023px) {
    flex-direction:row;
    justify-content:space-between;
}
@media(min-width: 1023px) {
    flex-direction:row;
    justify-content: center;
    column-gap:70px;
    width:100%;
}

`

export const Image = styled.img`
width:50%;
@media (min-width: 700px) and (max-width: 1023px) {
    width:30%;
}
@media(min-width: 1023px) {
    width: 23%;
}
`
export const FormContainer = styled.div`

display:flex;
flex-direction:column;
align-items:center;
width:100%;
border-radius: 12px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
padding-bottom:20px;
margin-top:10px;
h2{
    font-family: Poppins !important;    

}
${'' /* For tablet */}
@media (min-width: 700px) and (max-width: 1023px) {
    width:60%;
    margin-top:10px;
}
${'' /* For laptop */}
@media (min-width: 1023px) {
    width: 40%;
}
`
export const FormInput = styled.div`
display:flex;

flex-direction:column;
row-gap:10px;
align-items:center;
width:100%;

span{

width:90%;
text-align:start;
${'' /* margin-bottom:2px; */}

}
div{
  
    display:flex;
    align-items:center;
    position:relative;
        width:90%;
    input{
        width:100%;
    }
    .icons{
        position:absolute;
        right:0
    }
}
`
export const Input = styled.input`
width:90%;
border-radius: 8px;
border: 1px solid rgba(4, 7, 47, 0.40);
padding-block:10px


`
export const FormContainerFooter = styled.footer`
width:90%;
border-radius: 8px;

padding-block:10px;
display:flex;
justify-content: space-between;
font-size:16px;
.leftSection{
    h5{
       
        display:flex;
        align-items:center;
        margin: 0px;
        padding:0;
        color:#737B86;
        margin-bottom:16px;
        span{
            color:#F78719;
            text-decoration-line: underline;
        }
    }
}
.righttSection{
    color:#F78719;
}
@media (min-width: 320px) {
    font-size:14px
}
`

export const Button = styled.button`
background:#1575A7;
border-radius: 8px;
width:50%;
border:none;
margin-block:20px;
padding-block:10px;
color:#fff
`
