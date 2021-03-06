'use strict'

function setupDetail_reservation(detail_reservationModel) {
  async function createDetail_reservation(detail_reservationNew) {
    const result = await detail_reservationModel.create(detail_reservationNew)
    return result.toJSON()
  }
  async function deleteDetail_reservationUuid(uuid) {
    const cond = { where: { uuid } }
    const result = await detail_reservationModel.destroy(cond)
    return result ? true : false
  }
  async function updateDetail_reservation(uuid, detail_reservation) {
  const cond = { where: { uuid } }
  const result = await detail_reservationModel.update(detail_reservation, cond)
  return result ? detail_reservationModel.findOne(cond) : new Error('No se actualizo ninguna reservacion')
  }
  function findAllDetail_reservation() {
    return detail_reservationModel.findAll()
  }
  async function findUuidDetail_Reservation(uuid) {
    const cond = { where: { uuid } }
    const result = await detail_reservationModel.findOne(cond)
    return result
  }

  return {
    createDetail_reservation,
    deleteDetail_reservationUuid,
    updateDetail_reservation,
    findAllDetail_reservation,
    findUuidDetail_Reservation
  }

}

module.exports = setupDetail_reservation