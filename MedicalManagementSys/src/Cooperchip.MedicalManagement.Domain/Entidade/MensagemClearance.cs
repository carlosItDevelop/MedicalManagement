using Cooperchip.MedicalManagement.Domain.Enum;
using Cooperchip.MedicalManagement.Domain.Validations;
using FluentValidation.Attributes;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cooperchip.MedicalManagement.Domain.Entidade
{
    //[Validator(typeof(MensagemClearanceValidator))]
    public class MensagemClearance
    {
        public MensagemClearance()
        {
        }

        [Key]
        [Display(Name ="Id")]
        public int MensagemClearanceId { get; set; }

        [ForeignKey("Generico")]
        [Display(Name = "Genérico Id")]
        [Required(ErrorMessage = "Genérico Id é campo obrigatório!")]
        public int GenericoId { get; set; }

        public virtual Generico Generico { get; set; }

        [Display(Name = "Substância")]
        [Required(ErrorMessage = "Substância é campo obrigatório!")]
        public Substancia Substancia { get; set; }

        [Display(Name = "Parâmetro Inicial")]
        [Required(ErrorMessage = "Parâmetro Inicial é campo obrigatório!")]
        public int ParametroInicial { get; set; }

        [Display(Name = "Parâmetro Final")]
        [Required(ErrorMessage = "Parâmetro Final Inicial é campo obrigatório!")]
        public int ParametroFinal { get; set; }

        [Required(ErrorMessage = "Mensagem é campo obrigatório!")]
        [StringLength(4000, ErrorMessage = "Máximo de caracter permitido: 4000.")]
        public string Mensagem { get; set; }


    }
}
