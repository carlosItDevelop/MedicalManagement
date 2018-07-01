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
    public class new_MensagemClearanceController : Controller
    {
        private MedicalManagementDbContext db = new MedicalManagementDbContext();

        // GET: MensagemClearance
        public async Task<ActionResult> Index()
        {
            var mensagemClearance = db.MensagemClearance.Include(m => m.Generico);
            return View(await mensagemClearance.ToListAsync());
        }

        // GET: MensagemClearance/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagemClearance mensagemClearance = await db.MensagemClearance.FindAsync(id);
            if (mensagemClearance == null)
            {
                return HttpNotFound();
            }
            return View(mensagemClearance);
        }

        // GET: MensagemClearance/Create
        public ActionResult Create()
        {
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao");
            return View();
        }

        // POST: MensagemClearance/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "MensagemClearanceId,GenericoId,Substancia,ParametroInicial,ParametroFinal,Mensagem")] MensagemClearance mensagemClearance)
        {
            if (ModelState.IsValid)
            {
                db.MensagemClearance.Add(mensagemClearance);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagemClearance.GenericoId);
            return View(mensagemClearance);
        }

        // GET: MensagemClearance/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagemClearance mensagemClearance = await db.MensagemClearance.FindAsync(id);
            if (mensagemClearance == null)
            {
                return HttpNotFound();
            }
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagemClearance.GenericoId);
            return View(mensagemClearance);
        }

        // POST: MensagemClearance/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "MensagemClearanceId,GenericoId,Substancia,ParametroInicial,ParametroFinal,Mensagem")] MensagemClearance mensagemClearance)
        {
            if (ModelState.IsValid)
            {
                db.Entry(mensagemClearance).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.GenericoId = new SelectList(db.Generico, "GenericoId", "Descricao", mensagemClearance.GenericoId);
            return View(mensagemClearance);
        }

        // GET: MensagemClearance/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            MensagemClearance mensagemClearance = await db.MensagemClearance.FindAsync(id);
            if (mensagemClearance == null)
            {
                return HttpNotFound();
            }
            return View(mensagemClearance);
        }

        // POST: MensagemClearance/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            MensagemClearance mensagemClearance = await db.MensagemClearance.FindAsync(id);
            db.MensagemClearance.Remove(mensagemClearance);
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
