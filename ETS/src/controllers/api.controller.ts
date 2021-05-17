import { FastifyReply, FastifyRequest } from 'fastify';
import { Controller, DELETE, GET, getInstanceByToken, POST, PUT } from 'fastify-decorators';
import ApiService from '../services/api.service';
import api_GET_RoomSchema from './schema/api_GET_Room.schema';
import api_GET_id_RoomSchema from './schema/api_GET_id_Room.schema';
import api_POST_RoomSchema from './schema/api_POST_Room.schema';
import api_DELETE_RoomSchema from './schema/api_DELETE_Room.schema';
import api_PUT_RoomSchema from './schema/api_PUT_Room.schema';

@Controller({ route: '/api' })
export default class ApiController {

  private apiService = getInstanceByToken<ApiService>(ApiService);

  @GET({
    url: '/rooms',
    options: {
      schema: api_GET_RoomSchema
    }
  })
  async api_GET_RoomHandler(req: FastifyRequest, reply: FastifyReply): Promise<object>{
    const roomArray = [
      { "id" : 1, roomName : "A"+1} ,
      { "id" : 2, roomName : "A"+2} ,
      { "id" : 3, roomName : "A"+3} 
    ]
    return  roomArray
  }

  @GET({
    url: '/rooms/:id',
    options: {
      schema: api_GET_id_RoomSchema
    }
  })
  async api_GET_id_RoomHandler(req: FastifyRequest, reply: FastifyReply): Promise<object>{
    const param : any = req.params
    const id = param.id

    return  { id : id , roomName : "A"+id}
  }

  @POST({
    url: '/rooms',
    options: {
      schema: api_POST_RoomSchema
    }
  })
  async api_POST_RoomHandler(req: FastifyRequest, reply: FastifyReply): Promise<object>{
    const rooms = [{id : 1 , roomName : "A1"},{id : 2 , roomName : "A2"}];
    const room : any = req.body
    rooms.push(room)
  // const res = 'insert room "'+ rooms[0].roomName +'" complete'

    return   rooms
  }

  @PUT({
    url: '/rooms/:id',
    options: {
      schema: api_PUT_RoomSchema
    }
  })
  async api_PUT_RoomHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
    const rooms = [{id : "1" , roomName : "A1"},{id : "2" , roomName : "A2"}];
    const room : any =  req.body
    const param : any = req.params
    const id = param.id
    const roomName = room.roomName

    rooms[id].roomName = roomName
    // const res = 'insert room "'+ rooms[id].roomName +'" complete'
    
    return  rooms
  }

  @DELETE({
    url: '/rooms/:id',
    options: {
      schema: api_DELETE_RoomSchema
    }
  })
  async api_DELETE_RoomHandler(req: FastifyRequest, reply: FastifyReply): Promise<object> {
    const rooms = [{id : "1" , roomName : "A1"},{id : "2" , roomName : "A2"},{id : "3" , roomName : "A3"}];
    const room : any =  req.body
    const param : any = req.params
    const id = param.id
    rooms.splice(id,1)
    // const res = 'delete room "'+ room.roomName +'" complete'
    
    return  rooms
  }




}


