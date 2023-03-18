import gapi from "googleapis";
import GoogleAuth from "google-auth-library";

export default async function handler(req, res){
    const auth = new GoogleAuth({
        keyFile: 'ielc-student-reg-db7d2c9730e9.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    })

    const client = await auth.getClient
    const googleSheet = gapi.sheets({version: 'v4', auth: client})
    getMetaData= await googleSheets.spreadsheets.get({
        auth,
        spreadheetId: '',
        range : 'Sheet!A1:G3'
    })
    res.send(getMetaData)
}

/*const firstname= req.body.firstname
            const lastname= req.body.lastname
            const email= req.body.email
            const question= req.body.question*/