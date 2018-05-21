
using Cooperchip.MedicalManagement.Domain.Entidade;
using System.Data.Entity.ModelConfiguration;

namespace Cooperchip.Common.Entity.Config.ModelTypeConfiguration
{
    public class EspecialidadeMap : EntityTypeConfiguration<Especialidade>
    {
        public EspecialidadeMap()
        {
            ToTable("Especialidade");


            HasKey(e => e.EspecialidadeId);
            Property(e => e.Descricao)
                .IsRequired()
                .HasMaxLength(80)
                .HasColumnName("Descricao");

        }
    }
}


