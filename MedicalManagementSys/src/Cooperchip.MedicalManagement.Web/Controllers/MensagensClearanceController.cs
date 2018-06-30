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
    public class MensagensClearanceController : Controller
    {
        private MedicalManagementDbContext db = new MedicalManagementDbContext();

        // GET: MensagensClearance
        public async Task<ActionResult> Index()
        {
            var mensagensClearance = db.MensagensClearance.Include(m => m.Generico);
            return View(await mensagensClearance.ToListAsync());
        }

        // GET: MensagensClearance/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagensClearance mensagensClearance = await db.MensagensClearance.FindAsync(id);
            if (mensagensClearance == null)
            {
                return HttpNotFound();
            }
            return View(mensagensClearance);
        }

        // GET: MensagensClearance/Create
        public ActionResult Create()
        {
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao");
            return View();
        }

        // POST: MensagensClearance/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "MensagensClearanceId,GenericoId,Substancia,ParametroInicial,ParametroFinal,Mensagem")] MensagensClearance mensagensClearance)
        {
            if (ModelState.IsValid)
            {
                db.MensagensClearance.Add(mensagensClearance);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagensClearance.GenericoId);
            return View(mensagensClearance);
        }

        // GET: MensagensClearance/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagensClearance mensagensClearance = await db.MensagensClearance.FindAsync(id);
            if (mensagensClearance == null)
            {
                return HttpNotFound();
            }
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagensClearance.GenericoId);
            return View(mensagensClearance);
        }

        // POST: MensagensClearance/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "MensagensClearanceId,GenericoId,Substancia,ParametroInicial,ParametroFinal,Mensagem")] MensagensClearance mensagensClearance)
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

        // GET: MensagensClearance/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagensClearance mensagensClearance = await db.MensagensClearance.FindAsync(id);
            if (mensagensClearance == null)
            {
                return HttpNotFound();
            }
            return View(mensagensClearance);
        }

        // POST: MensagensClearance/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            MensagensClearance mensagensClearance = await db.MensagensClearance.FindAsync(id);
            db.MensagensClearance.Remove(mensagensClearance);
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
