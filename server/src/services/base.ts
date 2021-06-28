/* eslint-disable no-restricted-syntax */

/** Import main dependencies */
const http = require('http');
const fs = require('fs');


const csv = require('fast-csv');


import { MongoClient } from 'mongodb';
const uri = `mongodb://127.0.0.1:27017`;
const dbClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


/**
 * @class BaseService
 *
 * @description Class for define all business logic for base.
 */
 class BaseService {
     constructor() {
        try {
            dbClient.connect();
        } catch (e) {
            console.error(e);
        }
    }


    uploadCSV = async (request: any, reply: any): Promise<void> => {
        // to accumulate the file in memory! Be careful!
        //
        // await data.toBuffer() // Buffer
        //
        // or


        // be careful of permission issues on disk and not overwrite
        // sensitive files that could cause security risks

        // also, consider that if the file stream is not consumed, the promise will never fulfill

        const fileRows = [];
        csv.parseFile(request.file.path, { headers: ['date', 'time', 'consumption', 'price', 'price per hour']})
            .on("data", function (data) {
                fileRows.push(data); // push each row
            })
            .on("end", async () => {
                const database = dbClient.db('welness-test').collection('bills');
                fileRows.splice(0, 1);
                console.log('los filerow despues', fileRows)
                database.insertMany(fileRows, (err, result) => {
                    if (err) console.log(err);
                    if(result){
                        console.log('Import CSV into database successfully');
                    }
                })
                console.log(fileRows);
                // console.log(fileRows) //contains array of arrays. Each inner array represents row of the csv file, with each element of it a column
                fs.unlinkSync(request.file.path);   // remove temp file
                //process "fileRows" and respond
            })

        reply.send()

    }

    getBills = async (request: any, reply: any): Promise<void> => {
        // to accumulate the file in memory! Be careful!
        //
        // await data.toBuffer() // Buffer
        //
        // or


        // be careful of permission issues on disk and not overwrite
        // sensitive files that could cause security risks

        // also, consider that if the file stream is not consumed, the promise will never fulfill

        const database = dbClient.db('welness-test').collection('bills');
        const bills = await database.find({}).toArray()
        console.log('los bills', bills)
        reply.send(bills)

    }



}

export default new BaseService;
