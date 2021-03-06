﻿using System.Web.Mvc;
using System.Web.Routing;

namespace Cooperchip.MedicalManagement.Web {
    /// <summary>
    /// 
    /// </summary>
    public class RouteConfig {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="routes"></param>
        public static void RegisterRoutes(RouteCollection routes) {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                // Caso use Area defina o namespace
                namespaces: new[] { "Cooperchip.MedicalManagement.Web.Controllers" }
            );

        }
    }
}
