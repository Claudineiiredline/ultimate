import styled from "styled-components";

export const DownloadsContainer = styled.div`
 
h1 {
   font-size: 35px;
   color: #FF9300;
}

 li {
    color: #FFF;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
 }

 div {
    width: 100%;
    height: 100px;
 }

 ul {
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;
 }

 p {
   color: #FF9300;

 }


`

export const BtnDownload = styled.button`

display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 70px;
background-color: #FFFFFF;
border: none;
border-radius: 6px;

&:hover{
   background-color: #BFD8FF;
}

a {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 0.5rem;
   width: 200px;
   color: #1E2126;
}

`
