using System.Collections.Generic;

namespace Cooperchip.MedicalManagement.ApiResource.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string Role { get; set; }
        public Usuario Get(string Login, string Senha)
        {
            List<Usuario> usuarios = new List<Usuario>
            {
                new Usuario() { Id = 1, Login = "joao@email.com", Senha = "joao", Nome = "João", Role = "Usuario" },
                new Usuario() { Id = 2, Login = "antonio@email.com", Senha = "antonio", Nome = "Antônio", Role = "Supervisor" },
                new Usuario() { Id = 3, Login = "maria@email.com", Senha = "maria", Nome = "Maria", Role = "Admin" }
            };
            return usuarios.Find(x => x.Login == Login && x.Senha == Senha);
        }
    }
}