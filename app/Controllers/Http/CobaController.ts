import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CobaController {
  public async index ({response}: HttpContextContract) {
    let users: object = await Database.from('users').select('*')
    response.send(users)
  }

  public async store ({request, response}: HttpContextContract) {
    let name: string = request.body().name
    let email: string = request.body().email
    let password: string = request.body().password
    let role: string = request.body().role
    await Database.table('users').insert({
      name,
      email,
      password,
      role
    })
    response.send({name, email, password, role})
  }

  public async show ({response, params}: HttpContextContract) {
    let user: string = await Database.from('users').select('*').where('id', params.id).firstOrFail()
    response.send(user)
  }

  public async update ({request, response, params}: HttpContextContract) {
    await Database.from('users').where('id', params.id).update(request.body())
    response.send([
      params.id,
      request.all()
    ])
  }

  public async destroy ({response, params}: HttpContextContract) {
    await Database.from('users').where('id', params.id).delete()
    response.send({
      delete: params.id
    })
  }
}
