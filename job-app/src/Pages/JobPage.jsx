import { JobDiv } from "../Style/Div"
import { H4 } from "../Style/h"

export const JobPage = () =>{
    return (
        <div>
            <h1>Job List</h1>
            <JobDiv>
                <H4>Company name</H4>
                <H4>Job Title</H4>
                <H4>Job Discription</H4>
                <H4>Jov Location</H4>
                <H4>Job Type</H4>
            </JobDiv>

            <JobDiv>
                <H4>Masai School</H4>
                <H4>IA</H4>
                <H4>Instructional Associate</H4>
                <H4>Bengaluru, Karnataka</H4>
                <H4>Work From Home</H4>
            </JobDiv>

            <JobDiv>
                <H4>TCS</H4>
                <H4>software engineer</H4>
                <H4>Software engineers</H4>
                <H4>Bengaluru, Karnataka</H4>
                <H4>Work From Home</H4>
            </JobDiv>
            
            <JobDiv>
                <H4>Masai School</H4>
                <H4>IA</H4>
                <H4>Instructional Associate</H4>
                <H4>Patna, Bihar</H4>
                <H4>Work From Home</H4>
            </JobDiv>

            <JobDiv>
                <H4>TCS</H4>
                <H4>Computer Engineer</H4>
                <H4>Computer Engineer</H4>
                <H4>Delhi, India</H4>
                <H4>Work From Office</H4>
            </JobDiv>
        </div>
    )
}