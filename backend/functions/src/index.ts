/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { } from "firebase-functions";
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


export const getSubmissions = onRequest({cors: true}, async (req, res)=>{
  const limit = req.body.limit || 10;
  const result = await db.collection("submissions").limit(limit).orderBy("submissionTime", "desc").get();
  console.log(result.docs);
  const submissions : Promise<any>[] =[];
  result.docs.forEach((doc)=>{
    submissions.push(new Promise(async (resolve) => {
      // console.log(doc.data().user)
      const snapshot = await doc.data().user.get();
      resolve({
        submission: doc.data(),
        user: snapshot.data(),
      });
    }));
  });


  res.send({
    response: await Promise.all(submissions),
  });
});


// export const getProblemList =  onRequest({cors:true},async(req,res)=>{

//     const problemList = await db.collection('problems').limit(10).orderBy("").get()
// })
