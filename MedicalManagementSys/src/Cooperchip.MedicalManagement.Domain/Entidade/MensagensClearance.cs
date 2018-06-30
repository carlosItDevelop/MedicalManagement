using Cooperchip.MedicalManagement.Domain.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cooperchip.MedicalManagement.Domain.Entidade
{
    public class MensagensClearance
    {
        public MensagensClearance()
        {
        }

        [Key]
        [Display(Name ="Id")]
        public int MensagensClearanceId { get; set; }

        [ForeignKey("Generico")]
        [Display(Name = "Genérico Id")]
        [Required(ErrorMessage = "Genérico Id é campo obrigatório!")]
        public int GenericoId { get; set; }

        public Generico Generico { get; set; }

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
