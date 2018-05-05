using Cooperchip.Common.Entity.Config.ConfigTypeConfiguration;
using Cooperchip.MedicalManagement.Domain.Entidade;

namespace Cooperchip.Common.Entity.Config.ModelTypeConfiguration
{
    class PacienteTypeConfiguration : CooperchipEntityAbstractConfig<Paciente>
    {
        protected override void ConfigForeingKey()
        {
            
        }

        protected override void ConfigPrimaryKey() => HasKey(pk => pk.PacienteGuid);

        protected override void ConfigTableFields()
        {
            Property(p => p.PacienteGuid)
                .IsRequired()
                .HasColumnName("PacienteGuid");

            Property(p => p.Nome)
                .IsRequired()
                .HasColumnName("Nome")
                .HasMaxLength(100);
        }

        protected override void ConfigTableName() => ToTable("Paciente");

        protected override void ConfigureRelationship()
        {
            //throw new System.NotImplementedException();
        }

    }
}
