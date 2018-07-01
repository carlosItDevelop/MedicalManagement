using Cooperchip.MedicalManagement.Domain.Entidade;
using FluentValidation;
namespace Cooperchip.MedicalManagement.Domain.Validations
{
    public class MensagemClearanceValidator : AbstractValidator<MensagemClearance>
    {
        public MensagemClearanceValidator()
        {
            Initializer();
        }
        private void Initializer()
        {
            SubstanciaValidator();
            ParametroInicialValidator();
            ParametroFinalValidator();
            MensagemValidator();
        }
        private void MensagemValidator()
        {
            RuleFor(m => m.Mensagem)
                .NotEmpty().NotNull()
                    .WithMessage("Campo Mensagem não pode ser Null ou Vazio!");
        }
        private void ParametroFinalValidator()
        {
            RuleFor(p => p.ParametroFinal)
                .GreaterThan(0).GreaterThan(pi => pi.ParametroInicial)
                .WithMessage("Parâmetro Final tem de ser Maior que Zero e Maior que Parâmetro Inicial!");
        }
        private void ParametroInicialValidator()
        {
            RuleFor(p => p.ParametroInicial)
                .GreaterThanOrEqualTo(0).WithMessage("Parâmetro Inicial tem de ser Maior ou Igual a Zero!");
        }
        private void SubstanciaValidator()
        {
            RuleFor(s => s.Substancia)
                .NotEmpty().NotNull()
                    .WithMessage("Campo Substância não pode ser Null ou Vazio!");
        }
    }
}
