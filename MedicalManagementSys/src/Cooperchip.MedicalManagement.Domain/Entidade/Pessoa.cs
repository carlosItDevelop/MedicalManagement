using Cooperchip.MedicalManagement.Domain.Enum;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cooperchip.MedicalManagement.Domain.Entidade
{
    [Table("Pessoa")]
    public class Pessoa
    {
        public Pessoa()
        {
            PessoaId = Guid.NewGuid();
            DataInclusao = DateTime.Now;
        }

        [Key]
        public Guid PessoaId { get; set; }

        [Required]
        [MaxLength(100, ErrorMessage = "Nome é campo obrigatório!")]
        public string NomeRazao { get; set; }

        [Required(ErrorMessage = "Tipo de Pessoa é origatório!")]
        [Display(Name = "Tipo de Pessoa")]
        public TipoPessoa TipoPessoa { get; set; }

        [Display(Name = "Data da Inclusão")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DataInclusao { get; set; }

        [Required(ErrorMessage = "Campo obrigatório!")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime NascimentoFundacao { get; set; }

        public bool Ativo { get; set; }

        public string GetTipoPessoa(TipoPessoa tpessoa)
        {
            return tpessoa == TipoPessoa.Fisica ? "Física" : "Jurídica";
        }


    }
}
