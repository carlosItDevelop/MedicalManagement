using Cooperchip.MedicalManagement.Domain.Entidade;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cooperchip.Common.Entity.Config.ModelTypeConfiguration
{
    public class PacienteMap : EntityTypeConfiguration<Paciente>
    {

        public PacienteMap()
        {
            this.ToTable("Paciente");
            this.HasKey(x => x.PacienteGuid);
            this.Property(x => x.Alergia)
                .HasMaxLength(120);
            this.Property(x => x.CodigoCid)
                .IsRequired()
                .HasMaxLength(5);
            this.Property(x => x.Complicacao)
                .IsRequired()
                .HasMaxLength(150);

        }
    }
}
