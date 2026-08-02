import mongoose from "mongoose"
import { MongoMemoryServer } from "mongodb-memory-server"

let mongoServer: MongoMemoryServer

export const connectTestDB = async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
}

export const clearTestDB = async () => {
  const collections = mongoose.connection.collections

  for (const collection of Object.values(collections)) {
    await collection.deleteMany({})
  }
}

export const closeTestDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()
}
