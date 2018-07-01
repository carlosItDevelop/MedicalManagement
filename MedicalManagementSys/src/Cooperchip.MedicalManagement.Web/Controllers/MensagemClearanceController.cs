using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Cooperchip.MedicalManagement.Domain.Entidade;
using Cooperchip.MedicalManagement.Infra.Data.ORM.EF.Contexto;

namespace Cooperchip.MedicalManagement.Web.Controllers
{
    /// <summary>
    /// 
    /// </summary>
    public class MensagemClearanceController : Controller
    {
        private MedicalManagementDbContext db = new MedicalManagementDbContext();

        // GET: MensagemClearance
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task<ActionResult> Index()
        {
            var mensagensClearance = db.MensagemClearance.Include(m => m.Generico);
            return View(await mensagensClearance.ToListAsync());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            //MensagemClearance mensagensClearance = await db.MensagemClearance.FindAsync(id);

            MensagemClearance msgClearance = await (from mc in db.MensagemClearance
                                                    .Include(g => g.Generico) select mc)
                                                    .Where(x => x.MensagemClearanceId == id)
                                                    .FirstAsync();


            if (msgClearance == null)
            {
                return HttpNotFound();
            }
            return View(msgClearance);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Create()
        {
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao");
            return View();
        }



        /// <summary>
        /// 
        /// </summary>
        /// <param name="mensagensClearance"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(MensagemClearance mensagensClearance)
        {
            if (ModelState.IsValid)
            {
                db.MensagemClearance.Add(mensagensClearance);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagensClearance.GenericoId);
            return View(mensagensClearance);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagemClearance mensagensClearance = await db.MensagemClearance.FindAsync(id);
            if (mensagensClearance == null)
            {
                return HttpNotFound();
            }
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagensClearance.GenericoId);
            return View(mensagensClearance);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="mensagensClearance"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "MensagemClearanceId,GenericoId,Substancia,ParametroInicial,ParametroFinal,Mensagem")] MensagemClearance mensagensClearance)
        {
            if (ModelState.IsValid)
            {
                db.Entry(mensagensClearance).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagensClearance.GenericoId);
            return View(mensagensClearance);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagemClearance msgdel = await (from mc in db.MensagemClearance.Include(m => m.Generico) select mc)
                .Where(i => i.MensagemClearanceId == id).FirstAsync();



            if (msgdel == null)
            {
                return HttpNotFound();
            }
            return View(msgdel);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            MensagemClearance mensagensClearance = await db.MensagemClearance.FindAsync(id);
            db.MensagemClearance.Remove(mensagensClearance);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
