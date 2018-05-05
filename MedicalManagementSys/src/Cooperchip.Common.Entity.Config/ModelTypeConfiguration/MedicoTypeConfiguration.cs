
using Cooperchip.Common.Entity.Config.ConfigTypeConfiguration;
using Cooperchip.MedicalManagement.Domain.Entidade;

namespace Cooperchip.Common.Entity.Config.ModelTypeConfiguration
{
    class MedicoTypeConfiguration : CooperchipEntityAbstractConfig<Medico>
    {
        protected override void ConfigForeingKey()
        {


        }

        protected override void ConfigPrimaryKey()
        {
            HasKey(x => x.MedicoId);
        }

        protected override void ConfigTableFields()
        {
            //throw new NotImplementedException();
        }

        protected override void ConfigTableName()
        {
            ToTable("Medico");
        }
        protected override void ConfigureRelationship()
        {
            //throw new System.NotImplementedException();
        }

    }
}


/*
 


        [Required(ErrorMessage = "Campo obrigatório.")]
        [MaxLength(80, ErrorMessage = "Máximo de caractere permitido: 80")]
        public string Nome { get; set; }


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
