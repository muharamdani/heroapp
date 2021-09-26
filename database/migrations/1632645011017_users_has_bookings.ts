import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasBookings extends BaseSchema {
  protected tableName = 'users_has_bookings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('booking_id')
        .unsigned()
        .references('id')
        .inTable('bookings')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
