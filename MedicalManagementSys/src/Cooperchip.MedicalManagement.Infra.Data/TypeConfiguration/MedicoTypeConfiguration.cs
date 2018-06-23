﻿using Cooperchip.Common.Entity.Config.TemplateMethod;
using Cooperchip.MedicalManagement.Domain.Entidade;

namespace Cooperchip.MedicalManagement.Infra.Data.TypeConfiguration
{
    class MedicoTypeConfiguration : CooperchipEntityAbstractConfig<Medico>
    {
        protected override void FieldsFluentConfig()
        {
            Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(80)
                    .HasColumnName("Nome");
        }

        protected override void ForeignKeyFluentConfig()
        {
            
        }

        protected override void PrimaryKeyFluentConfig()
        {
            HasKey(e => e.MedicoId);
        }

        protected override void TableFluentConfig()
        {
            ToTable("Medico");
        }
    }
}
