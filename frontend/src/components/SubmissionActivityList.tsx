import { useRecoilValue } from "recoil";
import { globalSubmissions ,Submission } from "../store/atoms/submission"
import { Suspense, useState } from "react";





export const SubmissionActivityList = () =>{
   
    
    return(
        <Suspense fallback={"loading....."} >
            <_SubmissionActivityList/>
        </Suspense>    
    )
}


const _SubmissionActivityList  = () =>{
    const submissions = useRecoilValue(globalSubmissions);
    console.log('subm',submissions)
    return(
        <SubmissionActivityListComponent  submissions = {submissions} />
    )

}


interface SubmissionListActivityProps {
    submissions : Submission[]
}





const SubmissionActivityListComponent = ({submissions }:SubmissionListActivityProps) =>{
    const [startIndex ,setStartIndex] = useState(0)
    const itemsPerPage = 5

    const visibleSubmissions = submissions.slice(startIndex ,startIndex+itemsPerPage)
    return(
        <div className="border shadow-md ">
            <h2 className="m-4">Submissions</h2>
            {
                visibleSubmissions.map((submission,index)=>
                (<List  submission={submission} key={index}/>))
            }
            
        </div>
    )

}




interface ListProps {
    submission :Submission
}


const List = ({submission} :ListProps) =>{
    console.log('In a list----------->',submission)
    return (
    <div className="m-4 flex flex-row ">
        <div className="grow-0 shrink-0 basis-1/2">
            {submission.username}
        </div>
        <div className="grow-0 shrink-0 basis-16">
            #{330}
        </div>
        <div className="grow-0 shrink-0 basis-16">
            {submission.status =='AC'  ? <img src= {'../../public/greentick.png'} alt='green tick'/> : <img src= {'../../public/redcross.png'} alt='red tick'/>}
        </div>
        {/* <div>
            {submission.status}
        </div> */}
    </div>
    )
}