import { FastifySchema } from "fastify";

const api_POST_RoomSchema: FastifySchema = {
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

export default api_POST_RoomSchema
