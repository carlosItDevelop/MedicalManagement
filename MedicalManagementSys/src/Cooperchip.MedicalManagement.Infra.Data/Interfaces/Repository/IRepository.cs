﻿using System;
using System.Linq;

namespace Cooperchip.MedicalManagement.Infra.Data.Repository
{
    interface IRepository<TEntity> 
        where TEntity : class
    {
        IQueryable<TEntity> GetAll();
        IQueryable<TEntity> Get(Func<TEntity, bool> predicate);
        TEntity Find(params object[] key);
        void Atualizar(TEntity obj);
        void SalvarTodos();
        void Adicionar(TEntity obj);
        void Excluir(Func<TEntity, bool> predicate);
    }
}
