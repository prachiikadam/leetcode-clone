

import axios from "axios";
import { selector } from "recoil";



export interface Submission {   
    language: string,
    problemId: string,
    submission : string,
    username: string,
    status : string
}





export const globalSubmissions = selector({
    key :'globalsubmissions',
    get : async ({})=>{
        const response = await axios.get('https://getsubmissions-zxchso3wya-uc.a.run.app')
        console.log(response ,'response is')
        return response.data.response.map((x: any) => ({
            language: x.submission.language,
            timestamp: x.submission?.submissionTime?._nanoseconds,
            submission: x.submission.submission,
            status: x.submission.status,
            problemId: x.submission.problemId,
            username: x.user.userName,
          }));

    }
})