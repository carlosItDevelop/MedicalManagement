using Cooperchip.MedicalManagement.Domain.Entidade;
using System.Data.Entity.ModelConfiguration;

namespace Cooperchip.Common.Entity.Config.ModelTypeConfiguration
{
    public class MedicoMapping : EntityTypeConfiguration<Medico>
    {

        public MedicoMapping()
        {
            ToTable("Medico");
            //.HasMany(x => x.Especialidade)
            //.WithRequired()
            //.HasForeignKey(x => x.EspecialidadeId);

            HasKey(e => e.MedicoId);
            Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(80)
                    .HasColumnName("Nome");


        }
    }
}



/*
 
     
                .HasMany(x => x.Medico)
                .WithOptional()
                .HasForeignKey(x => x.IdEspecialidade);
                





        [Display(Name = "CRM")]
        [MaxLength(10, ErrorMessage = "Máximo de caractere permitido: 10")]
        public string Crm { get; set; }

        [Display(Name = "Data de Nascimento")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime DataNascimento { get; set; }



        [ForeignKey("Especialidade")]
        [Display(Name = "Especialidade")]
        [Required(ErrorMessage = "Campo obrigatório.")]
        public int IdEspecialidade { get; set; }


        public virtual Especialidade Especialidade { get; set; }
     
     
     */
