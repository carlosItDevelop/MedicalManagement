using Cooperchip.MedicalManagement.Infra.Data.ORM.EF.Contexto;
using System;
using System.Data.Entity;
using System.Linq;

namespace Cooperchip.MedicalManagement.Infra.Data.Repository
{
    public abstract class Repository<TEntity> : IDisposable,
        IRepository<TEntity> where TEntity : class
    {
        MedicalManagementDbContext ctx = new MedicalManagementDbContext();
        public void Adicionar(TEntity obj)
        {
            ctx.Set<TEntity>().Add(obj);
        }

        public void Atualizar(TEntity obj)
        {
            ctx.Entry(obj).State = EntityState.Modified;
        }

        public void Excluir(Func<TEntity, bool> predicate)
        {
            ctx.Set<TEntity>()
                .Where(predicate).ToList()
                .ForEach(del => ctx.Set<TEntity>().Remove(del));
        }

        public TEntity Find(params object[] key)
        {
            return ctx.Set<TEntity>().Find(key);
        }

        public IQueryable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            return GetAll().Where(predicate).AsQueryable();
        }

        public IQueryable<TEntity> GetAll()
        {
            return ctx.Set<TEntity>();
        }

        public void SalvarTodos()
        {
            ctx.SaveChanges();
        }
        public void Dispose()
        {
            ctx.Dispose();
        }

    }
}
