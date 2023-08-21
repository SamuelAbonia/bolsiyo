export interface EntityRepository<T> {
  save(params: T): Promise<void>;

  getById(id: string): Promise<T>;

  getAll(): Promise<T[]>;
}
