import { FastifySchema } from "fastify";

const api_DELETE_RoomSchema: FastifySchema = {
  response: {
    200: {
      type: 'array',
      properties: {
        roomName : {type: 'array'}
      },
      additionalProperties: false
    }
  }
}

export default api_DELETE_RoomSchema
