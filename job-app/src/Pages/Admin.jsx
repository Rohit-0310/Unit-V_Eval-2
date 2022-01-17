import { Buttton } from "../Style/Button";
import { Input } from "../Style/Input";
import { H2 } from "../Style/h";
import { AdminDiv } from "../Style/Div";


export const Admin = () =>{

    return (
        <AdminDiv>
        <Input
            name="Company name"
            type="text"
            placeholder="Enter Company Name"
        />
        <Input
            name="Job title"
            type="text"
            placeholder="Enter Job Title"
        />

        <Input
            name="Job Discription"
            type="text"
            placeholder="Enter Job Discription"
        />
        <Input
            name="Location"
            type="text"
            placeholder="Enter Location"
        />
        <Input
            name="Job Type"
            type="text"
            placeholder="Job Type"
        />
        <Buttton>Submit Job</Buttton>
        </AdminDiv>
    )
}