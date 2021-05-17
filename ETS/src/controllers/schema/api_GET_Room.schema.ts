import { FastifySchema } from "fastify";

const api_GET_RoomSchema: FastifySchema = {
  response: {
    200: {
      type: 'array',
      properties: {
        rooms : {type: 'array'}
      },
      additionalProperties: false
    }
  }
}

export default api_GET_RoomSchema
