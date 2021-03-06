import DB from '../../../database/db'

const SwiperData = async (request, response) => {
	const db = new DB()
	const allEntries = await db.getAll()

	response.status(200).json({ data: allEntries })
}

export default SwiperData