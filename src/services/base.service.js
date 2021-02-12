const mapper = require("automapper-js");
let _entityRepository = null;
let _entityToMap = null;

class BaseService {
  constructor(EntityRepository, entityToMap) {
    _entityRepository = EntityRepository;
    _entityToMap = entityToMap;
  }

  async getAll() {
    const entities = await _entityRepository.getAll();
    return entities.map((entity) => mapper(_entityToMap, entity.toJSON()));
  }

  async get(id) {
    const entity = await _entityRepository.get(id);
    return entity;
  }

  async create(entity) {
    const createdEntity = await _entityRepository.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await _entityRepository.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await _entityRepository.delete(id);
    return deletedEntity;
  }
}
module.exports = BaseService;
