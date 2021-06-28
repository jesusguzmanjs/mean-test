/* eslint-disable @typescript-eslint/no-unused-vars */

/** Import main dependencies */
import fastify from 'fastify';

/** Import all Types */

/**
 * @class DispatcherMiddleware
 *
 * @description Class Base Middleware.
 *
 */
class BaseMiddleware {

    /**
     * @function onRequest
     *
     * @description Control onRequest Hook.
     *
     * @author Jose J Perez Rivas | @JoseJPR
     * @author Estefania Barrera | estefaniabarrera
     *
     * @param {fastify.DefaultQuery} request - request object of route.
     * @param {fastify.DefaultQuery} reply - reply object of route.
     *
     */
    async onRequest(
        request: fastify.DefaultQuery,
        reply: fastify.DefaultQuery,
    ): Promise<void> {

    }

    /**
     * @function preParsing
     *
     * @description Control preParsing Hook.
     *
     * @param {fastify.DefaultQuery} request - request object of route.
     * @param {fastify.DefaultQuery} reply - reply object of route.
     *
     */
    async preParsing(request: fastify.DefaultQuery, reply: fastify.DefaultQuery): Promise<void> {
        /*const auth = request.headers.authorization;
        if (auth) {
            const plainAuth = Buffer.from(auth.split(' ')[1], 'base64').toString();
            const validCredentials = `${process.env.EMERGYA_SERVER_USERNAME_SERVICE}:${process.env.EMERGYA_SERVER_PSSW_SERVICE}`;
            if (validCredentials !== plainAuth) {
                reply.code(401).send('Unauthorized credentials');
            }
        } else {
            console.log('No authorization credentials.');
            reply.code(401).send('Authorization required');
        }*/
    }

    /**
     * @function preHandler
     *
     * @description Control preHandler Hook.
     *
     * @param {fastify.DefaultQuery} request - request object of route.
     * @param {fastify.DefaultQuery} reply - reply object of route.
     *
     */
    async preHandler(request: fastify.DefaultQuery, reply: fastify.DefaultQuery): Promise<void> {
    }

    /**
     * @function preSerialization
     *
     * @description Control preSerialization Hook.
     *
     * @param {fastify.DefaultQuery} request - request object of route.
     * @param {fastify.DefaultQuery} reply - reply object of route.
     * @param {object} payload - payload object from body param of route.
     *
     */
    async preSerialization(request: fastify.DefaultQuery, reply: fastify.DefaultQuery,
                           payload: any): Promise<void> {
    }

    /**
     * @function onResponse
     *
     * @description Control onResponse Hook.
     *
     * @param {fastify.DefaultQuery} request - request object of route.
     * @param {fastify.DefaultQuery} reply - reply object of route.
     *
     */
    async onResponse(request: fastify.DefaultQuery, reply: fastify.DefaultQuery): Promise<void> {
    }
}

export default BaseMiddleware;
