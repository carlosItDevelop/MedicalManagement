using System;
using Model;
using Models.HotItems;
using Newtonsoft.Json;
using RestSharp;
using SDK;

namespace View {
    public partial class FrmHotItems60Min : System.Web.UI.Page {
        

        protected void Page_Load(object sender, EventArgs e) {
            
        }
        protected void btnEnviar_Click(object sender, EventArgs e) {
            // 1 - Instância da Auth
            Meli m = new Meli(Convert.ToInt64(Application["APPID"]), Application["SECRETKEY"].ToString(), Session["aToken"].ToString());
            string code = Request["code"];


            string strResource = "";

            if(!cboHotItemsCategorias.Text.Equals("todas")) {
                strResource = "/sites/MLB/hot_items/search?category=" + cboHotItemsCategorias.Text.Trim();
            } else {
                strResource = "/sites/MLB/hot_items/search";
            }


            HotItems hotitems;

            try {
                IRestResponse response = m.Get(strResource);
                hotitems = JsonConvert.DeserializeObject<HotItems>(response.Content);
            } catch(Exception ex) {
                lblResultJSON.Text = ex.Message;
                return;
            }


            string linha = "";


            int numRegPorPg = hotitems.limit;
            string categoria = (hotitems.category != null ? hotitems.category.ToString() : "[Todas]");


            linha += "<table align='center' class='auto-style1'>";

            linha += "<tr><td class='auto-style7'>Limite: </td><td class='auto-style6'></td><td class='td_conteudo'>" + numRegPorPg.ToString() + "</td></tr>";
            linha += "<tr><td class='auto-style7'>Categoria: </td><td class='auto-style6'></td><td class='td_conteudo'>" + categoria + "</td></tr>";

            linha += "<tr><td class='auto-style11'></td><td class='auto-style11'></td><td class='auto-style11'></td></tr>";
            linha += "<tr><td class='auto-style11'></td><td class='auto-style11'></td><td class='auto-style11'></td></tr>";
            linha += "<tr><td class='auto-style11'></td><td class='auto-style11'></td><td class='auto-style11'></td></tr>";


            foreach(Models.HotItems.Result r in hotitems.results) {
                linha += "<tr><td class='auto-style7'>Item ID: </td><td class='auto-style6'></td><td class='td_conteudo'>" + r.id + "</td></tr>";

                linha += "<tr><td class='auto-style7'>Título: </td><td class='auto-style6'></td><td class='td_conteudo'>" + r.title + "</td></tr>";
                linha += "<tr><td class='auto-style7'>Subtítulo: </td><td class='auto-style6'></td><td class='td_conteudo'>" + r.subtitle + "</td></tr>";
                linha += "<tr><td class='auto-style7'>Preço: </td><td class='auto-style6'></td><td class='td_conteudo'>" + r.price.ToString("0.00") + "</td></tr>";
                linha += "<tr><td class='auto-style7'>Aceita Mercado Pago: </td><td class='auto-style6'></td><td class='td_conteudo'>" + (r.accepts_mercado_pago ? "[SIM]" : "[NÃO]") + "</td></tr>";
                linha += "<tr><td class='auto-style7'>Link do Anúncio: </td><td class='auto-style6'></td><td class='td_conteudo'><a href='" + r.permalink + "' target='_blank'>"+ r.permalink +"</a></td></tr>";
                linha += "<tr><td class='auto-style7'>Link da Imagem: </td><td class='auto-style6'></td><td class='td_conteudo'><a href='" + r.thumbnail + "' target='_blank'>" + "<img src='" + r.thumbnail + "'/></a></td></tr>";
                linha += "<tr><td class='auto-style7'>Modalidade: </td><td class='auto-style6'></td><td class='td_conteudo'>" + (r.listing_mode == "buy_it_now" ? "[Compre Já]" : r.listing_mode) + "</td></tr>";


                linha += "<tr><td class='auto-style11'></td><td class='auto-style11'></td><td class='auto-style11'></td></tr>";
                linha += "<tr><td class='auto-style11'></td><td class='auto-style11'></td><td class='auto-style11'></td></tr>";
                linha += "<tr><td class='auto-style11'></td><td class='auto-style11'></td><td class='auto-style11'></td></tr>";


            }

            linha += "</table>";

            linha += "<center><div>";
            lblResultJSON.Text = linha;
            linha += "</div></center>";
        }
    }
}