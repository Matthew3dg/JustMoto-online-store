import React from 'react';
import phone from './img/footer/phone.svg';
import telegram from './img/footer/telegram.svg';
import vk from './img/footer/vk.svg';
import whatsapp from './img/footer/whatsapp.svg';
import up from './img/footer/up.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__row">
					<div className="footer__text">© 2021 Все права защищены</div>
					<div className="footer__contacts">
						<a href="tel:+79002351721">
							<div className="footer__contact">
								<img src={phone} alt="phone" />
							</div>
						</a>
						<a href="https://t.me/Matthew3dg">
							<div className="footer__contact">
								<img src={telegram} alt="telegram" />
							</div>
						</a>
						<a href="https://vk.com/matthew3dg">
							<div className="footer__contact">
								<img src={vk} alt="vkontakte" />
							</div>
						</a>
						<a href="https://wa.me/79002351721">
							<div className="footer__contact">
								<img src={whatsapp} alt="WhatsApp" />
							</div>
						</a>
					</div>
					<a href="#">
						<div className="footer__up">
							<img src={up} alt="arrowUp" />
						</div>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
