        /// <summary>
        /// 
        /// </summary>
        /// <param name="toAddress"></param>
        /// <param name="subjectText"></param>
        /// <param name="bodyText"></param>
        public void SendMessage(string toAddress, string subjectText, string bodyText)
        {
            //var mailSettings = ConfigurationManager.AppSettings["system.net"];
            MailMessage newMessage = new MailMessage();
            MailAddress senderAddress = new MailAddress("evolumedsys@gmail.com");
            MailAddress recipentAddress = new MailAddress(toAddress);

            newMessage.To.Add(recipentAddress);
            newMessage.From = senderAddress;
            newMessage.Subject = subjectText;
            newMessage.Body = bodyText;
            newMessage.BodyEncoding = System.Text.Encoding.UTF8;
            newMessage.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;

            SmtpClient client = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                Timeout = 10000,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(ConfigurationManager.AppSettings["mycredencial"].ToString(), 
                                                    ConfigurationManager.AppSettings["mypassword"].ToString());
            };
            client.Send(newMessage);
        }
		
		_AppStart.cshtml
		@{ 
		//WebMail.SmtpServer = "smtp.gmail.com";
		//WebMail.SmtpPort = 465;
		//WebMail.EnableSsl = true;
		//WebMail.UserName = "evolumedsys@gmail.com";
		//WebMail.Password = "emab04imeaj13";
		//WebMail.From = "evolumedsys@gmail.com";
		}		
