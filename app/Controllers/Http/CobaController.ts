import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class CobaController {
  public async index({ response }: HttpContextContract) {
    return Database.from('users').select('*')
  }

  public async create({ response }: HttpContextContract) {
    response.send('Create page')
  }

  public async store({ request, response }: HttpContextContract) {
    response.send(request)
  }

  public async edit({ request, response }: HttpContextContract) {
    let num: number = parseInt(request.params().id)
    response.send(num + 20)
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
