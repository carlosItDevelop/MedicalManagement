using System.ComponentModel.DataAnnotations;

namespace Cooperchip.MedicalManagement.Domain.Entidade
{
    public class Sexo
    {
        [Key]    
        public int SexoId { get; set; }

        [Required]
        [MaxLength(9)]
        public string Descricao { get; set; }
    }
}
