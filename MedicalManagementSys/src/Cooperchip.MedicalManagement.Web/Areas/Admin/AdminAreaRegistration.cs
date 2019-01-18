using System.Web.Mvc;

namespace Cooperchip.MedicalManagement.Web.Areas.Admin
{
    /// <summary>
    /// 
    /// </summary>
    public class AdminAreaRegistration : AreaRegistration 
    {
        /// <summary>
        /// 
        /// </summary>
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Admin_default",
                "Admin/{controller}/{action}/{id}",
                // new { action = "Index", id = UrlParameter.Optional }
                // Adiciona-se o nome do controller
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}