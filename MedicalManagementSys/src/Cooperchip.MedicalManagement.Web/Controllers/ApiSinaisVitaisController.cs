using Cooperchip.MedicalManagement.Infra.Data.ORM.EF.Contexto;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System;

namespace Cooperchip.MedicalManagement.Web.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    [RoutePrefix("api/v1/evm")]
    public class ApiSinaisVitaisController : ApiController
    {
        private MedicalManagementDbContext _db = new MedicalManagementDbContext();


        /// <summary>
        /// 
        /// </summary>
        /// <param name="idpc"></param>
        /// <param name="idpt"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("ObterSVitaisPorId")]
        public HttpResponseMessage GetSinaisVitaisPorId(Guid idpc, Guid idpt)
        {

            if (idpc == null || idpt == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            var sinalvital = (from sv in _db.SinaisVitais select sv)
                .Where(x => x.PacienteGuid == idpc && x.ProntuarioGuid == idpt)
                .ToList();


            if(sinalvital == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }


            return Request.CreateResponse(HttpStatusCode.OK, sinalvital);
        }

    }
}
