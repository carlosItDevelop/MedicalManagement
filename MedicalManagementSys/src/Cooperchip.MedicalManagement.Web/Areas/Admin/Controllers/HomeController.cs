﻿

using System.Web.Mvc;

namespace Cooperchip.MedicalManagement.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [Authorize]
    public class HomeController : Controller
    {
        // GET: Admin/Home
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View();
        }
    }
}