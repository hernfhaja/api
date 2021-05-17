import { FastifySchema } from "fastify";

const api_GET_id_RoomSchema: FastifySchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        id : {type: 'number' },
        roomName : {type : 'string'}
      },
      additionalProperties: false
    }
    s
  }
}

export default api_GET_id_RoomSchema
