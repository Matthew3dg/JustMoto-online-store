import React from 'react';
import phone from '../components/img/footer/phone.svg';
import telegram from '../components/img/footer/telegram.svg';
import vk from '../components/img/footer/vk.svg';
import whatsapp from '../components/img/footer/whatsapp.svg';

function Contacts() {
	return (
		<div className="content">
			<div className="header">
				<h1 className="header__title title">Контакты</h1>
			</div>
			<div className="contacts">
				<div className="container">
					<h2 className="contacts__title title">Как с нами связаться?</h2>
					<p className="contacts__subtitle">
						Вы можете связаться с нами удобным для вас способом:
					</p>
					<div className="contacts__row">
						<a href="tel: +74951234567" className="contacts__link">
							<div className="contacts__item">
								<div className="contacts__image">
									<img src={phone} alt="Phone" />
								</div>
								<div className="contacts__body">
									<div className="contacts__item-title">По телефону:</div>
									<div className="contacts__text">+7 900 235-17-21</div>
								</div>
							</div>
						</a>
						<a href="https://wa.me/79002351721" className="contacts__link">
							<div className="contacts__item">
								<div className="contacts__image">
									<img src={whatsapp} alt="WhatsApp" />
								</div>
								<div className="contacts__body">
									<div className="contacts__item-title">В WhatsApp:</div>
									<div className="contacts__text">+7 900 235-17-21</div>
								</div>
							</div>
						</a>
						<a href="https://vk.com/matthew3dg" className="contacts__link">
							<div className="contacts__item">
								<div className="contacts__image">
									<img src={vk} alt="VK" />
								</div>
								<div className="contacts__body">
									<div className="contacts__item-title">Вконтакте:</div>
									<div className="contacts__text">vk.com/matthew3dg</div>
								</div>
							</div>
						</a>
						<a href="https://t.me/Matthew3dg" className="contacts__link">
							<div className="contacts__item">
								<div className="contacts__image">
									<img src={telegram} alt="Telegram" />
								</div>
								<div className="contacts__body">
									<div className="contacts__item-title">В Telegram</div>
									<div className="contacts__text">@Matthew3dg</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
