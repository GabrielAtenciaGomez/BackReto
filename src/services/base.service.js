const mapper = require("automapper-js");
const { Error } = require("sequelize");

class BaseService {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository;
    this._entityToMap = entityToMap;
  }

  async getAll() {
    const entities = await this._entityRepository.getAll();
    return entities.map((entity) => mapper(this._entityToMap, entity.toJSON()));
  }

  async get(id) {
    let entity = await this._entityRepository.get(id);
    if (!entity) {
      return null;
    }

    return mapper(this._entityToMap, entity.toJSON());
  }

  async create(entity) {
    const createdEntity = await this._entityRepository.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await this._entityRepository.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await this._entityRepository.delete(id);
    return deletedEntity;
  }
}
module.exports = BaseService;
