using System.Data.Entity.ModelConfiguration;

namespace Cooperchip.Common.Entity.Config.ConfigTypeConfiguration
{
    public abstract class CooperchipEntityAbstractConfig<TEntity> : EntityTypeConfiguration<TEntity> where TEntity : class
    {
        public CooperchipEntityAbstractConfig()
        {
            ConfigTableName();
            ConfigTableFields();
            ConfigPrimaryKey();
            ConfigForeingKey();
            ConfigureRelationship();
        }

        protected abstract void ConfigForeingKey();
        protected abstract void ConfigPrimaryKey();
        protected abstract void ConfigTableFields();
        protected abstract void ConfigTableName();
        protected abstract void ConfigureRelationship();

    }
}


