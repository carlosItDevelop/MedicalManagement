﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cooperchip.MedicalManagement.Domain.Entidade
{
    public class AuxUniGeog
    {
        [Key]
        public int UnidadeGeograficaId { get; set; }


        [Required(ErrorMessage = "Campo obrigatório!")]
        [MaxLength(9, ErrorMessage = "Máximo de caracteres permitidos: 9")]
        [MinLength(8)]
        public string Cep { get; set; }


        [Required]
        [MaxLength(120, ErrorMessage = "Máximo de caracteres permitidos: 120")]
        public string Logradouro { get; set; }


        [MaxLength(120, ErrorMessage = "Máximo de caracteres permitidos: 120")]
        public string Complemento { get; set; }


        [MaxLength(120, ErrorMessage = "Máximo de caracteres permitidos: 120")]
        public string Local { get; set; }


        [Required]
        public int IdUf { get; set; }


        [Required]
        public int IdCidade { get; set; }


        [Required]
        public int IdBairro { get; set; }
    }
}
