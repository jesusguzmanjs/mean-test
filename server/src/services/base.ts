
/** Import main dependencies */


import * as csv from 'fast-csv'
import * as fs from 'fs'


import { ObjectID } from 'mongodb';

/**
 * @class BaseService
 *
 * @description Class for define all business logic for base.
 */
 class BaseService {


    uploadCSV = async (request: any, reply: any, next: any): Promise<void> => {

        const fileRows = [];
        console.log(request.file)
        csv.parseFile(request.file.path, { headers: ['date', 'time', 'consumption', 'price', 'pricePerHour']})
            .on("error",  (error) => {
                console.error('error', error)
                next(error)
            })
            .on("data", (data) => {
                if (data.date) {
                    fileRows.push(data); // push each row
                }
            })
            .on("end", async () => {
                const database = request.app.locals.db;
                fileRows.splice(0, 1);
                database.insertMany(fileRows, (err, result) => {
                    if (err) {
                        console.log(err);
                        next(err)
                    }
                    if(result){
                        reply.send(result)
                        console.log('Import CSV into database successfully');
                    }
                })
                fs.unlinkSync(request.file.path);   // remove temp file
                //process "fileRows" and respond

            })






    }

    getBills = async (request: any, reply: any, next: any): Promise<void> => {
        const database = request.app.locals.db;
        const bills = await database.find({}).toArray();
        reply.send(bills)

    }

    updateBill = async (request: any, reply: any, next: any): Promise<void> => {
        const database = request.app.locals.db;
        const query = {_id: ObjectID(request.params.billId)}
        const data = {
            date: request.body.date,
            time: request.body.time,
            consumption: request.body.consumption,
            price: request.body.price,
            pricePerHour: request.body.pricePerHour
        }
        database.updateOne(query, { $set: data}, (err, result) => {
            if (err) {
                next(err)
            }
            reply.send(result)
        })

    }

    createBill = async (request: any, reply: any, next: any): Promise<void> => {
        const database = request.app.locals.db;
        const data = {
            date: request.body.date,
            time: request.body.time,
            consumption: request.body.consumption,
            price: request.body.price,
            pricePerHour: request.body.pricePerHour
        }
        database.insert(data, (err, result) => {
            if (err) {
                next(err)
            }
            reply.send(result)
        })

    }

    deleteBills = async (request: any, reply: any, next: any): Promise<void> => {
        const database = request.app.locals.db;
        const idsToDelete = request.body.ids.map((id) => ObjectID(id))
        database.deleteMany({_id: { $in: idsToDelete}}, (err, result) => {
            if (err) {
                next(err)
            }
            reply.send(result)
        })


    }



}

export default new BaseService;
