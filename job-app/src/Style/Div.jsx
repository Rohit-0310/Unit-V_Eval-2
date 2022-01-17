import styled from "styled-components";

export const Div = styled.div`
   display: flex;
   align-items:center;
   margin-left:10%;

`

export const AdminDiv = styled.div`
   display: grid;
   align-items:center;
   width: 500px;
   text-align: center;
   margin-left:30%;

`
export const JobDiv = styled.div`
   display: grid;
   grid-template-columns: repeat(5, 200px);
   align-items:center;
   /* width: 500px; */
   text-align: center;
   margin-left:20%;

`
// style={{ display: 'flex', marginLeft:"10%", width: '100%'}}